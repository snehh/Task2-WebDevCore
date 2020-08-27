var qarray = shuffleArray(quesArray)
var index = 0, correct = 0, username='Guest'
var answered = []

const createNavBar = (index) => {
    let txt = 
        `<span onclick="navListeners(0);" class="navspan ${( index === 0 ) ? 'current' : ( qarray[0].selected !== false ) ? ( (qarray[0].selected === qarray[0].correct) ? 'correct' : 'wrong' ) : ''}" id="nav1">1</span>
        <span onclick="navListeners(1);" class="navspan ${( index === 1 ) ? 'current' : ( qarray[1].selected !== false ) ? ( (qarray[1].selected === qarray[1].correct) ? 'correct' : 'wrong' ) : ''}" id="nav2">2</span>
        <span onclick="navListeners(2);" class="navspan ${( index === 2 ) ? 'current' : ( qarray[2].selected !== false ) ? ( (qarray[2].selected === qarray[2].correct) ? 'correct' : 'wrong' ) : ''}" id="nav3">3</span>
        <span onclick="navListeners(3);" class="navspan ${( index === 3 ) ? 'current' : ( qarray[3].selected !== false ) ? ( (qarray[3].selected === qarray[3].correct) ? 'correct' : 'wrong' ) : ''}" id="nav4">4</span>
        <span onclick="navListeners(4);" class="navspan ${( index === 4 ) ? 'current' : ( qarray[4].selected !== false ) ? ( (qarray[4].selected === qarray[4].correct) ? 'correct' : 'wrong' ) : ''}" id="nav5">5</span>
        <span onclick="navListeners(5);" class="navspan ${( index === 5 ) ? 'current' : ( qarray[5].selected !== false ) ? ( (qarray[5].selected === qarray[5].correct) ? 'correct' : 'wrong' ) : ''}" id="nav6">6</span>
        <span onclick="navListeners(6);" class="navspan ${( index === 6 ) ? 'current' : ( qarray[6].selected !== false ) ? ( (qarray[6].selected === qarray[6].correct) ? 'correct' : 'wrong' ) : ''}" id="nav7">7</span>
        <span onclick="navListeners(7);" class="navspan ${( index === 7 ) ? 'current' : ( qarray[7].selected !== false ) ? ( (qarray[7].selected === qarray[7].correct) ? 'correct' : 'wrong' ) : ''}" id="nav8">8</span>
        <span onclick="navListeners(8);" class="navspan ${( index === 8 ) ? 'current' : ( qarray[8].selected !== false ) ? ( (qarray[8].selected === qarray[8].correct) ? 'correct' : 'wrong' ) : ''}" id="nav9">9</span>
        <span onclick="navListeners(9);" class="navspan ${( index === 9 ) ? 'current' : ( qarray[9].selected !== false ) ? ( (qarray[9].selected === qarray[9].correct) ? 'correct' : 'wrong' ) : ''}" id="nav10">10</span>`

    return txt
}

const startPage = () => {
    document.getElementById('container').innerHTML = 
        `<div class="main startpage">
            <h1>Think you know all the facts about the novel coronavirus?</h1>
            <h3>Enter your name and begin: <input id="name" type="text" placeholder="Guest"></h3>
            <button id="start">Start</button>
        </div>`
    document.getElementById('start').addEventListener('click', () => {
        let val = document.getElementById('name').value
        if(val != '') username = val
        ansDiv(index)
    })
}

const navListeners = (i) => {
    index = i
    ansDiv(i)
}

const buttonListeners = () => {
    document.getElementById('Next').addEventListener('click', () => {
        if(index !== 9){
            index++;
            ansDiv(index)
        }
    })

    document.getElementById('Prev').addEventListener('click', () => {
        if(index !== 0){
            index--;
            ansDiv(index)
        }
    })
}

const quizcomplete = () => {
    document.getElementById('container').innerHTML = 
        `<div class="main results">
        <h1>Results</h1>
        <h3>Congradulations ${username}!</h3>
        <span>
            Your Score: ${correct} <br>
        </span>
        <button onclick="window.location.reload();">Replay</button>
    </div>`
}

const ansListeners = () => {
    if(qarray[index].selected === false){
        document.getElementById(`a0`).addEventListener('click', () => {
            qarray[index].selected = 1
            answered.push(index)
            if(qarray[index].selected === qarray[index].correct) correct++
            if(answered.length === 10) quizcomplete()
            else ansDiv(index)
        })
        document.getElementById(`a1`).addEventListener('click', () => {
            qarray[index].selected = 2
            answered.push(index)
            if(qarray[index].selected === qarray[index].correct) correct++
            if(answered.length === 10) quizcomplete()
            else ansDiv(index)
        })
        if(qarray[index].a.length > 2 ){
            document.getElementById(`a2`).addEventListener('click', () => {
                qarray[index].selected = 3
                answered.push(index)
                if(qarray[index].selected === qarray[index].correct) correct++
                if(answered.length === 10) quizcomplete()
                else ansDiv(index)
            }) 
        }if(qarray[index].a.length > 3){
            document.getElementById(`a3`).addEventListener('click', () => {
                qarray[index].selected = 4
                answered.push(index)
                if(qarray[index].selected === qarray[index].correct) correct++
                if(answered.length === 10) quizcomplete()
                else ansDiv(index)
            }) 
        }
    }
}

const ansDiv = (index) => {
    document.getElementById('container').innerHTML = 
        `<div class="navbar">${createNavBar(index)}</div>
        <div class="main">
            <div class="question">${qarray[index].q}<span class="result">${qarray[index].selected === false ? '' : (qarray[index].selected === qarray[index].correct) ? 'correct' : 'wrong'}</span></div><br>
            <div class="answers" id="answers">

            </div>
        </div>
        <div class="nav">
            <button class="Prev" id="Prev">Prev</button><button class="Next" id="Next">Next</button>
        </div>`

    var answersdiv = document.getElementById('answers')
    for(var i=0; i<qarray[index].a.length; i++){
        var div = document.createElement('div')
        if(qarray[index].selected === false){
            div.classList.add('ans', 'unselected')
        }else if(qarray[index].selected === qarray[index].correct){
            if(i === qarray[index].correct - 1) div.classList.add('ans', 'correct')
            else div.classList.add('ans')
        }else{
            if(i === qarray[index].correct - 1) div.classList.add('ans', 'correct')
            else if(i === qarray[index].selected - 1) div.classList.add('ans', 'selected')
            else div.classList.add('ans')
        }
        div.id = `a${i}`
        div.innerHTML = qarray[index].a[i]
        answersdiv.append(div)
    }
    if(index === 0){
        document.getElementById('Prev').setAttribute('disabled', 'true')
    }
    if(index === 9){
        document.getElementById('Next').setAttribute('disabled', 'true')
    }

    nextbutton = document.getElementById('Next')
    prevbutton = document.getElementById('Prev')

    buttonListeners()
    ansListeners()
}

startPage()

