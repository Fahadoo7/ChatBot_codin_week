// TASK 1

// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


var date = new Date();
var days = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}
var x = document.getElementById("tsk1")
var dayIndex = Number(date.getDay());


if(date.getHours()>12){
    x.innerHTML ="Today Is "+ days[dayIndex] + " Current Time Is "+(date.getHours()-12) +" :"+date.getMinutes()+" :"+date.getMinutes()    
}else{
    x.innerHTML ="Today Is "+ days[dayIndex] + " Current Time Is "+(date.getHours()) +" :"+date.getMinutes()+" :"+date.getMinutes()
}

// TASK 2

// 2. Write a JavaScript program to get the current date. 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy



x = document.getElementById('tsk2')
x.innerHTML = date.getMonth()+1+'/'+date.getDay()+'/'+date.getFullYear();




// TASK 3

// 3. Write a JavaScript program to find the area of a triangle where lengths of the 
// three of its sides are 5, 6, 7




var s = (5+6+7)/2;
var area  = Math.sqrt(s*(s-5)*(s-6)*(s-7));
x = document.getElementById('tsk3')
x.innerHTML = area 


// TASK 4
// 4. Write a JavaScript program to rotate the string 'Saylani' in 
// right direction by periodically removing one letter from the end of the string and attaching it to the front.



var str = "Saylani";
strRevrse ='';
len = str.length;
x = document.getElementById('tsk4')

for(let i = len-1;i>=0;i--){
    strRevrse += str[i]
    
}
x.innerHTML=str +' to '+ strRevrse

// TASK 5

// 5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

function leapY(){

    date = document.getElementById('tsk5_input').value
    date = new Date(date)
    console.log(date.getFullYear())

if(date.getFullYear()%4===0){
    document.getElementById('tsk5_res').innerHTML='Its Leap Year'
}else{
    document.getElementById('tsk5_res').innerHTML='Its Not Leap Year'
}


}


// TASK 6
// 6. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

for (let i = 2014;i<=2050;i++)
{
   let d = new Date(i,0,1)
   if(d.getDay()==0)
   {
    document.getElementById('tsk6_res').innerHTML +='<br>its sunday on '+d.getFullYear()+': '+d.getDate()+' :'+d.getMonth()
   }
}


// TASK 7

// 7. Write a JavaScript program where the program takes a random Number between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched".

function guess(){

    x= document.getElementById('tsk7_input').value
    var random = Math.ceil(Math.random()*10)
    console.log(random)
    var y = document.getElementById('tsk7_text')
   if(x==random)
   {
       y.innerHTML ='Good Work Your Guess is right';
   }else{
        y.innerHTML ='Please Try Later Your  guess not is right';
   }
}

// TASK 8

// 8. Write a JavaScript program to calculate days left until next 14 August.
var fromDate = new Date();
var toDate = new Date(2022,8,14)
var diff = toDate - fromDate
document.getElementById('tsk8_res').innerHTML=(diff/(1000*60*60*24)) 


// TASK 9
// 9. Write a JavaScript program to calculate multiplication and division of two numbers.



function sum()
{
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var result =  Number(num1)+Number(num2)
    console.log(result)
    document.getElementById('result').innerHTML =result;
}
function subt()
{
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var result =  Number(num1)-Number(num2)
    console.log(result)
    document.getElementById('result').innerHTML =result;
}
function mul()
{
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var result =  Number(num1)*Number(num2)
    console.log(result)
    document.getElementById('result').innerHTML =result;
}



// TASK 10
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]


function convrt()
{
    var c = document.getElementById('tsk10_input1').value;
    var f = ((c*9)/5)+32;
    if(f==32)
    document.getElementById('result2').innerHTML = '0';
    else
    document.getElementById('result2').innerHTML = f +'f'
}
function bSpace() {
    var key = event.keyCode || event.charCode;
    if( key == 8 ){
    	//backspace pressed
        document.getElementById('result2').innerHTML =  +'f'
        
    }
};

function convrtf()
{
    var f = document.getElementById('tsk10_input2').value;
    c = (((f-32)/9)*5).toFixed(2);
    document.getElementById('result2').innerHTML = c
    if(f.length==0)
    document.getElementById('result2').innerHTML = '0';
    else
    document.getElementById('result2').innerHTML = c +'c'
}
function bSpace() {
    var key = event.keyCode || event.charCode;
    if( key == 8 ){
    	//backspace pressed
        document.getElementById('result2').innerHTML =  +'c'
        
    }
};








// TASK 11
// Write a JavaScript program to compute the sum of the two given Numbers. 
// If the two values are same, then returns triple their sum.
function sumT(){
    num1 =  Number(document.getElementById('tsk11_input1').value);
    num2 =  Number(document.getElementById('tsk11_input2').value);
    if(num1==num2)
        result = (num1+num2)*3;
    else
        result = num1 + num2;
    
        
    document.getElementById('tsk11_res').innerHTML = result
}


