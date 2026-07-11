export function NotFound() {
  return (
    <main className="notfound">
      <p className="notfound-code">404</p>
      <h1 className="notfound-title">Page not found</h1>
      <p className="notfound-text">
        The page you were looking for doesn&rsquo;t exist or has moved.
      </p>
      <p className="notfound-text notfound-text-de" lang="de">
        Diese Seite existiert nicht oder wurde verschoben.
      </p>
      <p className="notfound-actions">
        <a className="btn btn-primary" href="/">Back home</a>
      </p>
    </main>
  );
}
