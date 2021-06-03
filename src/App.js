
import CheckOut from './checkout.component';

function App() {

  return (
    <div className="grid-container">
      <header>
        <a href="/" >React Shoping Cart</a>
      </header>

      <main>
        Product List
      </main>

      <footer>
        All right Reserved
      </footer>

      {/* <CheckOut /> */}
    </div>
  );
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