// TASK 12
// Write a JavaScript program to check whether a given Number is within 20 of 100 or 400.

function sumT(){
    num1 =  Number(document.getElementById('tsk12_input1').value);
    if((100-num1)<=20 || (400-num1)<=20)
        result = 'given Number is within 20 of 100 or 400';
    else
        result = 'given Number is not within 20 of 100 or 400';
    
        
    document.getElementById('tsk12_res').innerHTML = result
}

// TASK 13
// Write a JavaScript program to find the largest of three given Numbers.

function comp(){
    num1 =  Number(document.getElementById('tsk13_input1').value);
    num2 =  Number(document.getElementById('tsk13_input2').value);
    num3 =  Number(document.getElementById('tsk13_input3').value);

    if((num1>num2 && num2>num3) || (num1>num3 && num2<num3) || (num1>num2 && num2==num3) || (num1==num2 && num2>num3) || (num1==num3 && num2<num3) )
        result = num1;
    else if((num2>num1 && num1>num3) || (num2>num3 && num1<num3) || (num2>num3 && num1==num3) || (num2==num3 && num3>num1) || (num2==num1 && num1>num3))
        result = num2;
    else if((num3>num1 && num1>num2) || (num3>num2 && num1<num2) || (num3>num2 && num1==num2) || (num3==num2 && num2>num1) || (num1==num3 && num2<num1))
        result = num3;
    else
        result ='error'
    
        
    document.getElementById('tsk13_res').innerHTML = result
}

// TASK 14
// Write a JavaScript program to capitalize the first letter of each word of a given string.

var str = 'my name is syed fahad and i am student of saylani chatbot ';
var strArr = str.split(" ");
var newStr = ''

for(i in strArr){
    newStr += strArr[i].charAt(0).toUpperCase()+ strArr[i].slice(1) +' ';
}
document.getElementById('tsk14_res').innerHTML = newStr

// TASK 15
// Write a JavaScript program to convert a given days to hours and minutes.
// i.e: 1 day equals 24hr

function Days(){

    var num1 =  Number(document.getElementById('tsk15_input1').value);
    var hr = num1*24;
    var min = hr*60
    
    document.getElementById('tsk15_res').innerHTML = num1 +' Days is in to Hour ='+hr+' is in to minutes = '+min
}

// TASK 16
// Write a JavaScript program to reverse the elements of a given array, you can not use Array.reverse() do it with loop.

var arr = [2,4,6,8,9]
var revArr = [];
document.getElementById('q16').innerHTML =arr
let j = 0;
for(let i = arr.length-1;i>=0;i--){
       revArr[j]=arr[i]
       j++
}
document.getElementById('tsk16_res').innerHTML =revArr


// TASK 17
// Write a JavaScript program to find the larger value between the first or last
// and set all the other elements with that value. Display the new array.

var arr = [2,3,9];
document.getElementById('q17').innerHTML =arr
var newArr =[]
var max;
if(arr[0]>arr[2])
    max = arr[0];
else
    max=arr[2];

for(let i=0;i<arr.length;i++)
{
    newArr[i] =max 
}

document.getElementById('tsk17_res').innerHTML =newArr




// TASK 18
// Write a JavaScript program to find the kth greatest element of a given array of Numbers

var arr = [1,9,0]
document.getElementById('q18').innerHTML =arr
var max;
for(i in arr)
{
    for(j in arr){
        if(arr[i]<arr[j]){


            let temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
        // console.log(arr)
        max=arr[i]
    }
    document.getElementById('tsk18_res').innerHTML = max
}




// TASK 19
// Write a JavaScript program to find the number which appears most in a given array of Numbers.

var arr = [2,9,5,5,1,3,5,3];
document.getElementById('q19').innerHTML  =arr
var num ;
var next=0;
for(let i in arr)
{
    var pre=0;
    for(let j in arr)
    {
        if(arr[i]===arr[j])
        {
            pre++
        }
        
    }
    if(next<pre)
        {
            num =arr[i]
            next =pre
        }
}
document.getElementById('tsk19_res').innerHTML =num +' is '+next+' times'



// TASK 20
// Write a JavaScript program to replace all the numbers with a specified number of a given array of Numbers.

var arr = [2,9,5,5,1,3,5,3];

var targ = 5;
var val = 4;
document.getElementById('q20').innerHTML =arr +'<br>'+targ+' Replace by '+val ;
for(let i in arr){
    if(arr[i]===targ)
    {

        arr[i]=val
    }
}


document.getElementById('tsk20_res').innerHTML =arr;



