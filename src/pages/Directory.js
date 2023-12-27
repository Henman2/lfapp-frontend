import { Container } from "reactstrap";
import { useState } from "react";
import LostItemsList from "../features/lostsitems/LostItemsList";
import SearchBox from "../components/SearchBox";
import { selectAllLostItems } from '../features/lostsitems/lostItemsSlice'; 

const Directory = ()=>{
    const lostItems = selectAllLostItems();
    const [state, setState] = useState({lostitems: lostItems, searchFieldValue: ''});
    const searchText = (event)=>{
        setState({...state, searchFieldValue: event.target.value});
    };
    // Sort the items by date and get the 8 most recent ones
    const mostRecentItems = state.lostitems
        .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
        .slice(0, 8);
    const filteredSearch = mostRecentItems.filter((lostItem)=>{
        return lostItem.name.toLowerCase().includes(state.searchFieldValue.toLowerCase())
    })
    return (
        <div>
            <SearchBox searchText={searchText} />
            <Container className="listItem-container">
            <LostItemsList lostitems={filteredSearch} />
        </Container>
    
        </div>
    );
}

export default Directory;