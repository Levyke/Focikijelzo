let adatokdiv = document.getElementById("adatok")
let jatekadatdiv = document.getElementById("jatekadat")

let perc = 0;
let sec = 0;
let idoszal;

let cs1Pont = 0;
let cs2Pont = 0;

function start()
{
    let adatokdiv = document.getElementById("adatok");
    let jatekadatdiv = document.getElementById("jatekadat");
    let csapat1 = document.getElementById("csapat1").value;
    let csapat2 = document.getElementById("csapat2").value;
    let idobeallitas = document.getElementById("idobeallitas").value;
    adatokdiv.style.display = "none";
    jatekadatdiv.style.display = "block";
    if (csapat1 == "" || csapat2 == "" || idobeallitas == "0"){
        alert("Kérlek, tölts ki minden mezőt!"); 
        document.getElementById("adatok").style.display = "block";
        document.getElementById("jatekadat").style.display = "none";
    }
    document.getElementById("elsocsnev").innerHTML = csapat1;
    document.getElementById("masodikcsnev").innerHTML = csapat2;
}

function ujmeccs()
{
    document.getElementById("adatok").style.display = "block";
    document.getElementById("jatekadat").style.display = "none";
    csapat1.value = "";
    csapat2.value = "";
    idobeallitas.value = 0;
}

function inditas()
{
    idoszal = setInterval(timer,1000)
}

function megallit()
{
    clearInterval(idoszal)
}

function torles()
{
    document.getElementById("szamlalo").innerHTML = "00:00"
}
function timer() 
{
    if (sec == 60) 
    {
        sec = 0;
        perc++;
    }
}
function masodikfelido()
{
    document.getElementById("felido").innerHTML = "2. félidő"
}
function pontok() 
{
    document.getElementById('cs1Pont').textContent = cs1Pont;
    document.getElementById('cs2Pont').textContent = cs2Pont;
}
function cs1minusz()
{
    if(cs1Pont > 0)
    {
        cs1Pont--;
    }
    
    pontok()
}
function cs1plusz()
{
    cs1Pont++;
    pontok()
}

function cs2minusz()
{
    if (cs2Pont > 0)
    {
        cs2Pont--;
    }
    pontok()
}

function cs2plusz()
{
    cs2Pont++;
    pontok()
}

