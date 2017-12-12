import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../sass/style.sass';

class App extends Component {
  render() {
    return (
      <div>
        <h1>todo</h1>
        <footer>
          <small>
            Developed by{' '}
            <a href="https://silvestrevivo.github.io/" target="_blank" rel="noopener noreferrer">
              @silvestrevivo
            </a>
          </small>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
