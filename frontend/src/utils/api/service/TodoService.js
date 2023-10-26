import MyAPI from "../MyAPI";

MyAPI.get('/todos')
    .then(response => {
        console.log(response.data);
    })
        .catch(error => {
            console.error(error)
        })