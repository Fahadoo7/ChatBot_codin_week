
var pk=document.getElementById('pkr')
var dr=document.getElementById('dlr')
function convrt(){
    if(pk.value)
   {
    let pkNum=Number(pk.value)
    dr.value = pkNum*0.0058;
       
   }else if(dr.value)
   {
       let drNum=Number(dr.value)
       pk.value = dr.value*171.53
   }

}

function pkrFocus(){
    dr.value='';
    pk.placeholder='';
    dr.placeholder='Dolar'
}

function drFocus(){
    pk.value='';
    dr.placeholder='';
    pk.placeholder='Rupee'
}


var prc = document.getElementById('prcntg');
var result = document.getElementById('result')
 

function grade(){
    numPrc = Number(prc.value);
    if( numPrc>=80){
           result.innerHTML= "A+";
    }
    else if( numPrc>=70 && numPrc<80){
        result.innerHTML= "A";
    }
    else if( numPrc>=60 && numPrc<70){
        result.innerHTML= "B";
    }
    else{
        result.innerHTML= "F";
    }
}

var temp = document.getElementById('tempN')

var show = document.getElementById('show')
function tempr(){
    let tempNum = Number(temp.value)
        if(tempNum>=25){
            show.innerHTML='Not carry jacket...'
        }
        else if(tempNum>0 && tempNum<25){
            show.innerHTML='Carry jacket...'
        }
        else if(tempNum<=0){
            show.innerHTML='Not go Outside...'
        }
}
