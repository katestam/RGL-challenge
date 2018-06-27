import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

if (document.getElementById("root")) {
  ReactDOM.render(<Index />, document.getElementById("root"));
}
