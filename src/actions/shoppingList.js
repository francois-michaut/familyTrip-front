// ACTION TYPE ADD_INGREDIENT
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

// ACTION CREATOR addIngredient
export const addIngredient = (value) => ({
  type: ADD_INGREDIENT,
  value,
});

// ACTION TYPE SAVE_INGREDIENT_SHOPPING_LIST
export const SAVE_INGREDIENT_SHOPPING_LIST = 'SAVE_INGREDIENT_SHOPPING_LIST';

// ACTION CREATOR saveIngredientShoppingList
export const saveIngredientShoppingList = (value) => ({
  type: SAVE_INGREDIENT_SHOPPING_LIST,
  value,
});

// ACTION TYPE POST_SHOPPING_LIST
export const POST_SHOPPING_LIST = 'POST_SHOPPING_LIST';

// ACTION CREATOR postShoppingList
export const postShoppingList = () => ({
  type: POST_SHOPPING_LIST,
});
