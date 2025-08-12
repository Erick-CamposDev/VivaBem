let result = document.createElement('p');
let containerResult = document.getElementById('result');
let input = document.querySelectorAll('.input-area')

const submitButton = document.getElementById('submitButton');


function calcularImc(){
    let heightStr = document.getElementById('altura').value;
    let weightStr = document.getElementById('peso').value;

    heightStr = heightStr.replace(',','.');
    weightStr = weightStr.replace(',', '.');

    const height = parseFloat(heightStr)
    const weight = parseFloat(weightStr)

    const imc = weight / (height ** 2);

    input.forEach(i => i.classList.remove('active'))

    if (!height || !weight || height === 0 || weight === 0){
        input.forEach(i => {
           if (!i.value || parseFloat(i.value) === 0) {
            i.classList.add('active');
    }});
        result.style.color = "#ff0000"
        result.textContent = "Insira valores válidos!";
        containerResult.innerHTML = ""
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
    } else if (imc >= 35 && imc < 39.9){
        resultMessage = "Você está com obesidade moderada!";
    } else{
        resultMessage= "AVISO: Você está com obesidade grave!";
    }

    result.style.color = "";
    result.textContent = `${resultMessage} (IMC: ${imc.toFixed(2)})`;
    containerResult.innerHTML = ""
    containerResult.appendChild(result);
};


submitButton.addEventListener('click', (event) =>{
    event.preventDefault();
    calcularImc();
});

