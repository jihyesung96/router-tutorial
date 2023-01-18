import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import Subpages from './pages/Subpages';
import Subpage from './pages/Subpage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header sitename="blue"/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productname' element={<Product/>}/>
        {/* Route 안에 productname가 key로 지정 */}
        <Route path='/about' element={<About/>}/>
        <Route path='/subpages' element={<Subpages/>}>
          <Route path=':id' element={<Subpage/>}/>
        </Route>
        <Route path='*'element={<NotFound/>}/>
      </Routes>
    </div>
  );
}
export default App;
