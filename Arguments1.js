function displayfirstArgument(){
    return arguments[1];
}
console.log(displayfirstArgument(10,2,3));
console.log(displayfirstArgument("a","b"));
console.log(displayfirstArgument(true));
