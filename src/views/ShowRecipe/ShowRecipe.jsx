import React from "react";
import { Link } from "react-router-dom";
import backend from '../../api/backend';

class ShowRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipe: { ingredients: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const response = await backend.get(`/recipes/${id}`);
      this.setState({recipe: response.data});
    } catch(err) {
      console.log('error: ', err.message)
    }
  }


  deleteRecipe = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      await backend.delete(`recipes/${id}`, {headers: { "Content-Type": "application/json"}});
      await this.props.history.push("/recipes");
    } catch(err) {
      console.log('error: ', err.message)
    }
  }


  render() {
    const { recipe } = this.state;
    let ingredientList = "No ingredients available";
    if (recipe.ingredients.length > 0) {
      ingredientList = recipe.ingredients
        .split(",")
        .map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li>
        ));
    }

    const recipeInstructions = this.addHtmlEntities(recipe.instructions);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={recipe.image}
            alt={`${recipe.name}`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {recipe.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Ingredients</h5>
                {ingredientList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Preparation Instructions</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${recipeInstructions}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteRecipe}>
                Delete Recipe
              </button>
            </div>
          </div>
          <Link to="/recipes" className="btn btn-link">
            Back to recipes
          </Link>
        </div>
      </div>
    );
  }
}

export default ShowRecipe;
