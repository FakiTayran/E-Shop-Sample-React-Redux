import React from "react";
import { Switch,Route } from "react-router";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import BasketDetail from "../basket/BasketDetail"
import NotFound from "../common/NotFound"
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container >
      <Navi />
      <Switch>
        <Route exact path="/" component={Dashboard}  />
        <Route exact path="/product" component={Dashboard}  />
        <Route exact path="/basket" component={BasketDetail}  />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}  />
        <Route path="/saveproduct" component={AddOrUpdateProduct}  />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
