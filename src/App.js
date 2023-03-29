import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'watch',
          price: '99',
          img: '',
          qty: 1,
          id: 1
        },
        {
          title: 'Mobile Phone',
          price: '999',
          img: '',
          qty: 10,
          id: 2
        },
        {
          title: 'Laptop',
          price: '1000',
          img: '',
          qty: 4,
          id: 3
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    });
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty === 0) return;

    products[index].qty -= 1;

    this.setState({
      products: products
    });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    });
  }

  getCartCount= ()=> {
    const {products} = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
