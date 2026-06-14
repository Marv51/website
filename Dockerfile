# Dev container for the react-website app (React Router 7 + Vite).
#
# The source lives in src/ and is bind-mounted to /app at runtime (see
# docker-compose.yml). Dependencies are installed at startup against the
# mounted lockfile, so changing package.json just needs a container restart
# rather than an image rebuild. Installed deps live in the /app/node_modules
# volume, so they persist between runs and aren't reinstalled from scratch.
FROM node:24-slim

WORKDIR /app

# Vite dev server.
EXPOSE 5173

# npm install (not ci) so it's incremental against the warm node_modules
# volume; --host makes the dev server reachable from outside the container.
CMD ["sh", "-c", "npm install && npm run dev -- --host"]
