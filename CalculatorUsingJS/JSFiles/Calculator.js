let displayInput=document.getElementById("inputBox");

let buttons=document.querySelectorAll("button");

let displayArray=Array.from(buttons);

let result='';

displayArray.forEach(function(btn) {

    btn.addEventListener('click',function(e) {
                
       if(e.target.innerHTML == '='){
            result=eval(result);
            displayInput.value=result;
         }
         else if(e.target.innerHTML == 'AC'){
                result='';
               displayInput.value=result;
         }
         else if(e.target.innerHTML == 'DEL'){
            result=result.substring(0,result.
               length-1);
            displayInput.value=result;
         }
         else
         {
             result += e.target.innerHTML;
            displayInput.value=result;
        }

     });

     });
    

    
    