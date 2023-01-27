let result = document.getElementById("result");
let remaining = document.getElementById("Remaining");
let numberRemaining=3
remaining.innerHTML=numberRemaining
let ranNumber = Math.floor(Math.random() * 10 + 1);
let numberArrGuess=[]
let err=document.getElementById('error');
console.log("ranNumber",ranNumber)

function guess(){
    let numberInput = document.getElementById("myNumber").value;
    if(numberInput!=0 && numberInput < 11){
        err.innerHTML=""

        numberArrGuess.push(+ numberInput);
        if(numberArrGuess.length<3){
            numberRemaining -= 1
            remaining.innerHTML=numberRemaining
            console.log("numberArrGuess",numberArrGuess)

            if( + numberInput == ranNumber){
                result.innerHTML="Well Done"
                document.getElementById("myBtn").disabled = true;

                document.getElementById("myNumber").disabled = true;
                document.getElementById("bgBodyCard").style.opacity = ".5";
    
            }else{
                result.innerHTML="Try again"
             
                

            }
           
        }else{
            // result.innerHTML="Try again"
    
            document.getElementById("myBtn").disabled = true;
            numberRemaining -= 1
            remaining.innerHTML=numberRemaining
            console.log("numberArrGuess",numberArrGuess)

            if( + numberInput == ranNumber){
                result.innerHTML="Well Done"
                document.getElementById("myBtn").disabled = true;
                document.getElementById("myNumber").disabled = true;
                document.getElementById("bgBodyCard").style.opacity = ".5";


            }else{
                result.innerHTML="Game Over"
                document.getElementById("myBtn").disabled = true;
                document.getElementById("myNumber").disabled = true;
                document.getElementById("bgBodyCard").style.opacity = ".5";


            }
        }
    }else{
        err.innerHTML="please enter nmber between 1 : 10"
        console.log(numberArrGuess,"remaining=",remaining,"ranNumber",ranNumber)

    }
   
   
}