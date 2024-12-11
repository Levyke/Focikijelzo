let perc = 0;
let sec = 0;
let idoszal;

let cs1Pont = 0;
let cs2Pont = 0;

let jatekosnevcs1 = document.getElementById("jatekosnevcs1").value
let jatekosnevcs2 = document.getElementById("jatekosnevcs2").value

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
        alert("Ne hagyd üresen egyik mezőt se!"); 
        document.getElementById("adatok").style.display = "block";
        document.getElementById("jatekadat").style.display = "none";
    }
    document.getElementById("elsocsnev").innerHTML = csapat1;
    document.getElementById("masodikcsnev").innerHTML = csapat2;
}

let kialliatsidoszalcs1;
let kiallitasidocs1 = 120;
function kiallitottjatekoscs1()
{
    kialliatsidoszalcs1 = setInterval(kiallitottidoszcs1, 1000)
}
function kiallitottidoszcs1()
{
    kiallitasidocs1--;
    const percek = Math.floor(kiallitasidocs1 / 60);
    const masodpercek = kiallitasidocs1 % 60;
    document.getElementById("kjnevcs1").innerHTML = percek + ":" + masodpercek
    if (kiallitasidocs1 == 0)
    {
        clearInterval(kialliatsidoszalcs1);
    }
}

let kialliatsidoszalcs2;
let kiallitasidocs2 = 120
function kiallitottjatekoscs2()
{
    kialliatsidoszalcs2 = setInterval(kiallitottidoszcs2, 1000)
}
function kiallitottidoszcs2()
{
    kiallitasidocs2--;
    const percek = Math.floor(kiallitasidocs2 / 60);
    const masodpercek = kiallitasidocs2 % 60;
    document.getElementById("kjnevcs2").innerHTML = percek + ":" + masodpercek
    if (kiallitasidocs2 == 0)
    {
        clearInterval(kialliatsidoszalcs2);
    }
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
    sec ++
    perc = Math.floor(sec/60)
    mp = sec % 60
    document.getElementById("szamlalo").innerHTML = `${perc} : ${mp} `
}

function masodikfelido()
{
    document.getElementById("felido").innerHTML = "2. félidő"
    document.getElementById("szamlalo").innerHTML = "00:00"
    document.getElementById("masodikfelidoindit").style.display = "none"
    document.getElementById("befejez").style.display = "block"
}

function befejez()
{
    if(cs1Pont < cs2Pont)
    {
        alert("A meccset a(z) " + document.getElementById("csapat2").value + " csapata nyerte. Gratulálunk")
    }
    else if(cs2Pont > cs2Pont)
    {
        alert("A meccset a(z) " + document.getElementById("csapat1").value + " csapata nyerte. Gratulálunk")
    }
    else
    {
        alert("A meccs döntetlen lett")
    }
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

