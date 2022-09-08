let instructorModule=(function createInstructors(){  //Instead of calling createInstructors()we created the
    let instructors=["Arjun","Ruchira","Ramey"];        // instructorModule
    return{
        showInstructors:function displayAllInstructors(){
            return instructors;
        },
        addInstructors:function addNewInstructor(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
})
let instructors=instructorModule().showInstructors();
console.log(instructors)

let firstClass=instructorModule();
console.log(firstClass.addInstructors("Gayathri"));