let j=500;
let p=0;
let t=0;
let test = 0
let lemon=0
let cherry=0
let diamond=0
let casino=0

function gameover(){
    if (j<10) {
        document.getElementById('erreur').classList.add("none");
        document.getElementById('dsl').classList.add("none");
        document.getElementById('jackpot').classList.add("none");
        document.getElementById('gagné').classList.add("none");
        document.getElementById('loose').classList.add("none");
        document.getElementById('gameover').classList.remove("none");
    }
}

function response() {
    if (lemon === 3){
        p = t*1.25-t;
        j+= t*1.25;
        document.getElementById("point").innerHTML = p;
        document.getElementById('gagné').classList.remove("none");

    }
    else if (cherry === 3){
        p = t * 1.5-t;
        j += t * 1.5;
        document.getElementById("point").innerHTML = p;
        document.getElementById('gagné').classList.remove("none");

    }
    else if (diamond === 1){
        t/=2;
        j += t;
        document.getElementById("dommage").innerHTML = t;
        document.getElementById('loose').classList.remove("none");
        gameover();

    }
    else if (diamond === 2){
        p=t*1-t;
        j+=t*1;
        document.getElementById('dsl').classList.remove("none");

    }
    else if (diamond === 3){
        p = t * 2.5-t;
        j += t * 2.5;
        document.getElementById("point").innerHTML = p;
        document.getElementById('gagné').classList.remove("none");

    }
    else if (casino === 3){
        p=t*10-t;
        j += t*10;
        document.getElementById("point").innerHTML = p;
        document.getElementById('gagné').classList.remove("none");
        document.getElementById('jackpot').classList.remove("none");

    }else{
        document.getElementById("dommage").innerHTML = t;
        document.getElementById('loose').classList.remove("none");
        gameover();
    }
    document.getElementById("score").innerHTML = j;
    lemon=0;
    cherry=0;
    diamond=0;
    casino=0;
}

function jouer(){
    document.getElementById('erreur').classList.add("none");
    document.getElementById('dsl').classList.add("none");
    document.getElementById('jackpot').classList.add("none");
    document.getElementById('gagné').classList.add("none");
    document.getElementById('loose').classList.add("none");
    let items = document.getElementsByClassName("item");
    let arry = Array.from(items);
    arry.forEach(element => {
        element.classList.add('none')
    });
    const title = document.getElementById("score");
    title.innerHTML = j;

    turnSlot('objet1', getRandNumber());
    turnSlot('objet2', getRandNumber());
    turnSlot('objet3', getRandNumber());
    response();
}

function turnSlot(slotNumber, test) {
    console.log(test)
    if (test>=1 && test <=29){
        const title = document.querySelector('#'+slotNumber +' .lemon');
        title.classList.remove("none");
        lemon+=1;
        console.log(title);
    }if (test >29 && test<=58){
        const title = document.querySelector('#'+slotNumber +' .cherry');
        title.classList.remove("none");
        cherry+=1;
        console.log(title);
    }if (test>58 && test<=87){
        const title = document.querySelector('#'+slotNumber +' .diamond');
        title.classList.remove("none");
        diamond+=1;
        console.log(title);
    }if (test> 87 && test<=100){
        const title = document.querySelector('#'+slotNumber +' .casino');
        title.classList.remove("none");
        casino+=1;
        console.log(title);
    }
}

function getRandNumber() {
    const min = 1;
    const max = 100;
    return Math.round (Math.random() * (max - min) + min);
}

function j10(){
    console.log("pute")
    t=10;
    if (t>j){
        document.getElementById('erreur').classList.remove("none");
        document.getElementById('dsl').classList.add("none");
        document.getElementById('jackpot').classList.add("none");
        document.getElementById('gagné').classList.add("none");
        document.getElementById('loose').classList.add("none");
    }else{
        j-=10;
    jouer();
    }
}

function j50(){
    console.log("pute")
    t=50;
    if (t>j){
        document.getElementById('erreur').classList.remove("none");
        document.getElementById('dsl').classList.add("none");
        document.getElementById('jackpot').classList.add("none");
        document.getElementById('gagné').classList.add("none");
        document.getElementById('loose').classList.add("none");
    }else{
        j-=50;
    jouer();
    }
}

function j100(){
    console.log("pute")
    t=100;
    if (t>j){
        document.getElementById('erreur').classList.remove("none");
        document.getElementById('dsl').classList.add("none");
        document.getElementById('jackpot').classList.add("none");
        document.getElementById('gagné').classList.add("none");
        document.getElementById('loose').classList.add("none");
    }else{
        j-=100;
    jouer();
    }
}