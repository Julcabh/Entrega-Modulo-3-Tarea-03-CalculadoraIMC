function CalcularIMC(){
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var IMC = peso/(altura/100*altura/100);
    var IMC_redondeado = (IMC.toFixed(2));

    if(IMC_redondeado <= 18.5){
        document.getElementById("resultado").innerHTML="Su IMC es "+IMC_redondeado+" Por debajo del peso";
    }
    else if(IMC_redondeado > 18.5 && IMC_redondeado <= 24.9){
        document.getElementById("resultado").innerHTML="Su IMC es "+IMC_redondeado+" Peso saludable";
    }
    else if(IMC_redondeado > 24.9 && IMC_redondeado <= 29.9){
        document.getElementById("resultado").innerHTML="Su IMC es "+IMC_redondeado+" Con Sobrepeso";
    }
    else if(IMC_redondeado > 29.9 && IMC_redondeado <= 39.9){
        document.getElementById("resultado").innerHTML="Su IMC es "+IMC_redondeado+" Obeso";
    }
    else if(IMC_redondeado > 39.9){
        document.getElementById("resultado").innerHTML="Su IMC es "+IMC_redondeado+" Obesidad extrema o de alto riesgo";
    }

}