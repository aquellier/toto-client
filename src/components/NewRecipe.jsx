import React from 'react';
import { Link } from 'react-router-dom';
import backend from '../api/backend';

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients:'',
      instruction:''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const { name, ingredients, instruction } = this.state;

    if (name.length === 0 || ingredients.length === 0 || instruction.length === 0)
      return;

    const recipe = {
      name,
      ingredients,
      instruction: instruction.replace(/\n/, '<br> <br>')
    }

    try {
      const response = await backend.post('/recipes', recipe);
      await this.props.history.push('/recipes');
    } catch (err) {
      console.log('error: ', err.message)
    }
  }

  render() {
    return(
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new recipe to our awesome recipe collection.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Recipe name</label>
                <input
                  type="text"
                  name="name"
                  id="recipeName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredients">Ingredients</label>
                <input
                  type="text"
                  name="ingredients"
                  id="recipeIngredients"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                <small id="ingredientsHelp" className="form-text text-muted">
                  Separate each ingredient with a comma.
                </small>
              </div>
              <label htmlFor="instruction">Preparation Instructions</label>
              <textarea
                className="form-control"
                id="instruction"
                name="instruction"
                rows="5"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Create Recipe
              </button>
              <Link to="/recipes" className="btn btn-link mt-3">
                Back to recipes
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewRecipe;
