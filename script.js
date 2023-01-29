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
    if(numberInput!=0 && numberInput < 11 && numberInput>0){
        err.innerHTML=""

        numberArrGuess.push(+ numberInput);
        if(numberArrGuess.length<3){
            numberRemaining -= 1
            remaining.innerHTML=numberRemaining
            console.log("numberArrGuess",numberArrGuess)

            if( + numberInput == ranNumber){
                result.innerHTML="Well Done"
                styleEnd()
                showReload()
            }else{
                result.innerHTML="Try again"
             
                

            }
           
        }else{
    
            document.getElementById("myBtn").disabled = true;
            numberRemaining -= 1
            remaining.innerHTML=numberRemaining
            console.log("numberArrGuess",numberArrGuess)

            if( + numberInput == ranNumber){
                result.innerHTML="Well Done"
                styleEnd()
                showReload()

            }else{
                result.innerHTML="Game Over"
                styleEnd()
                document.getElementById("bgBodyCard").style.border = "2px solid red";
                showReload()

            }
        }
    }else{
        err.innerHTML="please enter nmber between 1 : 10"
        // console.log(numberArrGuess,"remaining=",remaining,"ranNumber",ranNumber)

    }
   
   
}

function styleEnd(){
    document.getElementById("myBtn").disabled = true;
    document.getElementById("myNumber").disabled = true;
    document.getElementById("bgBodyCard").style.opacity = ".5";
}
function reload(){
    window.location.reload()
}
function showReload(){
    document.getElementById("reload").innerHTML=`<svg class="textCo fw-bold" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>`
}