import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './model/header/header'
import Body from './model/body/body'
import Footer from './model/footer/footer'
import './index.css';


class App extends Component {

    render() {
      return (
        <div className="container">
          <Header />
          <Body />
          <Footer />
        </div>
      );
    }
  }
   

ReactDOM.render(<App />, document.getElementById('root'));