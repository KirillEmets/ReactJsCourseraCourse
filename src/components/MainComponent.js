import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import dishes from '../shared/dishes';
import { Navigate, Redirect, Route, Routes, } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: dishes,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;