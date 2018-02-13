import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';
import logo from '../logo.svg';
import '../App.css';
//import DatePicker from './DatePicker';


class App extends Component {
  render() {
    console.log("App - render - this.props:");
    console.log(this.props);

    return (
     <Form inline> 
      <div className="App">

        
            <Header />
            <Body 
              todoItems = {this.props.todoItems} 
              buttonOnClick = {this.props.buttonOnClick}
              saveTodo = {this.props.saveTodo}
            />
            <Footer />
         

      </div>
    </Form>
    );
  }
}

export default App;
