const catalog= [
    {
        "title":"Markers",
        "category":"supplies",
        "price":20.00,
        "image":"",
        "_id":"1", //id is unique
    },
    {
        "title":"Keychain",
        "category":"merchandise",
        "price":30.00,
        "image":"",
        "_id":"2",
    },
    {
        "title":"Hat",
        "category":"merchandise",
        "price":40.00,
        "image":"",
        "_id":"3",
    },
    {
        "title":"Customjacket",
        "category":"clothing",
        "price":70.00,
        "image":"",
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