import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/navbar.component';
import Header from './components/header.component';
import Home from './components/home.component';
import Footer from './components/footer.component';
import Shoppage from './components/shoppage.component';
// import SingleProduct from './components/singleproduct.component';
import { CartProvider } from './contexts/cart'
// import Login from './components/usercomponent/user.login';
import Cart from './components/cart.component';
import Forget from './components/forget.component';
import ErrLogin from './components/errLogin.component';

class App extends  Component {
  constructor(props){
    super(props);
    this.state = {
      loading : true
    }
  }
  componentDidMount(){
    this.setState({
      loading: false
    })
  }
  render(){
  return (
    <React.Fragment>
    {this.state.loading ? <div> <h1>loading</h1></div>
    :  <CartProvider>
      <Router>  
        <Header/>
        <Navbar />
        <Route path="/" exact component={Home} />
        {/* <Route path="/edit/:_id" component={EditExercise} /> */}
        {/* <Route path="/create/exercise"  component={CreateExercise } />
        <Route path="/user"  component={CreateUser} /> */}
        <Route path="/shoppage" component={Shoppage}/>
        <Route path="/cart" component={Cart} />         
        <Route path="/forget" component={Forget} />         
        <Route path="/errlogin" component={ErrLogin} />                
        <Footer />  
      </Router>
      </CartProvider> }
   
    </React.Fragment> 
  );
}
}

export default App;
