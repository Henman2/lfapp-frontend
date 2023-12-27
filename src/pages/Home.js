import React, { useState } from 'react';
import { Container } from "reactstrap";
import SearchBox from "../components/SearchBox";
import Directory from "./Directory";

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <Container>
      {/* <SearchBox searchText={handleInputChange} /> */}
    </Container>
  );
};

export default Home;