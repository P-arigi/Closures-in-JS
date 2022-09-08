let instructorModuleRefactored = (function createInstructors(){
   let instructors = ["Elie", "Matt", "Tim"];
    function displayAllInstructors(){
        return instructors;

    }
    function addNewInstructor(instructor){
        instructors.push(instructor);
        return instructors;
    }
    return{
        showInstructors:displayAllInstructors,
        addInstructor:addNewInstructor
    }

})
let instructors=instructorModuleRefactored().showInstructors()
console.log(instructors)


