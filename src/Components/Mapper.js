import ImageMapper from 'react-img-mapper';
import edm from "../edm.png"
import areas from "../areas.json"
import Modal from './Modal';
import { useState } from 'react';

const Mapper = props => {
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

    return (
        <div>
            <ImageMapper
                src={edm}
                map={MAP}
                onClick={(area) => openModal(area)}
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