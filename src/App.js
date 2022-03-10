import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Header from './containers/Headers.jsx'
import ProductListing from './containers/ProductListing.jsx'
import ProductDetails from './containers/ProductDetails.jsx'
import ProductComponent from './containers/ProductComponent';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route index element= {<ProductListing/> } />
        <Route path='products/:productID'  element= {<ProductDetails/> } />
        <Route path='*'  element= {<h2> not found</h2> } />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
