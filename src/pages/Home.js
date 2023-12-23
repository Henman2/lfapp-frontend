import { Container } from "reactstrap";
import LostItemsList from "../features/lostsitems/LostItemsList";
import { lostItems } from "../app/shared/lostitems";

const Home = () => {
  return (
    <Container className="App-container">
      <LostItemsList lostitems={lostItems} /> {/* Corrected prop name */}
    </Container>
  );
};

export default Home;