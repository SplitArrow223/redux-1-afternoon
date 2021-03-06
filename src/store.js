import {createStore} from 'redux'

const initialState = {
   name: '',
   category: '',
   authorFirst: '',
   authorLast: '',
   ingredients: [],
   instructions: [],
   recipes: [],
}
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const FIRST_NAME = 'FIRST_NAME';
export const LAST_NAME = 'LAST_NAME';
export const INGREDIENTS = 'INGREDIENTS';
export const INSTRUCTIONS = 'INSTRUCTIONS';
export const RECIPE_LIST = 'RECIPE_LIST';
export const CLEAR_INPUTS = 'CLEAR_INPUTS';
export const DELETED = 'DELETED';

function reducer(state = initialState, action) {
  const {type, payload} = action;  
  switch(type) {
      case UPDATE_NAME:
      return {...state, name: payload};

      case UPDATE_CATEGORY:
      return {...state, category: payload};
      case FIRST_NAME:
      return {...state, authorFirst: payload};
      case LAST_NAME:
      return {...state, authorLast: payload};
      case INGREDIENTS:
      const newIngredients = [...state.ingredients, payload];
      return {...state, ingredients: newIngredients };
      case INSTRUCTIONS:
      const newInstructions = [...state.instructions, payload]
      return {...state, instructions: newInstructions};
      case RECIPE_LIST:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
    } = state;
    const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
    };
    const newRecipes = [...state.recipes, recipe];
    return {...state, recipes: newRecipes };

    case CLEAR_INPUTS:
    return {...state,
      name: initialState.name,
      category: initialState.category,
      authorFirst: initialState.authorFirst,
      authorLast: initialState.authorLast,
      ingredients: initialState.ingredients,
      instructions: initialState.instructions
    };
    case DELETED:
      const deleted = state.recipes.splice(payload, 1)
      return {...state, deleted};

    default: return state;
  }
}
export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());