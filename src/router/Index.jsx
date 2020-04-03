import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";

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
