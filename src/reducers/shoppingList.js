import { ADD_INGREDIENT, SAVE_INGREDIENT_SHOPPING_LIST } from '../actions/shoppingList';

export const initialState = {
  ingredientArray: [],
  currentIngredient: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_INGREDIENT_SHOPPING_LIST:
      return {
        ...state,
        currentIngredient: action.value,
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredientArray: action.value,
        currentIngredient: '',
      };
    default:
      return state;
  }
}

export default reducer;
