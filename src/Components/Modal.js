const Modal = ({ area, onClose }) => {
    const attributeList = area.attributes?.map((attribute, index) => (
        <li key={index}>{attribute}</li>
    ));

    const stakeholderList = area.stakeholders?.map((stakeholder, index) => (
        <li key={index}>{stakeholder}</li>
    ));
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    Close
                </button>
                <h2>{area.title}</h2>
                <h3>Description</h3>
                <p>{area.description}</p>
                <h3>Attributes</h3>
                <ul>{attributeList}</ul>
                <h3>Stakeholders and Contacts</h3>
                <ul>{stakeholderList}</ul>
            </div>
        </div>
    );
};

export default Modal;