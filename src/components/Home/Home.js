import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import store, {DELETED} from '../../store';
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const storeState = store.getState();
    this.state = {
      recipes: storeState.recipes
    };
  }
  deleteOne = (i) => {
    store.dispatch({
      type: DELETED,
      payload: i
    })
  }
  componentDidMount() {
    store.subscribe(() => {
      const storeState = store.getState();
      this.setState({
        recipes: storeState.recipes
      })
    })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          deleteOne={() => this.deleteOne(i)}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
