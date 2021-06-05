
// import CheckOut from './checkout.component';
import React from 'react';
import Filter from './components/filter';
import Products from './components/products';
import data from './data.json';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
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

  render() {
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
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
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
