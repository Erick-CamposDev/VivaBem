let result = document.createElement('p');
let containerResult = document.getElementById('result');

const submitButton = document.getElementById('submitButton');


function calcularImc(){
    let heightStr = document.getElementById('altura').value;
    let weightStr = document.getElementById('peso').value;

    heightStr = heightStr.replace(',','.');
    weightStr = weightStr.replace(',', '.');

    const height = parseFloat(heightStr)
    const weight = parseFloat(weightStr)

    const imc = weight / (height ** 2);

    if (!height || !height){
        result.textContent = "Insira valores válidos!";
        containerResult.appendChild(result);
        return;
    }

    let resultMessage = "";
    if (imc < 18.5){
        resultMessage = "Você está abaixo do peso!";
    } else if (imc >= 18.5 && imc < 25){
        resultMessage = "Você está com peso normal!";
    } else if (imc >= 25 && imc < 30){
        resultMessage = "Você está acima do peso!";
    } else if (imc >= 30 && imc < 35){
        resultMessage = "Você está com obesidade leve!";
    } else if (imc >= 35 && 39.9){
        resultMessage = "Você está com obesidade moderada!";
    } else{
        resultMessage= "AVISO: Você está com obesidade grave!";
    }

    result.textContent = `${resultMessage} (IMC: ${imc.toFixed(2)})`;
    containerResult.appendChild(result);
};


submitButton.addEventListener('click', (event) =>{
    event.preventDefault();
    calcularImc();
});

