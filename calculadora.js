const suma = () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    document.getElementById("r").innerHTML= parseInt (a) + parseInt(b);

}

const resta = () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    document.getElementById("r").innerHTML= parseInt (a) - parseInt(b);

}

const multiplicacion = () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    document.getElementById("r").innerHTML= parseInt (a) * parseInt(b);

}

const division = () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    document.getElementById("r").innerHTML= parseInt (a) / parseInt(b);

}