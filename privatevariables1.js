function createInstructors(){
    let instructors=["Arjun","Ruchira","Gayathri"];
    return{
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructors: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors
        }
    }

}
let firstClass=createInstructors();
console.log(firstClass.addInstructors("Ramey")) //  Here we will get the new instructors
console.log(firstClass.showInstructors)

let secondClass = createInstructors();
console.log(secondClass.addInstructors("shruthi")); 



let instructor=createInstructors().showInstructors();  //We will get the old instructors
console.log(instructor)