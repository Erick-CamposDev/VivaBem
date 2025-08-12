const cardsArticles = document.querySelectorAll('.card-emergency')
const background = document.getElementById('modalBg')
const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modalTitle')
const modalContent = document.getElementById('modalContent')
const closeButton = document.getElementById('closeModalBtn')

const emergencies = {
    titles: {
        'desmaio': "<h2>Desmaio</h2>",
        'sangramento': "<h2>Sangramento</h2>",
        'mordida': "<h2>Mordida</h2>",
        'engasgo': "<h2>Engasgo</h2>",
        'fratura': "<h2>Fratura</h2>",
        'queimadura': "<h2>Queimadura</h2>",
        'febre': "<h2>Febre</h2>",
        'choque': "<h2>Choque</h2>"
    },
    content: {
        'desmaio': "<p>O desmaio é uma perda temporária da consciência causada pela redução do fluxo sanguíneo para o cérebro. Pode ocorrer devido a desidratação, estresse ou queda de pressão. Ao notar os sinais, como tontura e palidez, deite a pessoa de costas, eleve as pernas para melhorar a circulação e afrouxe roupas apertadas. Mantenha a pessoa calma e observe. Caso não recupere a consciência em poucos minutos ou apresente convulsões, chame socorro médico.</p>",
        'sangramento': "<p>Para controlar sangramentos, o primeiro passo é aplicar pressão direta sobre a ferida usando um pano limpo ou gaze. Isso ajuda a estancar o sangue e evitar perda excessiva. Se possível, eleve o membro afetado acima do nível do coração para diminuir o fluxo sanguíneo. Em casos de sangramento muito intenso, que não para com pressão, ou se a ferida for profunda, procure atendimento médico urgente para evitar complicações.</p>",
        'mordida': "<p>Após uma mordida de animal ou humana, lave imediatamente o local com água e sabão para reduzir o risco de infecção. Evite pressionar ou coçar a ferida para não agravar o trauma. Observe sinais de infecção, como vermelhidão, inchaço e febre. Busque atendimento médico para avaliar a necessidade de antissépticos, vacinas antirrábicas e antibióticos.</p>",
        'engasgo': "<p>O engasgo ocorre quando um objeto bloqueia as vias aéreas, dificultando a respiração. Se a pessoa estiver tossindo forte, incentive-a a continuar, pois isso pode liberar a obstrução. Se a respiração estiver comprometida, realize a manobra de Heimlich para desobstruir. Caso a pessoa perca a consciência, chame imediatamente o serviço de emergência e, se souber, inicie a reanimação cardiopulmonar (RCP).</p>",
        'fratura': "<p>Uma fratura é a quebra de um osso, que causa dor intensa, inchaço e dificuldade para mover a área afetada. Não tente recolocar o osso ou movimentar o membro. Imobilize o local com talas improvisadas para evitar mais lesões. Mantenha a pessoa confortável e encaminhe para atendimento médico para tratamento adequado e possível cirurgia.</p>",
        'queimadura':"<p>As queimaduras causam danos à pele e tecidos, variando em gravidade. Em casos leves, resfrie a área com água fria corrente por 10 a 20 minutos para reduzir a dor e evitar danos maiores. Não use gelo, pomadas ou remédios caseiros. Se a queimadura for extensa, profunda ou envolver rosto, mãos, pés ou genitais, procure atendimento médico urgente para avaliação e tratamento.</p>",
        'febre': "<p>Febre é um aumento da temperatura corporal geralmente causado por infecções. É um sinal que o corpo está lutando contra agentes nocivos. Mantenha a pessoa hidratada, em ambiente fresco e use roupas leves. Use antitérmicos conforme orientação médica. Procure ajuda se a febre ultrapassar 39ºC, durar mais de três dias ou vier acompanhada de sintomas graves, como dificuldade para respirar ou confusão mental.</p>",
        'choque': "<p>O choque é uma condição grave causada pela queda da pressão arterial e má circulação sanguínea, que pode levar à falência dos órgãos. Os sinais incluem pele fria, sudorese, palidez, fraqueza e confusão. Deite a pessoa de costas, eleve as pernas cerca de 30cm para melhorar o retorno sanguíneo e mantenha-a aquecida. Chame socorro imediatamente, pois o choque requer atendimento de urgência.</p>"
    }    
        
}

function mostrar(emergency){
            modalTitle.innerHTML = emergencies.titles[emergency];
            modalContent.innerHTML = emergencies.content[emergency];
            background.classList.add('active');
            modal.classList.add('active');
        }
    

cardsArticles.forEach(card =>{
    card.addEventListener('click', () =>{
        const emergencyKey = card.querySelector('h2').textContent.toLowerCase();
        mostrar(emergencyKey)
    })
})

function closeModal(){
    closeButton.addEventListener('click', () =>{
        background.classList.remove('active')
        modal.classList.remove('active')
    })
}