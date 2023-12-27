import { Container } from 'reactstrap';
import LostItemDetail from '../features/lostsitems/LostItemDetail';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { selectLostItemById } from '../features/lostsitems/lostItemsSlice';

const LostItemDetailPage = ()=>{
    const { itemId } = useParams();
    const lostItem = selectLostItemById(itemId);

    return (
        <Container>
            <LostItemDetail lostItem = {lostItem}/>
        </Container>
    )

}

export default LostItemDetailPage;