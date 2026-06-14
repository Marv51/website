#!/usr/bin/env bash
#
# get-fraunces.sh
# Downloads the Fraunces variable font (WOFF2) from Google Fonts,
# subset to latin + latin-ext (covers German ä ö ü ß and broader European Latin),
# plus the OFL license file so the font can be redistributed/self-hosted cleanly.
#
# Fraunces is a variable font with these axes:
#   wght  100..900   (weight)
#   opsz  9..144     (optical size)
#   SOFT  0..100     (softness)
#   WONK  0..1       (wonkiness)
# Both upright and italic styles are fetched.
#
# Requires: curl
#
set -euo pipefail

OUT_DIR="fraunces"
mkdir -p "$OUT_DIR"

# --- OFL license ---------------------------------------------------------
# The OFL requires the license text to travel with the font when redistributed.
# Pull it straight from the upstream Fraunces repo on GitHub.
LICENSE_URL="https://raw.githubusercontent.com/undercasetype/Fraunces/master/OFL.txt"
echo "Fetching OFL license..."
if curl -sSL "$LICENSE_URL" -o "$OUT_DIR/OFL.txt"; then
  echo "  -> OFL.txt"
else
  echo "  ! Could not fetch OFL.txt — grab it manually from the Fraunces repo." >&2
fi

# A desktop-browser UA is required so Google serves WOFF2 (variable) instead of
# legacy TTF. The css2 endpoint returns @font-face blocks with the file URLs.
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

# Full variable-font request: all four axes at their full ranges, upright + italic.
# Google returns one WOFF2 per subset (latin, latin-ext, etc.) per style.
CSS_URL="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1&display=swap"

echo "Fetching CSS from Google Fonts..."
CSS=$(curl -sSL -H "User-Agent: $UA" "$CSS_URL")

echo "$CSS" > "$OUT_DIR/fraunces.css"

# Extract every font file URL from the CSS.
URLS=$(grep -oE 'https://[^)]+\.woff2' <<< "$CSS" | sort -u)

if [ -z "$URLS" ]; then
  echo "No WOFF2 URLs found — Google may have served a different format." >&2
  echo "Check $OUT_DIR/fraunces.css to inspect the response." >&2
  exit 1
fi

# We only want the subsets relevant to German/European Latin.
# Google groups the CSS into @font-face blocks, each preceded by a subset
# comment (/* latin */, /* latin-ext */, ...) and carrying a font-style
# (normal | italic). Each block is a single variable WOFF2 spanning all axes.
echo "Downloading WOFF2 files (latin + latin-ext only)..."

# We rewrite the CSS in place so src: url(...) points at the local files.
LOCAL_CSS="$CSS"

current_subset=""
current_style="normal"
while IFS= read -r line; do
  # Track the subset from the comment that precedes each @font-face block.
  if [[ "$line" =~ /\*[[:space:]]*([a-z0-9-]+)[[:space:]]*\*/ ]]; then
    current_subset="${BASH_REMATCH[1]}"
  fi
  # Track upright vs italic within the block.
  if [[ "$line" =~ font-style:[[:space:]]*italic ]]; then
    current_style="italic"
  elif [[ "$line" =~ font-style:[[:space:]]*normal ]]; then
    current_style="normal"
  fi
  # When we hit a woff2 url, download it if the subset is one we want.
  if [[ "$line" =~ (https://[^\)]+\.woff2) ]]; then
    url="${BASH_REMATCH[1]}"
    case "$current_subset" in
      latin|latin-ext)
        # Deterministic name: one variable file per style per subset.
        fname="fraunces-variable-${current_style}-${current_subset}.woff2"
        echo "  -> $fname"
        curl -sSL -H "User-Agent: $UA" "$url" -o "$OUT_DIR/$fname"
        # Point the CSS at the local file instead of the Google URL.
        LOCAL_CSS="${LOCAL_CSS//$url/./$fname}"
        ;;
      *)
        : # Skip cyrillic, greek, vietnamese, etc.
        ;;
    esac
  fi
done <<< "$CSS"

echo "$LOCAL_CSS" > "$OUT_DIR/fraunces.css"

echo
echo "Done. Files in ./$OUT_DIR/"
echo "  fraunces.css   — @font-face rules, src rewritten to local files"
echo "  OFL.txt        — license (keep it alongside the fonts)"
echo
echo "Note: fraunces.css may still contain @font-face blocks for non-Latin"
echo "subsets pointing at remote URLs — delete those blocks if you don't want them."
