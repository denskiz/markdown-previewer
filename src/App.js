import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    state = {
      markdown: "Heading\n=======\r\n\r\nSub-heading\r\n-----------\r\n\r\n### Another deeper heading\r\n\r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a\r\nline break\r\n\r\nText attributes *italic*, **bold**,\r\n`monospace`, ~~strikethrough~~ .\r\n\r\nShopping list:\r\n\r\n  * apples\r\n  * oranges\r\n  * pears\r\n\r\nNumbered list:\r\n\r\n  1. apples\r\n  2. oranges\r\n  3. pears\r\n\r\nThe rain---not the reign---in\r\nSpain.\r\n\r\n"
    };
  

  handleChange(event) {
    this.setState({ markdown: event.target.value});
  }
  render() {
    return (
      <div>
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Github Flavored Markdown Previewer</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h2>Markdown</h2>
            <textarea id="editor" className="form-control"onChange={this.handleChange.bind(this)} value={this.state.markdown} rows={10} cols={30}/>
          </div>
          <div className="col-lg-6 col-md-6">
            <h2>Preview</h2>
              <div id="preview">{(this.state.markdown)}</div>
          </div>
          <div className="col-md-12">
            <footer>
              <br/>
              <br/>
              <div>a freeCodeCamp <i className="fa fa-free-code-camp"></i> Project</div>	
            </footer>
          </div>
        </div>
        </div>
      </div>
    );
  }
}