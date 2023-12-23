import LostItemCard from "../../components/LostItemCard";

const LostItemsList = ({ lostitems }) => {  {/* Corrected prop name */}
  return (
    <>
      {lostitems.map((item, i) => (
        <LostItemCard key={item.id} lostitem={item} />
      ))}
    </>
  );
};

export default LostItemsList;