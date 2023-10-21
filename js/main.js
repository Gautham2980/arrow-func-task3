let a=parseInt(prompt("enter a number"));
document.write("The given number is:"+a+":")


let res=(a)=>{
    if(a%2==0){
        document.write("It is even number");
    }

    else{
        document.write("It is odd number");
    }
}

res(a)

// console.log(res(a));