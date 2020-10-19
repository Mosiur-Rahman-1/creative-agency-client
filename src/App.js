import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componants/Home/Home/Home';
import LogIn from './Componants/LogIn/LogIn';
import PlaceOrder from './Componants/PlaceOrder/Order/PlaceOrder';
import Services from './Componants/Home/Services/Services';
import ServicesList from './Componants/PlaceOrder/ServicesList/ServicesList';
import Review from './Componants/PlaceOrder/Review/Review';
import ServicesAdmin from './Componants/Admin/ServicesAdmin/ServicesAdmin';
import AddService from './Componants/Admin/AddService/AddService';
import MakeAdmin from './Componants/Admin/MakeAdmin/MakeAdmin';


function App() {
  return (
    <Router>
       <Switch>
       <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/client/order">
          <PlaceOrder/>
        </Route>
        <Route path="/client/services">
         <ServicesList/>
        </Route>
        <Route path="/client/review">
         <Review/>
        </Route>
        <Route path="/admin/orderServices">
          <ServicesAdmin/>
        </Route>
        <Route path="/admin/addService">
          <AddService/>
        </Route>
        <Route path="/admin/makeAdmin">
          <MakeAdmin/>
        </Route>
       <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
