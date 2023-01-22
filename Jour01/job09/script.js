let numbers = [8, 6, 9, 7, 3, 1, 2, 5, 4];
function tri(numbers, order){
    if(order === "asc"){
        return numbers.sort((a, b) => a - b );

    }else if(order === "dsc"){
        return numbers.sort((a,b) => b - a);
    }
}
console.log(tri(numbers,"dsc"));
  
  




