import { useState } from 'react';
import { Gallery, Card } from './FruitGallery.styled';
import Modal from '../Modal';
import useModal from '../../useModal';

const FruitGallery = (props) => {
  const { isOpen, toggle } = useModal();
  const [modalData, setModalData] = useState({});

  const handleClick = (data) => () => {
    setModalData({ test: data });
    toggle();
  };

  const photos = props.photos.map((photo, i) => {
    return <Card key={i} img={photo} onClick={handleClick('AHH')}></Card>
  });

  return (
    <div>
      <Modal isOpen={isOpen} close={toggle} data={modalData} />
      <Gallery>{photos}</Gallery>
    </div>
  );
};

export default FruitGallery;