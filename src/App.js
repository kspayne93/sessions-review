import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    product: '',
    cart: []
  }


  componentDidMount() {
    axios.get(`/api/cart`).then(res => {
      this.setState({
        cart: res.data
      });
    });
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val //the brackets around prop make it so that it will set state with the property name, rather than a property called 'prop'. The brackets make the property name getting set to state dynamic.
    })
  };

  addProduct() {
    axios.post('/api/cart', {product: this.state.product }).then((res =>
      this.setState({
        cart: res.data,
        product: '' //once the product has been added to the cart, the product input will be reset because we reset state back to an empty string
      })
    ))
   } 


  render() {
    return (
      <div className="App">
        <input 
        value={this.state.product}
        onChange={ (e) => this.handleChange('product', e.target.value) } 
        type="text"/>
        <button onClick={ () => this.addProduct() } >Send</button>
        <h2> {this.state.cart} </h2>
      </div>
    );
  }
}

export default App;
