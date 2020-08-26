var qarray = quesArray
var index = 0, correct = 0
var answered = []


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
        `<div class="main">
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

ansDiv(index)

