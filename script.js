//challenge 1:your age in days
function ageindays(year){
    year =prompt("Please enter your birth year");
    let ageindays = (2021-year)*365;
    let h1=document.createElement('h1');
    let textAnswer= document.createTextNode('You are'+ageindays+' days old');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);//inside the while tag just not the attributes
    document.getElementById('flex-box-result').appendChild(h1) ;
} 

function reset(){
    document.getElementById('ageindays').remove();
}

function  tinder(){
    var div=document.getElementById("div-cat-gen");
    var image=document.createElement("img");
    div.appendChild(image);
    image.src="tinder-logo.png";
}

function rpsgame(yourchoice){
//display of our choice over console
console.log(yourchoice);
var humanchoice,botchoice;
//our choice
humanchoice=yourchoice.id;
//botchoice
botchoice=numberToCHOICE(rantorpsInt());
console.log(botchoice);
//results
var results=decidewinner(humanchoice,botchoice);//[1,0]bot lost human won
console.log(results);
//msg of the results
message=finalmessage(results);//('message':'you Won','color':'green') 
console.log(message);
rpsfrontend(humanchoice,botchoice,message);
}
// function for bot to select an random no out of rock,paper,scissors
function rantorpsInt(){
return Math.floor(Math.random()*3);
}
function numberToCHOICE(number){
    return ['rock','papers','Scissors'][number];
}
//this function is used to just get the scores of the human and the bot score
//the other two were used to store the score of the individuals
function decidewinner(humanchoice,botchoice){
var rpsdata={'rock':{'rock':0.5,'papers':0,'Scissors':1},
'papers':{'rock':1,'papers':0.5,'Scissors':0},
'Scissors':{'rock':0,'papers':1,'Scissors':0.5}
};
var myscore=rpsdata[humanchoice][botchoice];
var botscore=rpsdata[botchoice][humanchoice];
return [myscore,botscore] ;
}

function finalmessage([myscore,botscore]){
    if(myscore==0 ){
        return {'message':'you lost','color':'red'};
    }
    else if(myscore==0.5){
            return{'message':'Its a Draw','color':'green'};
    }
    else {
        return{'message':'you won','color':'blue'};
    }
}
function rpsfrontend(humanchoiceimage, botchoiceimage, finalmessage) {
    var imagedb = {
        'rock': document.getElementById('rock').src,
        'papers': document.getElementById('papers').src,
        'Scissors': document.getElementById('Scissors').src
    };
    //remove data
    document.getElementById('rock').remove();
    document.getElementById('papers').remove();
    document.getElementById('Scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var mes = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imagedb[humanchoiceimage] + "'height=150 width=150 box-shadow=0px 10px 50px blueviolet >";
    mes.innerHTML = "<h1 style='color:" + finalmessage['color'] + "font-size:60px ;padding=20pxbox-shadow: 0px 10px 50px blueviolet'>" + finalmessage['message'] + "</h1>";
    botdiv.innerHTML = "<img src='" + imagedb[botchoiceimage] + "'height =150 width=150 box-shadow=0px 10px 50px blueviolet>";

    document.getElementById('flex-box-container-3').appendChild(humandiv);
    document.getElementById('flex-box-container-3').appendChild(mes);
    document.getElementById('flex-box-container-3').appendChild(botdiv);
}

//challenge:4 change colors of the buttons
var allbuttons=document.getElementsByTagName('button');


var copyallbutton=[];
for(let i=0;i<allbuttons.length;i++){
    copyallbutton.push(allbuttons[i].classList[1]);//add dosenot acceppt class with space characters

console.log(copyallbutton[i]);
}


function buttoncolorchange(buton){
    if(buton.value=='random'){
        buttonrandom();
        }
    else if(buton.value=='Red'){
        buttonred();
    }
    else if(buton.value=='green'){
        buttongreen();
    }
    else if(buton.value=='reset'){
        buttonreset();
    }
}

function buttonred(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-danger');
    }
}
function buttongreen(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-success');
    }
}

function buttonrandom(){
     let choices=['btn-primary','btn-danger','btn-warning','btn-success'];
   
   for(let i=0;i<allbuttons.length;i++){
       allbuttons[i].classList.remove(allbuttons[i].classList[1]);
       var randomval= Math.floor(Math.random()*4);
       allbuttons[i].classList.add(choices[randomval]);

   }
}
    
function buttonreset(){
    for(let j=0;j<allbuttons.length;j++){
        console.log(allbuttons[j].classList.remove(allbuttons[j].classList[1]));
        allbuttons[j].classList.add(copyallbutton[j]);
        }
}
