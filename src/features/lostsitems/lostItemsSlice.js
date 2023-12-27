import { lostItems } from "../../app/shared/lostitems";

export const selectAllLostItems = ()=>{
    return lostItems;
};

export const selectLostItemById = (id) => {
    return lostItems.find((lostItem) => {
        return lostItem.id === parseInt(id);
    });
}