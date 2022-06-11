let Id = 0;

const Details = (props) => {
    
    const activePage = props.activePage;
    const title = props.title;
    const instructions = props.instructions;
    const showModal = props.showModal;
    const setShowModal = props.setShowModal;

    const closeDetails = () => {
        setShowModal(false);
    }

    const instructionsList = instructions.map((item) => 
        <li key={title + Id++}>{item}</li>
    );

    return (
        <div className={ activePage === 1? '' : 'hidden' }>
            {showModal && <div className="modal">
            <h4 className="detailTitle">{title}</h4>
            <div className="detailIns">
                <h3>Instructions</h3>
                <ul className="instructions">
                    {instructionsList}
                </ul>
                <input type="button" value="Close" className="btn" onClick={closeDetails} />
            </div>
            </div>}
        </div>
    );
}
 
export default Details;