import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import BootstrapSlider from './components/BootstrapSlider' ;
// import Navigations from './components/Navigations';
import Menu from "./components/Menu";
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';
import GrupoFam from './components/GrupoFam';
import ProgMenu from './components/ProgMenu';
import RevisaProg from './components/RevisaProg';

export default class App extends Component {
  render() {
    return (
      <Router >
        <div className="container p-4">        
          <Menu />
          <Route path='/GrupoFam' exact component={GrupoFam}  />
          <Route path='/ProgMenu' exact component={ProgMenu} />
          <Route path='/RevisaProg' exact component={RevisaProg} />
          <Route path='/Register' exact component={CreateUser} />
          <Route path='/LoginUser' exact component={LoginUser} />

        </div>
      </Router>
    )
  };

}
//import Footer from "./components/Footer" ;
//          <Footer/>
// // export default App;
//          <Route path='/Ingresar' exact component={LoginUser} />
// /*
// <div>
//     <Navigations />
//   <div className="container">
//     <div className="row">
//         <div className="col s5">

//         </div>
//         <div className= "col s7">

//         </div>
//     </div>
//   </div>
// </div>
// */