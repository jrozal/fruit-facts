import { Gallery, Card } from './FruitGallery.styled';

const FruitGallery = (props) => {

  const photos = props.photos.map((photo, i) => {
    return <Card key={i} img={photo}></Card>
  })

  return (
    <Gallery>{photos}</Gallery>
  )
};

export default FruitGallery;