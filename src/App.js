import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { dishes } from './shared/dishes';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>
            Some Text Here
          </NavbarBrand>  
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );
}

export default App;
