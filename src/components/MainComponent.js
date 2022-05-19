import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { actions } from 'react-redux-form';
import { Navigate, Route, Routes, useParams, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import About from './AboutComponent';


const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders())
});

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

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage =
      <Home
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promoLoading={this.props.promotions.isLoading}
        promoErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leaderLoading={this.props.leaders.isLoading}
        leaderErrMess={this.props.leaders.errMess}
      />

    const DishWithId = () => {
      const { dishId } = useParams();
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={HomePage} />
          <Route exact path='/menu' element={<Menu dishes={this.props.dishes} />} />
          <Route exact path='/contactus' element={<Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path='/aboutus' element={<About leaders={this.props.leaders} />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));