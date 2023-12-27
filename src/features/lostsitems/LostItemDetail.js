import { Col, Row } from 'reactstrap';

const LostItemDetail = ({lostItem}) => {
    const {name, image, description } = lostItem;
    return(
        <>
            {lostItem ? (
            <Row className='tc pa5' >
                <Col sm="7"><h2>{name}</h2>
                    <img src={image} alt={name} />
                    <div className='pv2 tl ph3'>
                    <p>{description}</p>
                    <p>Date Posted:</p>
                    <p>Location:</p>
                    </div>
                </Col>
                <Col sm='5'><p>Add Comment Here</p></Col>
            </Row>
            ) : (
            <p>Loading...</p>
        )

            }
        </>
    )

};

export default LostItemDetail;

