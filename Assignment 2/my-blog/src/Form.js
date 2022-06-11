import { useState } from "react";
import { useDispatch } from "react-redux";

let Id = 3;

const Form = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const createCard = (title, ingredients, instructions) => {
        let ingredientsArray = ingredients.split(';');
        let instructionsArray = instructions.split(';');
        return {
            type: 'NEW_RECIPE',
            data: {
                title,
                ingredients: ingredientsArray,
                instructions: instructionsArray,
                id: Id++
            }
        }
    }

    const clear = () => {
        setTitle('');
        setIngredients('');
        setInstructions('');
    }

    const add = () => {
        if (title === '') {
            setTitle('undefined');
        }
        dispatch(createCard(title, ingredients, instructions));
        clear();
    }

    const setTitleHelper = (e) => {
        setTitle(e.target.value);
    }

    const setIngredientsHelper = (e) => {
        setIngredients(e.target.value);
    }

    const setInstructionsHelper = (e) => {
        setInstructions(e.target.value);
    }

    return (
        <div className="newrecipe">
            <div className="title">
                New Recipe
            </div>
            <div id="form">
                <form action="">
                    <div className="inputfield">
                        <label>Title</label>
                        <input type="text" className="input" value={title} onChange={setTitleHelper} />
                    </div>  
                    <div className="inputfield">
                        <label>Ingredients</label>
                        <textarea className="textarea" value={ingredients} onChange={setIngredientsHelper}></textarea>
                    </div> 
                    <div className="inputfield">
                        <label>Instructions</label>
                        <textarea className="textarea" value={instructions} onChange={setInstructionsHelper}></textarea>
                    </div> 
                    <div className="inputfield" id="buttons">
                        <input type="button" value="Add" className="btn" onClick={add} />
                        <input type="reset" value="Clear" className="btn" onClick={clear} />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Form;