import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/Home/Home";
import Recipes from "../views/Recipes/Recipes";
import Recipe from "../views/ShowRecipe/ShowRecipe";
import NewRecipe from "../views/NewRecipe/NewRecipe";

export default function Routes () {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/recipes' exact component={Recipes} />
      <Route path='/recipes/:id' exact component={Recipe} />
      <Route path='/new_recipe' exact component={NewRecipe} />
    </Switch>
  )
};
