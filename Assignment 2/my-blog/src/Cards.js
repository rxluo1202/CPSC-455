import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import SingleCard from "./SingleCard";

const Cards = (props) => {

    const dispatch = useDispatch();
    const setTitle = props.setTitle;
    const setInstructions = props.setInstructions;
    const setShowModal = props.setShowModal;

    const cards = useSelector((state) => state);
    
    const deleteAll = () => {
        dispatch({
            type: 'DELETE_ALL_RECIPES'
        });
    }

    return (
        <div id="cards">
            <input type="button" value="Delete All" className="btn" onClick={deleteAll} />
            <div id="allcards">
                {cards.length > 0 &&
                    cards.map((card) => {
                        return (
                            <SingleCard
                              title={card.title}
                              ingredients={card.ingredients}
                              instructions={card.instructions}
                              id={card.id}
                              setTitle={setTitle}
                              setInstructions={setInstructions}
                              setShowModal={setShowModal} />
                        );
                    })
                }
            </div>
        </div>
    );
}
 
export default Cards;