import Cards from "./Cards";
import Form from "./Form";

const Content = (props) => {

    const activePage = props.activePage;
    const setTitle = props.setTitle;
    const setInstructions = props.setInstructions;
    const setShowModal = props.setShowModal;

    return (
        <div id="home" className={ activePage === 1? 'content' : 'hidden' }>
            <Form />
            <Cards
              setTitle={setTitle}
              setInstructions={setInstructions}
              setShowModal={setShowModal} />
		    </div>
    );
}
 
export default Content;