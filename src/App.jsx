import './css/App.scss'
import { Home } from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CocktailDetail from './pages/CocktailDetail';
import { Header } from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:id" element={<CocktailDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;