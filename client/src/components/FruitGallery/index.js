import { useState } from 'react';
import { GalleryContainer, Gallery, Card } from './FruitGallery.styled';
import Modal from '../Modal';
import useModal from '../../useModal';

const FruitGallery = ({ data }) => {
  const { isOpen, toggle } = useModal();
  const [modalData, setModalData] = useState({});

  const handleClick = (fruitRecord) => () => {
    setModalData(fruitRecord);
    toggle();
  };

  const photos = data.map((record, i) => {
    return <Card key={i} img={record.photo} onClick={handleClick(record)}></Card>
  });

  return (
    <GalleryContainer>
      <Modal isOpen={isOpen} close={toggle} data={modalData} />
      <Gallery>{photos}</Gallery>
    </GalleryContainer>
  );
};

export default FruitGallery;