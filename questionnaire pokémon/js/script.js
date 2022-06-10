let reponses = [];
reponses.push('bulbizarre');
let qcm = document.getElementsByClassName("QCM");
let compteur=0;
let divs = document.querySelectorAll('body div');

function suivant(){
    
    compteur++;
    if (compteur == 15) {
        response();
    }
    if (compteur > 15) {
        compteur = 0
        
        const title = document.getElementsByClassName("salope")[0];
        title.classList.add("none");
    }
    for (let index = 0; index < qcm.length; index++) {
        qcm[index].classList.add("none");
    }
    qcm[compteur].classList.remove("none");
}

function getAnswer(questionNum, answer){
    return document.forms[questionNum][answer].checked;

}

function response(){
    let p =0

    console.log()

    if (document.forms["question1"]["answer"].value == "rhinoferoce"){

        p =  document.forms["question1"]["answer"].value == "rhinoferoce" ? p+1 : p ;
        const title = document.getElementsByClassName("N1")[0];
        title.classList.remove("none");
    }else{
        const title = document.getElementsByClassName("N01")[0];
        title.classList.remove("none");
    }
    if(document.forms["question2"]["answer"].value == "pierre plante"){
        p = document.forms["question2"]["answer"].value == "pierre plante" ? p+1 : p;
        const title = document.getElementsByClassName("N2")[0];
        title.classList.remove("none");
    }else{
        const title = document.getElementsByClassName("N02")[0];
        title.classList.remove("none");
    }
    if(document.forms["question3"]["answer"].value == "n52"){
        p = document.forms["question3"]["answer"].value == "n52" ? p+1 : p;
        const title = document.getElementsByClassName("N3")[0];
        title.classList.remove("none");
    }else{
        const title = document.getElementsByClassName("N03")[0];
        title.classList.remove("none");
    }

    let alakazamChecked = getAnswer("question4", "alakazam");
    let smogogoChecked = getAnswer("question4", "smogogo");
    let magnetonChecked = getAnswer("question4", "magneton");
    let spectrumChecked = getAnswer("question4", "spectrum");
    p =  spectrumChecked && smogogoChecked && !magnetonChecked && !alakazamChecked ? p+1 : p;

    let pteraChecked = getAnswer("question5", "ptera");
    let simularbreChecked = getAnswer("question5", "simularbre");
    let nidokingChecked = getAnswer("question5", "nidoking");
    let amonitarChecked = getAnswer("question5", "amonitar");
    p = pteraChecked && simularbreChecked && !nidokingChecked && amonitarChecked ? p+1 : p;

    if(document.forms["question6"]["answer"].value == "minidraco"){
        p = document.forms["question6"]["answer"].value == "minidraco" ? p+1 : p;
        const title = document.getElementsByClassName("N6")[0];
        title.classList.remove("none");
    }else{
        const title = document.getElementsByClassName("N06")[0];
        title.classList.remove("none");
    }

    let rocheChecked = getAnswer("question7", "roche");
    let combatChecked = getAnswer("question7", "combat");
    let volChecked = getAnswer("question7", "vol");
    let acierChecked = getAnswer("question7", "acier");
    p = rocheChecked && combatChecked && !volChecked && !acierChecked ? p+1 : p;

    if(document.forms["question8"]["answer"].value == "mentali"){
        p = document.forms["question8"]["answer"].value == "mentali" ? p+1 : p;
        const title = document.getElementsByClassName("N8")[0];
        title.classList.remove("none");
    }else{
        const title = document.getElementsByClassName("N08")[0];
        title.classList.remove("none");
    }

    if(document.forms["question9"]["answer"].value == "jadielle"){
        p = document.forms["question9"]["answer"].value == "jadielle" ? p+1 : p;
        const title = document.getElementsByClassName("N9")[0];
        title.classList.remove("none");
    }else{
        const title = document.getElementsByClassName("N09")[0];
        title.classList.remove("none");
    }

    let ectoplasmaChecked = getAnswer("question10", "ectoplasma");
    let nostenferChecked = getAnswer("question10", "nostenfer");
    let airmurChecked = getAnswer("question10", "airmur");
    let donphanChecked = getAnswer("question10", "donphan");
    p = ectoplasmaChecked && nostenferChecked && !airmurChecked && !donphanChecked ? p+1 : p;

    let maraisteChecked = getAnswer("question11", "maraiste");
    let libegeonChecked = getAnswer("question11", "libegeon");
    let tyranocifChecked = getAnswer("question11", "tyranocif");
    let armaldoChecked = getAnswer("question11", "armaldo");
    p = maraisteChecked && libegeonChecked && !tyranocifChecked && !armaldoChecked ? p+1 : p;

    if(document.forms["question12"]["answer"].value == "monaflemit"){
        p = document.forms["question12"]["answer"].value == "monaflemit" ? p+1 : p;
        const title = document.getElementsByClassName("N12")[0];
        title.classList.remove("none");
    }else{
        const title = document.getElementsByClassName("N012")[0];
        title.classList.remove("none");
    }

    let lokhlassChecked = getAnswer("question13", "lokhlass");
    let aqualiChecked = getAnswer("question13", "aquali");
    let kaimorseChecked = getAnswer("question13", "kaimorse");
    let demantaChecked = getAnswer("question13", "demanta");
    p = lokhlassChecked && aqualiChecked && !kaimorseChecked && !demantaChecked ? p+1 : p;

    if(document.forms["question14"]["answer"].value == "camerupte"){
        p = document.forms["question14"]["answer"].value == "camerupte" ? p+1 : p;
        const title = document.getElementsByClassName("N14")[0];
        title.classList.remove("none");
    }else{
        const title = document.getElementsByClassName("N014")[0];
        title.classList.remove("none");
    }
    
    let kaorineChecked = getAnswer("question15", "kaorine");
    let vacilysChecked = getAnswer("question15", "vacilys");
    p = !magnetonChecked && !airmurChecked && kaorineChecked && vacilysChecked ? p+1 : p;


    document.getElementById('score').innerHTML = p;

    message(p);

}

function message(score){
    if (score>=0 && score<=3){
        const title = document.getElementsByClassName("salope")[0];
        title.classList.remove("none");
        console.log(title);
    }
    if (score>=4 && score <=6){
        const title = document.getElementsByClassName("nul")[0];
        title.classList.remove("none");
        console.log(title);
    }
    if (score>=7 && score <=9){
        const title = document.getElementsByClassName("bof")[0];
        title.classList.remove("none");
        console.log(title);
    }
    if (score>=10 && score <=12){
        const title = document.getElementsByClassName("bien")[0];
        title.classList.remove("none");
        console.log(title);
    }
    if (score>=13){
        const title = document.getElementsByClassName("bravo")[0];
        title.classList.remove("none");
        console.log(title);
    }
}
