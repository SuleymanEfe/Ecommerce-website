import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
          <header className="row">
              <div>
                  <a className="brand" href="/">Amazona</a>
              </div>
              <div>
                  <a href="/cart">Cart</a>
                  <a href="/signin">Sign in</a>
              </div>
          </header>
          <main>
            <Route path='/product/:id' component={ProductScreen} />
            <Route exact path='/' component={HomeScreen} />
          </main>
          <footer className="row center">
              All right reserved
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
