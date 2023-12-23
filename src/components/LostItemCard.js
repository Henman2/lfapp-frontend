import { Card, CardTitle, CardText, Button, CardImg, CardBody } from "reactstrap";

const LostItemCard = ({ lostitem }) => {
  const { name, image, description } = lostitem;
  return (
    <Card className='dib br3 pa3 ma2 grow bw2 shadow-5 mw5'>
      <CardImg alt={name} src={image} top />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{description}</CardText>
        <Button className="bg-animate">View</Button>
      </CardBody>
    </Card>
  );
};

export default LostItemCard;
