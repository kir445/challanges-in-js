console.log('helloi');''
//commemt "how is it return"
//alert('this is me');

//variables
var a ='keeri';
console.log(a);

var number=77;
console.log(number);
/*prompt takes input from the user
//in order to display it on the screen we will use variable to store it
var ans=prompt('do u like icecreams?');

//if(ans=='yes') {
    document.getElementById('para').innerHTML='yaay u too like icecreams'+" "+ans;     
}
else if (ans=='no') {
        document.getElementById('para').innerHTML=' Ewwwwww'+"  "+ans+ "  "+'such a bad taste';
}
else
{
    document.getElementById('para').innerHTML='please enter valid information';
}
//
*/

//numbers in java script
/*var num1=44;
console.log(num1);
var num2=prompt('enter the no.');
console.log(num1%4);
console.log(46.44/3)
*/

/*
document.getElementById('para').innerHTML='Try understanding this as well';
document.getElementById('pa').innerHTML="what is wrong exactly";
num1+=10;
console.log(num1);
*/
/*
1.create a function.
2.call the function.
*/
//functions creating
/*
function fun(){
    alert('this is the function');
}
//call function
fun();
*/
function greetings(){
    var name=prompt('what is your name');
    var result="hello"+" "+name;
    //how to use html for display usig css
    document.getElementById('para').innerHTML=result;
}
//greetings();//basic function

//how to take arguments in functions

function sum( a,b){
    
    var sumnum = a + b;
    console.log(sumnum);

}
sum('hello','kazi  ');

//data types
let age=19;
let myname='keerti';
let fullname={first:'keerti',last:'sharma'};//object in js
let truth=false;//bolean;
let groceries=["apple","bananas","oranges"];//array
let random ;
let nothing=null;//null value

// adding new linges to strings
var fruits="apples\nbananas\noranges";
console.log(fruits.length);
console.log(fruits.indexOf('les'));//get index of the data
console.log(fruits.slice(3,7));//retrive from certain index no to certain index no
console.log(fruits.replace('ges','55'));//these are methods
console.log(fruits.split(''));//split by character
console.log(fruits.split(','));

/*
arrays
*/
let fruit=["banana","pineapples","kiwi"];
//an another way of creating an array
 //let fruits=new Array("bananas","apples","kiwi");
console.log(fruits.split(""));
console.log(fruit.shift());//removes the first iteam of the array
console.log(fruit.unshift('guava'));

let somenumber=new Array(1,4,55,46,35,6,73,34,56);
console.log(somenumber.slice(4,5));
console.log(somenumber.pop());
console.log(somenumber.sort((a,b)=>a-b));//This metgod is used to sort numbers in an ascending ordr from ones digit to hyndreds digit
console.log(fruit.sort());//this is used to sort an array of string into assending order
console.log(somenumber.sort());//this isused to sortan array into assending order intoa formation of single and double digits
let emptyarray=new Array();
for(let k=0;k<=10;k++)
{
    emptyarray.push(k);
    console.log(emptyarray[k]);
}

/* objects in Javascript
Dictionaries in javascript
*/
/*let student ={
    first:"kirti",
    last:"sharma",
    age:"19",
    height:173,
    StudentInfo: function(){
 return this.first + '\n' + this.last;
    
    }

};

console.log(student.first);
console.log(student.height);
student.first="preeti";
console.log(student.first);
student.age++;
console.log(student.age);
student.StudentInfo();
console.log(student.StudentInfo()); 
*/
//conditioonals control flow (if else)
 /*var agge = prompt('What is your age?');

if((agge>=18) && (agge<=35)){
    let permission="Tareget Audience";
    console.log(permission);
}
else{
    permission="Not my audience";
    console.log(permission);
}
*/

//switch staements
//differenciate between weekday and week end
//day 0--->sunday
//day 6-->saturday
var days=prompt("enter the number");//switch statements does not accept variables
switch(1){
    case 0:
        Text='sunday';
        break;
    case 1:
        Text='Monday';
        break;
    case 2:
        Text="Tuesday";
        break;
   
}
console.log(Text);



