//import logo from './logo.svg';
//import './App.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import HomePage from "./pages/Home";
import ContactoPage from "./pages/Contacto";
import NovedadesPage from "./pages/Novedades";
import NosotrosPage from "./pages/Nosotros";
import Header  from "./components/layout/Header";
import Nav  from "./components/layout/Nav";
import Footer  from "./components/layout/Footer";
function App() {
  return (
    <Router>
     <Header></Header>
     <Nav />
     <Routes>
     <Route path="/" exact element={ <HomePage/>}/>
     <Route path="/Novedades" exact element={ <NovedadesPage/>}/>
     <Route path="/Contacto" exact element={ <ContactoPage/>}/>
     <Route path="/Nosotros" exact element={ <NosotrosPage/>}/>
     
     </Routes>
     <Footer />
     </Router>
  );
}

export default App;
