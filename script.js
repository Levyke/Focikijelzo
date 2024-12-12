let perc = 0;
let sec = 0;
let idoszal;

let lista = []
let lista2 = []
kiallitasidoszalcs1 = setInterval(tick, 1000)
kialliatsidoszalcs2 = setInterval(tick2, 1000)

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
function gomb()
{
    let neve = document.getElementById("jatekosnevcs1").value
    let kiallitasidocs1 = 120;
    
    lista.push({task:neve, time:kiallitasidocs1})

    kiiras()
}
function gomb2()
{
    let neve2 = document.getElementById("jatekosnevcs2").value
    let kiallitasidocs2 = 120;
    
    lista.push({task:neve2, time:kiallitasidocs2})

    kiiras2()
}
function kiiras()
{
    let main = document.getElementById("felsor")
    main.innerHTML = ""

    lista.forEach(element =>
    {
        main.innerHTML += `<li> ${element.task}- ${element.time}`
    })
}
function kiiras2()
{
    let main2 = document.getElementById("felsor2")
    main2.innerHTML = ""

    lista.forEach(element =>
    {
        main2.innerHTML += `<li> ${element.task}- ${element.time}`
    })
}
function tick()
{
    for (i = 0; i < lista.length; i++) 
    {
        lista[i].time -= 1
        if (lista[i].time == 0)
        {
            lista.splice(i,1)
        }
    }
    kiiras() 
}
function tick2()
{
    for (i = 0; i < lista2.length; i++) 
    {
        lista2[i].time -= 1
        if (lista2[i].time == 0)
        {
            lista2.splice(i,1)
        }
    }
    kiiras2()
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

