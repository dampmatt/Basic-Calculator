console.log("hi");
const display=document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const nums=document.querySelector(".num");
const operator=document.querySelector(".operator");

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b!=0)
        return a/b;
    else
        return 0;
}

function inorder(arr){
    var a;
    while( arr.length > 1){
        console.log(arr.length);
        if(arr[arr.length -2] == '+'){
            a=add(arr[arr.length-1],arr[arr.length-3]);
            arr.pop();
            arr.pop();
            arr.pop();
            arr.push(a);
        }
        else if(arr[arr.length -2] == '-'){
            a=subtract(arr[arr.length-3],arr[arr.length-1]);
            arr.pop();
            arr.pop();
            arr.pop();
            arr.push(a);
        }
        else if(arr[arr.length -2] == '*'){
            a=multiply(arr[arr.length-3],arr[arr.length-1]);
            arr.pop();
            arr.pop();
            arr.pop();
            arr.push(a);
        }
        else if(arr[arr.length -2] == '/'){
            a=divide(arr[arr.length-3],arr[arr.length-1]);
            arr.pop();
            arr.pop();
            arr.pop();
            arr.push(a);
        }
        else
            return 0;
    }
    return arr[0];
}

function findSol(str){
    // console.log(str);
    let i=0, arr=[], a="";
    while(i<str.length){
        if(str[i]!='+' && str[i]!='-' && str[i]!='*' && str[i]!='/' && str[i]!='=' ){
            a+=str[i];
        }
        else{
            arr.push(Number(a));
            arr.push(str[i]);
            a="";
        }
        i++;   
    }
    if(a.length!=0)
        arr.push(Number(a));
    return inorder(arr);
}

let x="", y= "";
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(button.textContent!="clr"){
            // let y=x
            if(button.textContent!="="){
                x+=button.textContent;
                // console.log(x);
            }
            else{
                var result=findSol(x);
                console.log(result);
                x="";
                y=""+result;
            }
        }
        else
            x=""

        display.innerHTML="<h2>"+x+"</h2>" +"<h1>"+ y +"</h1> "
        // console.log(x);
    })
});