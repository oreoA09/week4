const React = require("react");

function DefaultLayout(html) {
  return (
    <html>
      <head>
        <title>{html.title}</title>
      </head>
      <body>
        <h1>HTML Rendering</h1>
        <div>{html.children}</div>
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
