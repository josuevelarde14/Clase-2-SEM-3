let myboton= document.getElementById("miboton");
let myinput= document.getElementById("miinput")

//console.log(miboton);

myboton.addEventListener("click",function(){
    let valor = myinput.value
    console.log("El valor del input es: " + valor );
});


//let valor = Keynput.value;