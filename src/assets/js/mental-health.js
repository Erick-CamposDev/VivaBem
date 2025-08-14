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