document.getElementById("clear").addEventListener("click", clear);//onlick in html didnt work for some reason
// document.getElementById('point').onclick = function () {//https://stackoverflow.com/questions/23724639/make-a-button-unclickable-after-one-click
//     this.disabled = true;
// }
var operator="";
var first;
var second;
var output=false;

class Calculation{
    constructor(prev, operation, after){//first and after should be numbers, operation can be a string
        this.first = prev;
        this.operation = operation;
        this.second=after;
    }

    getFirst(){
        return this.first;
    }
    getSecond(){
        return this.second;
    }
    getOperation(){
        return this.operation;
    }
    calculate(){
        switch(this.operation){
            case "add":
                return this.first + this.second;
                break;
            case "sub":
                return this.first - this.second;
                break;
            case "mul":
                return this.first * this.second;
                break;
            case "div":
                return this.first / this.second;
                break;
            default:
                return " ";
        }

    }
}
function clear(){
    document.getElementById("first").innerHTML= " ";
    document.getElementById("second").innerHTML= " ";
    // document.getElementById('point').disabled = false;
    rmSelected()
}
function display(char){
    if(output){
        clear();
        // rmSelected();
    }
    output=false;
    document.getElementById("second").innerHTML+=char;
}
function main(){
    // console.log(first);
    // console.log(second);
    second=parseFloat(document.getElementById("second").innerHTML);
    if((first!=" " && second!=" ") &&(first!=null && second!=null)){
        // console.log(first);
        // console.log(second);
        // console.log(operation);
   
        const calc = new Calculation(first,operator,second);
        clear();
        document.getElementById("second").innerHTML=calc.calculate();
        output=true;
        // console.log(calc.calculate());
    }
    first=null;
    second=null;
    operator = null;
}

function setOperation(oper){
    operator = oper;
    first = parseFloat(document.getElementById("second").innerHTML);
    
    //front end stuff
    let text  = document.getElementById("second").innerHTML;
    clear();
    document.getElementById("first").innerHTML=text;
    document.getElementById(oper).classList.add("selected");
}

function remove(){
    let str = document.getElementById("second").innerHTML;
    let newStr = str.slice(0,-1);//https://tecadmin.net/remove-last-character-from-string-in-javascript/#:~:text=Use%20the%20substring()%20function,the%20end%20of%20the%20string.
    document.getElementById("second").innerHTML=newStr;
}
function rmSelected(){
    let operations = document.getElementsByClassName("operations");
        for(let i=0;i<operations.length;i++){
            operations[i].classList.remove("selected");
        }
}