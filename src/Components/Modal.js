import React, { useState } from 'react'

const Modal = ({ area, onClose }) => {
    const [selectedConcept, setSelectedConcept] = useState(null)
    const [selectedAttribute, setSelectedAttribute] = useState(null)

    const handleConceptClick = (concept) => {
        setSelectedConcept(selectedConcept === concept ? null : concept)
        setSelectedAttribute(null)
    };

    const handleAttributeClick = (attribute) => {
        setSelectedAttribute(attribute)
    };

    const renderConcepts = () => {
        return area.concepts?.map((concept, index) => (
            <div key={index}>
                <button onClick={() => handleConceptClick(concept.name)}>
                    {concept.name}
                </button>
                {selectedConcept === concept.name && renderAttributes(concept.attributes)}
            </div>
        ));
    };

    const renderAttributes = (attributes) => {
        return attributes.map((attribute, index) => (
            <button key={index} onClick={() => handleAttributeClick(attribute)}>
                {attribute.name}
            </button>
        ));
    };

    const handleBackClick = () => {
        setSelectedConcept(null);
        setSelectedAttribute(null);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    Close
                </button>
                <h2>{area.title}</h2>
                <a href={area.waltz}>Waltz Link</a>
                <a href={area.confluence}>Confluence Link</a>
                {!selectedConcept ? (
                    <>
                        <h3>Description</h3>
                        <p>{area.description}</p>
                        <h3>EDM Concepts</h3>
                        <p>Click on an EDM concept to view its attributes.</p>
                        {renderConcepts()}
                        <h3>Stakeholders and Contacts</h3>
                        <ul>{area.stakeholders?.map((stakeholder, index) => <li key={index}>{stakeholder}</li>)}</ul>
                    </>
                ) : (
                    <>
                        <button onClick={handleBackClick}>Back</button>
                        <h3>EDM Concept: {selectedConcept}</h3>
                        {renderAttributes(area.concepts.find(concept => concept.name === selectedConcept)?.attributes)}
                        {selectedAttribute ? (
                            <p>{selectedAttribute.definition}</p>
                        ) : (
                            <p>Click on an attribute to view its definition.</p>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Modal;
