var arr= [1,3,5,7,4,5,8,96,100]
var find= 100
var isFound= false

for (var i= 0; i<find; i++){
    if (arr[i]==find){

        console.log("data found at index no "+ i)
        isFound=true
        break
    }
}

if (!isFound){
    console.log("data not found. ")
}