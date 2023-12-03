import './App.scss';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import NavBar from './components/nav-bar/nav-bar.component';
import { Route,Routes } from 'react-router-dom';
const App=()=> {
  console.log("App Rendered")
  return(
    <Routes>
      <Route path="/" element={<NavBar/>}>
      <Route  index={true} element={<Home/>}></Route>
      <Route path="shop" element={<Shop/>}></Route>
      <Route path="auth" element={<Authentication/>}></Route>
      </Route>
      
    </Routes>
  )
}

export default App;
