import { Container } from "reactstrap";
import { useState } from "react";
import LostItemsList from "../features/lostsitems/LostItemsList";
import SearchBox from "../components/SearchBox";
import { lostItems } from "../app/shared/lostitems";

const Home = () => {
  const [state, setState] = useState({lostitems: lostItems, searchFieldValue: ''});
  const handleInputChange = (event)=>{
    setState({...state, searchFieldValue: event.target.value});
  };
  const filteredSearch = state.lostitems.filter((lostItem)=>{
    return lostItem.name.toLowerCase().includes(state.searchFieldValue.toLowerCase())
  })
  return (
    <div>
      <SearchBox searchText={handleInputChange} />
      <Container className="App-container">
      <LostItemsList lostitems={filteredSearch} />
    </Container>

    </div>
    
  );
};

export default Home;