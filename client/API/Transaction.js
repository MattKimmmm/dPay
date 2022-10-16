const getTransactions = async (amount, isCompleted, people) => {
    
    var url = "http://localhost:3000/transaction";

    var response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            amount: amount,
            isCompleted: isCompleted,
            people: people,
        }),
    });

    var data = await response.json();
    if(data.error!=undefined){
        alert(data.error);
        return null
    }
    console.log(data);
    return response;
};

export {getTransactions}