import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/Appbar';
import ProductCard from './components/ProductCard';
import ProductFilter from './components/ProductFilter';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <ProductFilter />
      <ProductCard />
    </div>
  );
}

export default App;
