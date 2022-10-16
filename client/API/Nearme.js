const Nearme = async () => {
    var url = "http://localhost:3000/nearme";
    
    var response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    var data = await response.json();
    if(data.error!=undefined){
        alert(data.error);
        return null
    }
    console.log(data);
    return data;
    
}

export {Nearme};











