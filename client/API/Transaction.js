const getTransactions = async (id) => {
    
    var url = "http://localhost:3000/transaction";

    var response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id : id
        }),
    });
    var data = await response.json();
    if(data.error!=undefined){
        alert(data.error);
        return null
    }
    console.log(data);
    return data;
};
const createTransactions = async (amount, tf, shop, selectedPeople) =>{
    console.log(amount, tf, shop, selectedPeople)
}

export {getTransactions, createTransactions};