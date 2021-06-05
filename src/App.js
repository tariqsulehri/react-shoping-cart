
// import CheckOut from './checkout.component';
import React, { useState } from 'react';
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

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/" >React Shoping Cart</a>
        </header>

        <main>
          <div className="content">
            <div className="main"><Products products={this.state.products} /></div>
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

export default App;