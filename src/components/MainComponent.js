import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';

import { Navigate, Route, Routes, useParams, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import About from './AboutComponent';



const mapStateToProps = state => ({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders
});

class Main extends Component {
  constructor(props) {
    super(props);
  }



  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage =
      <Home
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />

    const DishWithId = () => {
      const { dishId } = useParams();
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={HomePage} />
          <Route exact path='/menu' element={<Menu dishes={this.props.dishes} />} />
          <Route exact path='/contactus' element={<Contact />} />
          <Route exact path='/aboutus' element={<About leaders={this.props.leaders} />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default (connect(mapStateToProps)(Main));