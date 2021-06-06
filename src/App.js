
// import CheckOut from './checkout.component';
import React from 'react';
import Cart from './components/cart';
import Filter from './components/filter';
import Products from './components/products';
import data from './data.json';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size: "",
      sort: "",
    }
  }

  removeFromCart = async (product) => {
    let cartItems = [...this.state.cartItems];

    //this.setState({ cartItems: cartItems.filter((x) => x._id !== product._id) });

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        if (item.count === 1) {
          cartItems = cartItems.filter((x) => x._id !== product._id)
        } else {
          item.count = item.count - 1;
        }

      }
    })

    await this.setState({ cartItems: cartItems });
    localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));

  }

  addToCart = async (product) => {
    const cartItems = this.state.cartItems;
    let alreadyExists = false;

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        alreadyExists = true;
        item.count++;
      }
      return;
    });

    if (!alreadyExists) {
      cartItems.push({ ...product, count: 1 })
    }

    await this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));

  }

  sortProducts = (event) => {
    const sort = event.target.value;

    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === "lowest" ? ((a.price > b.price) ? 1 : -1)
          : sort === "highest" ? ((a.price < b.price ? 1 : -1))
            : a._id > b._id
              ? 1
              : -1
      ))

    }))

  }

  filterProducts = async (event) => {
    if (event.target.value === "" || event.target.value === "all") {
      await this.setState({ size: event.target.value, products: data.products })
    } else {
      await this.setState({
        size: event.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
      })
    }

    console.log(this.state.products.length);

  }

  createOrder = (order) => {
    alert("Need to Save Order" + order.name);
  }


  render() {
    const { cartItems } = this.state;
    return (
      <div className="grid-container">
        <header>
          <a href="/" >React Shoping Cart</a>
        </header>

        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              >
              </Filter>
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart cartItems={cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
            </div>
          </div>
        </main>

        <footer>
          All right Reserved
        </footer>

        {/* <CheckOut /> */}
      </div>
    );
  }
}

export default App;


  // const mapDispatchToProps = (dispatch) => ({
  //   addItem: () => dispatch(addItem()),
  //   removeItem: () => dispatch(removeItem())
  // })

  // const mapStateToProps = createStructuredSelector({
  //   cart: selectCartItems
  // })

  // export default connect(
  //   mapStateToProps,
  //   mapDispatchToProps
  // )(App);
