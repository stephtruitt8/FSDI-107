

const catalog= [
    {
        "title":"Markers",
        "category":"supplies",
        "price":20.00,
        "image":"/images/markers.png",
        "_id":"1", //id is unique
    },
    {
        "title":"Keychain",
        "category":"merchandise",
        "price":30.00,
        "image":"/images/keychain.webp",
        "_id":"2",
    },
    {
        "title":"Hat",
        "category":"merchandise",
        "price":40.00,
        "image":"/images/hat.jpg",
        "_id":"3",
    },
    {
        "title":"Customjacket",
        "category":"clothing",
        "price":70.00,
        "image":"images/jacket.jpg",
        "_id":"4",
    },
];

class DataService {
    getProducts()
    {
        return catalog;
    }

};

export default DataService;