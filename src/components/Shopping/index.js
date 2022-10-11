// Import
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, postShoppingList, saveIngredientShoppingList } from '../../actions/shoppingList';
import './shopping.scss';

// Composant
function Shopping() {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const currentIngredient = useSelector((state) => state.shoppingList.currentIngredient);
  const ingredientArray = useSelector((state) => state.shoppingList.ingredientArray);
  // const moreThanTenIngredients = ingredientArray.splice(10);

  function handleSaveIngredient(evt) {
    dispatch(saveIngredientShoppingList(evt.target.value));
  }
  function handleAddIngredient() {
    ingredientArray.push(currentIngredient);
    dispatch(addIngredient(ingredientArray));
    ref.current.focus();
  }
  function handleSubmitShoppingList(evt) {
    evt.preventDefault();
    dispatch(postShoppingList());
  }
  return (
    <main className="shopping">
      <h2 className="shopping__title">Créer une liste de courses</h2>
      <form className="shopping__list" onSubmit={handleSubmitShoppingList}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="shoppingList-input"
            placeholder="Ingrédient"
            value={currentIngredient}
            onChange={handleSaveIngredient}
            ref={ref}
          />
        </div>
        <h3 className="shopping__list__title">Résumé de votre liste de courses</h3>
        <div className="mb-3 shopping__list--resume">
          <ul className="resume__list">
            {ingredientArray && ingredientArray.map((ingredient) => (
              <li className="resume__list__item" key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="shopping__list__buttons">
          <button className=" btn btn-primary" type="button" onClick={handleAddIngredient}>Ajouter un ingrédient</button>
          <button className=" btn btn-success" type="submit">Valider la liste</button>
        </div>
      </form>
    </main>
  );
}

// Export
export default Shopping;
