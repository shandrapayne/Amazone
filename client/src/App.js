import React from 'react';
import DepartmentList from './components/departments/DepartmentList';
import Department from './components/departments/Department';
import ProductList from './components/products/ProductList';
import Product from './components/products/Product';
import Home from './components/Home'
import { Container } from 'semantic-ui-react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom';
import NoMatch from './components/NoMatch';

const App = () => (
  <>
    {/* <Navbar />
    <FetchUser> */}
      <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/departments" component={DepartmentList} />
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/departments/:id" component={Department} />
          <Route exact path="/department/:id/products" component={ProductList} />
          {/* <React exact path="/department/:id/products/:id" component={ViewProduct} /> */}
          <Route component={NoMatch} />
        </Switch>
        </BrowserRouter>
      </Container>
    {/* </FetchUser> */}
  </>
);


export default App;