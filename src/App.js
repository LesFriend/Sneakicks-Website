import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AccountSignUp from './components/Pages/AccountSignUp';
import Men from './components/Pages/Men';
import AccountLogin from './components/Pages/AccountLogin';
import Women from './components/Pages/Women';
import Kids from './components/Pages/Kids';
import Brands from './components/Pages/Brands';
import NewArrivals from './components/Pages/NewArrivals';
import Sale from './components/Pages/Sale';
import Item from './components/Pages/ItemPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Header/>
      <NavBar/>
      <Switch>
        <Route path='/' exact component= {Home}/>
        <Route path='/home' exact component= {Home}/>
        <Route path='/accountSignUp' exact component= {AccountSignUp}/>
        <Route path='/accountLogin' exact component= {AccountLogin}/>
        <Route path='/men' exact component= {Men}/>
        <Route path='/women' exact component= {Women}/>
        <Route path='/kids' exact component= {Kids}/>
        <Route path='/brands' exact component= {Brands}/>
        <Route path='/newArrivals' exact component= {NewArrivals}/>
        <Route path='/sale' exact component= {Sale}/>
        <Route path='/item' exact component= {Item}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
