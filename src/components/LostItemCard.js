import { Card, CardTitle, CardText, Button, CardImg, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

const LostItemCard = ({ lostitem }) => {
  const { id, name, image, description } = lostitem;
  return (
    <Card className='dib br3 pa3 ma2 grow bw2 shadow-5 mw5'>
      <CardImg alt={name} src={image} top />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{description}</CardText>
        <Link to={`/directory/${id}`}>
          <Button className="bg-animate">View</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default LostItemCard;
