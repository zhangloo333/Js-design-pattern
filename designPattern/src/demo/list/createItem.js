import Item from './item';

//will add discount goods information

//factory design
export default function(list, itemData) {
    return new Item(list, itemData);
}