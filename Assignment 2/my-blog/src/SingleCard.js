import { useDispatch } from 'react-redux';

let Id = 0;

const SingleCard = (props) => {

    const title = props.title;
    const ingredients = props.ingredients;
    const instructions = props.instructions;
    const id = props.id;
    const setTitle = props.setTitle;
    const setInstructions = props.setInstructions;
    const setShowModal = props.setShowModal;

    const dispatch = useDispatch();
    const ingredientsList = ingredients.map((item) => 
        <li key={title + Id++}>{item}</li>
    );

    const deleteCard = (id) => {
        dispatch({
            type: 'DELETE_RECIPE',
            payload: id
        });
    }

    const openModal = () => {
        setTitle(title);
        setInstructions(instructions);
        setShowModal(true);
    }

    const handleDelete = (id) => {
        setShowModal(false);
        deleteCard(id);
    }

    return (
        <div className='recipe-card'>
            <h4 className="column-title">{title}</h4>
            <div className="recipe-content">
                <h3>Ingredients</h3>
                <ul className="ingredients">
                    {ingredientsList}
                </ul>
                <div id="btn">
                    <input type="button" className="btn" value="Details" onClick={openModal} />
                    <input type="button" className="btn" value="Delete" onClick={() => {
                        handleDelete(id)
                    }} />
                </div>
            </div>
        </div>
    );
}
 
export default SingleCard;