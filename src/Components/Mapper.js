import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
// import edm from "../edm.png";
// import p1_1 from "../1_1.png";
import areas from "../areas.json";
import Modal from './Modal';

const Mapper = ({ selectedUseCase, selectedStep, stepsByUseCase }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedArea, setSelectedArea] = useState(null);
    const MAP = {
        name: 'my-map',
        areas: areas,
    };

    const openModal = (area) => {
        setSelectedArea(area);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleMouseEnter = () => {
        // Change cursor to pointer when mouse enters the element
        document.body.style.cursor = 'pointer';
    };

    const handleMouseLeave = () => {
        // Reset cursor to default when mouse leaves the element
        document.body.style.cursor = 'auto';
    };

    const getSrc = () => {
        if (selectedUseCase && selectedStep) {
            const useCaseIndex = Object.keys(stepsByUseCase).indexOf(selectedUseCase) + 1;
            const stepIndex = stepsByUseCase[selectedUseCase].indexOf(selectedStep) + 1;
            const fileName = `${useCaseIndex}_${stepIndex}.png`;
            console.log(fileName)
            return `${process.env.PUBLIC_URL}/${fileName}`;
        } else {
            return `${process.env.PUBLIC_URL}/edm.png`;
        }
    };

    return (
        <div>
            <ImageMapper
                src={getSrc()}
                map={MAP}
                onClick={(area) => {
                    openModal(area);

                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            {isModalOpen && selectedArea && (
                <Modal
                    area={selectedArea}
                    onClose={() => closeModal()}
                />
            )}
        </div>
    )
}

export default Mapper;