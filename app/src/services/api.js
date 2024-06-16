class Servicios {
    fetchData(callback) {
        const apiurl = 'app/json/pokemon.json'; 
        fetch(apiurl)
            .then(response => response.json())
            .then(data => {
                callback(null, data);
            })
            .catch(error => {
                console.error('Error fetching filtered data:', error);
                callback(error, null);
            });
    }
}


export default Servicios;