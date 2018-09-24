window.addEventListener('load', init)

// Available levels
const levels = {
    easy: 6,
    medium: 4,
    hard: 2
}

// Change level
const currentLevel = levels.easy

// Globals
let time = currentLevel
let score = 0
let highscore = 0
let isPlaying

// DOM Elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const highscoreDisplay = document.querySelector('#highscore')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = [
    'hello',
    'nutrition',
    'hesitate',
    'wonderful',
    'sceptical',
    'socialize',
    'media',
    'database',
    'awesome',
    'great',
    'superflous',
    'car',
    'bicycle',
    'stare',
    'hear',
    'hair',
    'addicted',
    'mesmerize',
    'beautiful',
    'plunch',
    'chaos',
    'games',
    'fuck',
    'tinder',
    'rediculous',
    'lamate',
    'type',
    'succubus',
    'witcher',
    'division',
    'exile',
    'ground',
    'establishment',
    'cocktail',
    'lucky',
    'echo',
    'hero',
    'agent',
    'villainous',
    'aquiver',
    'mellifluous',
    'ineffable',
    'hiraeth',
    'wicked',
    'nefarious',
    'despicable',
    'somnambulist',
    'epoch',
    'sonorous',
    'serendipity',
    'limerence',
    'bombinate',
    'etherial',
    'illicit',
    'petrichor',
    'iridescent',
    'revelation',
    'epiphany',
    'supine',
    'luminescence',
    'solitude',
    'aurora',
    'syzygy',
    'phosphenes',
    'oblivion',
    'ephemeral',
    'incandescence',
    'denouement',
    'vellichor',
    'fluent',
    'eloquence',
    'defenestration',
    'sonder',
    'effervescence',
    'cromulent'
]

// Initialize Game
function init(){
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel
    // Load word from array
    showWord(words)
    // Start matching on word input
    wordInput.addEventListener('input', startMatch)
    // Call countdown every second
    setInterval(countdown, 1000)
    // Check game status
    setInterval(checkStatus, 50)
}

// Start match
function startMatch(){
    if(matchWords()){
        isPlaying == true
        time = currentLevel + 1
        showWord(words)
        wordInput.value = ''
        score++
        if(score > highscore){
            highscore = score
        }
    }

    // If Score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0
    }else{
        scoreDisplay.innerHTML = score
    }
}

// Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!'
        return true
    }else{
        return false
    }
}

// Pick  & show random word
function showWord(words){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length)
    // Output random word
    currentWord.innerHTML = words[randIndex]
}

// Countdown timer
function countdown(){
    //Make sure time is not run out

    if(time > 0){
        // Decrement
        time--
    } else if(time === 0){
        isPlaying = false
    }
    // Show time
    timeDisplay.innerHTML = time
}

// Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = ' Game Over!!!'
        highscoreDisplay.innerHTML = highscore
        score = -1
    }
}


