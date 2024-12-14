let szamlalo = 0;
let idoszal;

let lista = []
let lista2 = []
kiallitasidoszalcs1 = setInterval(tick, 1000)
kialliatsidoszalcs2 = setInterval(tick2, 1000)

let cs1Pont = 0;
let cs2Pont = 0;

let legyenh = document.getElementById("legyenh")
let hosszindit = document.getElementById("hosszindit")
let masodikindit = document.getElementById("masodikfelidoindit")

let jatekosnevcs1 = document.getElementById("jatekosnevcs1").value
let jatekosnevcs2 = document.getElementById("jatekosnevcs2").value
let idobeallitas = document.getElementById("idobeallitas").value;
let idopercben = parseInt(document.getElementById("idobeallitas").value*60)

let adatokdiv = document.getElementById("adatok");
let jatekadatdiv = document.getElementById("jatekadat");

let modal = document.getElementById("adatokmodal")
let modalszoveg = document.getElementById("modalszoveg")
modal.style.display = "none"

function start()
{
    let adatokdiv = document.getElementById("adatok");
    let jatekadatdiv = document.getElementById("jatekadat");
    let csapat1 = document.getElementById("csapat1").value;
    let csapat2 = document.getElementById("csapat2").value;
    let idobeallitas = document.getElementById("idobeallitas").value;
    adatokdiv.style.display = "none";
    jatekadatdiv.style.display = "block";
    if (csapat1 == "" || csapat2 == "" || idobeallitas <= "0"){
        modal.style.display = "block"
        modalszoveg.innerText = "Adj meg érvényes adatokat"
        document.getElementById("adatok").style.display = "block";
        document.getElementById("jatekadat").style.display = "none";
    }
    else
    {
        idoszal = setInterval(indit,1000)
    }
    document.getElementById("elsocsnev").innerHTML = csapat1;
    document.getElementById("masodikcsnev").innerHTML = csapat2;
    i
    hosszindit.style.display = "none"
    masodikindit.style.display = "none"
    legyenh.style.display = "none"
}

function modalbezar()
{
    document.getElementById("adatokmodal").style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function indit()
{
    szamlalo ++
    let idonezo = parseInt(document.getElementById("idobeallitas").value*60)
    let perc = Math.floor(szamlalo/60)
    let mp = szamlalo % 60
    document.getElementById("felidohossz").innerHTML = `${perc} : ${mp}`;
    if (szamlalo == idonezo)
    {
        clearInterval(idoszal)
        legyenh.style.display = "block"
    }
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
    
    lista2.push({task:neve2, time:kiallitasidocs2})

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

    lista2.forEach(element =>
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

let hszamlalo;
let idoszalh;
let hosszpercbe = document.getElementById("hosszabbitasperc").value
let hosszabbitasid = document.getElementById("hosszabbitas")

function masodikfelido()
{
    document.getElementById("felido").innerHTML = "2. félidő"
    masodikindit.style.display = "none"
    clearInterval(idoszal)
    szamlalo = 0;
    idoszal = setInterval(indit,1000)
    legyenh.style.display = "none"
    hosszindit.style.display = "none"
    document.getElementById("felidohossz").innerHTML = "0:0"

    document.getElementById("masodikfelidoindit").innerHTML = `<button class="indit" onclick="befejez()" id="felidobutton" type="button"><h3 id="felidoindit">Meccs befejezése</h3></button>`
}

function starth()
{
    
    hszamlalo = document.getElementById("hosszabbitasperc").value*60;
    
    if(document.getElementById("hosszabbitasperc").value <= "0" || document.getElementById("hosszabbitasperc").value == "")
    {
        modal.style.display = "block"
        modalszoveg.innerText = "Adj meg egy érvényes számot"
    }
    else
    {
        idoszalh = setInterval(hosszabbitasindit, 1000)
    }

    if(document.getElementById("hosszabbitasperc").value >= "0" || document.getElementById("hosszabbitasperc").value != "")
    {
        document.getElementById("hosszabbitas").disabled = false
    }
}

function hosszabbitasindit()
{
    hszamlalo--
    let hperc = Math.floor(hszamlalo/60);
    let hmp = hszamlalo % 60;
    document.getElementById("hosszabbitaski").innerHTML = `${hperc} : ${hmp}`
    if (hszamlalo == 0)
    {
        clearInterval(idoszalh)
        document.getElementById("hosszabbitaski").innerHTML = "Lejárt a hosszabbítás"
        document.getElementById("hosszabbitaski").style.backgroundColor = "lightcoral"
        document.getElementById("masodikfelidoindit").style.display = "block"
        document.getElementById("hosszabbitasperc").value = 0;
    }
}

function legyen()
{
    legyenh.style.display = "none";
    hosszindit.style.display = "block";
    document.getElementById("hosszabbitaski").innerHTML = "0:0"
    document.getElementById("hosszabbitaski").style.backgroundColor = "rgba(158, 180, 180, 0.7)"
    document.getElementById("hosszabbitas").disabled = false
}
function nelegyen()
{
    legyenh.style.display = "none";
    masodikindit.style.display = "block"
}

function befejez()
{
    if(cs1Pont < cs2Pont)
    {
        modal.style.display = "block"
        modalszoveg.innerText = "A meccset a(z) " + document.getElementById("csapat2").value + " csapata nyerte. Gratulálunk"
    }
    else if(cs1Pont > cs2Pont)
    {
        modal.style.display = "block"
        modalszoveg.innerText = "A meccset a(z) " + document.getElementById("csapat1").value + " csapata nyerte. Gratulálunk"
    }
    else
    {
        modal.style.display = "block"
        modalszoveg.innerText = "A meccs döntetlen lett"

    }
    adatokdiv.style.display = "block"
    jatekadatdiv.style.display = "none"
    document.getElementById("csapat1").value = "";
    document.getElementById("csapat2").value = "";
    document.getElementById("idobeallitas").value = "";
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