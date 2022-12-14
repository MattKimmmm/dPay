import sampleTransactions from "./SampleTransaction.js";
const getTransactions = async (id) => {
    //return await sampleTransactions
    var urlg = "http://localhost:3000/transactiong";
    console.log("hello world")

    var response = await fetch(urlg, {
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

    var urlvc = "http://localhost:3000/transactionc";
    console.log(selectedPeople)
    var response = await fetch(urlvc, {

        method: "POST",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
        body: JSON.stringify({
        amount : amount,
        tf : tf,
        shop : shop,
        selectedPeople : selectedPeople
    }),
    });
    var data = await response.json();
    if(data.error!=undefined){
        alert(data.error);
        return null
    }
    console.log(data);
    return data;
}

export {getTransactions, createTransactions};