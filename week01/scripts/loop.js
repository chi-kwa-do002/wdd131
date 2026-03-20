const DAYS = 6;
const LIMIT = 30;
let studentReport= [11, 42, 33, 64, 29, 37, 44];

for(i= 0; i < studentReport.length; i++){
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let count= 0;
while(count < studentReport.length){
    if(studentReport[count] < LIMIT){
        console.log(studentReport[count]);
    }
    count++
}
for(let count in studentReport){
    if(studentReport[count] < LIMIT){
        console.log(studentReport[count])
    }
}

studentReport.forEach(function(student){
    if (student < LIMIT) {
        console.log(student);
    }
});