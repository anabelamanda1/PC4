class Servicios {
    fetchData(callback) {
        const apiurl = 'app/json/pokemon.json';  // Cambiado a pokemon.json
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

// Exportar la clase para poder importarla en otro archivo
export default Servicios;
