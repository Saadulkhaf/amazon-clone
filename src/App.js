import { BrowserRouter, path, Route, Switch } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Amazon Clone</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
