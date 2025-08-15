//DIÁRIO EMOCIONAL//

const lastSaved = document.getElementById("lastSaved")

function save(){
    const inputArea = document.getElementById("diaryInput");
    const inputText = inputArea.value.trim();

    if (!inputText){
        return;
    }

    let data = JSON.parse(localStorage.getItem('diary')) || [];
    
    data.push(inputText)

    localStorage.setItem('diary', JSON.stringify(data));

    const list = document.getElementById('entries')
    list.innerHTML = ""
    data.forEach(entry =>{
        const li = document.createElement('li')
        li.textContent = entry
        list.appendChild(li)
    })

    lastSaved.textContent = "Entrada salva!"
    inputArea.value = ""
}

function reset(){
    document.getElementById("diaryInput").value = ""
    localStorage.removeItem('diary')

    document.getElementById('entries').innerHTML = ""
    lastSaved.textContent = "Entrada Resetada!"
}

window.onload = () => {
    document.getElementById("diaryInput").value = ""

    let data = JSON.parse(localStorage.getItem('diary')) || [];
    
    const list = document.getElementById('entries')
    list.innerHTML = ""
    data.forEach(entry =>{
        const li = document.createElement('li')
        li.textContent = entry
        list.appendChild(li)
    })
}

//TESTE DE HUMOR//

const testResult = document.getElementById("testResult");
const checkbox = document.querySelectorAll('.checkbox');
const testButton = document.getElementById('testButton');

function showResult(){
    let result = 0
    for (let i = 1; i < 3; i++) {
        const answer = document.querySelector(`input[name=q${i}]:checked`)
        if (answer){
            result += parseInt(answer.value)
        } else{
            testResult.innerHTML = "<p>Responda todas as perguntas!</p>"
            testResult.style.color = "#ff0000"
            return;
        }
    }

    let resultMessage = ""
    testResult.innerHTML = ""
    testResult.style.color =  ""

    if (result === 0){
        resultMessage = "Você parece estar com uma ótima sáude mental!"
    } else if (result <= 2){
        resultMessage = "Você está um pouco cansado, sugerimos que descanse sua mente um pouco!"
    } else if (result <= 5){
        resultMessage = "Sinais de desgaste moderado, que tal conversar com alguém de confiança sobre como você se sente?"
    } else{
        resultMessage = `<p>Sinais de alto desgaste, se você está se sentindo muito triste ou com pensamentos suícidas, procure um psicólogo ou um psiquiatra! Você merece atenção e cuidado emocional!</p>`
        resultMessage += `<a href="https://www.cvv.org.br/" target="_blank" rel="noopener noreferrer">
                            Converse com um psicólogo
                        </a>`
    }

    
    testResult.innerHTML = `<p>${resultMessage}</p>`
}