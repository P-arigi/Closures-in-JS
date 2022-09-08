function defineAge(){
    let age=20;        //local variable
    return function growUp(){
        return ++age;
    }
}
let outerAge=defineAge();


console.log(outerAge())

console.log(outerAge())