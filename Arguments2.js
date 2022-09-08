function add(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
      total+=arguments[i]  
    }
     return total;
}
console.log(add(3,4))