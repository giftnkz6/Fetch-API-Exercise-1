fetch("../data/data.json")
.then((response)=> {
    return response.json();
})
.then((data)=> {
    let result = data.laptop;
    console.table(result);
})