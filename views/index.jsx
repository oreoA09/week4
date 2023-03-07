const React = require('react');
const DefaultLayout = require('./layouts/default');

function HelloMessage(props) {
  return (
    <DefaultLayout>
      <h2>Index</h2>
    </DefaultLayout>
  );
}

module.exports = HelloMessage;