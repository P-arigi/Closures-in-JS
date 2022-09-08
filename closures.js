function outer(a){
     return function inner(b){
        return a+b
    }
}
console.log(outer(5))
console.log(outer(5)(7))