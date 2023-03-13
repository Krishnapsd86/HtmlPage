let name =["Krishna","Thapaliya",23,32]
let name2={firstName:"Krishna",lastName:"Thapaliya",age:23,id:32}
//object ----similar
//javascript notations
let students ={
    firstName :"Saru",
    lastName:"Dahal",
    rollNo:21,
    age:25
}
//two ways to retrive the value

//retrive the data
console.log(students.firstName)
console.log(students.lastName)
console.log(students.age)
console.log(students.rollNo)

//update the data
students.firstName="Bikisha"
students.lastName="Thapaliya"
students.age=10,
students.rollNo=01
console.log(students)

//add the data
students.city ="Dallas"
students.language= "Nepali"
console.log(students)

//delete the data
delete students.city
console.log(students)

let auto ={
    color:"red",
    type:"sedan"
}
//retrive
//dot notation
console.log(auto.color)
//bracket notation
console.log(auto['color'])

//update
auto.color="black"
auto['color']="yellow"
//add
auto.city ="Dallas"
auto['regNo']=2323
//delete
delete auto.city

