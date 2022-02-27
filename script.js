const space = document.querySelectorAll('.space')
const question = document.querySelectorAll('.question')
const answer = document.querySelectorAll('.answer')
const arrow = document.querySelectorAll('.arrow')


space.forEach((spac, idx) => {
    spac.addEventListener('click', () => {
        removeActiveClasse();
        removeShowClasse();

        question[idx].classList.add('active')
        answer[idx].classList.add('show')
        arrow[idx].classList.add('rotate')   
    })
})

function removeShowClasse() {
    answer.forEach(aswr => {
        aswr.classList.remove('show')
    })
}

function removeActiveClasse() {
    question.forEach(quest => {
        quest.classList.remove('active')
    })
}

function removeRotateClasse() {
    arrow.forEach(arr => {
        arr.classList.remove('rotate')
    })
}