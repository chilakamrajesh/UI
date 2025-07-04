
//create - JS Array
var enames=['Rahul',"Sonia","priya",'NM'];
//index      0       1         2       3
//read - JS Array
console.log(enames)//[ 'Rahul', 'Sonia', 'priya', 'NM' ]
//how to read array elements - using index
console.log(enames[2]) //priya
console.log(enames[20])//undefined
//update 
enames[2] = "Priyanka"
enames[14] ="Jahnavi"
console.log(enames)
//delete
delete enames
console.log(enames)
