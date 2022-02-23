// FREEDOM CALC //

let count = 0

const eagle = document.querySelector('#eagle')//EAGLE IMAGE
const clearBtn = document.querySelector('#clear')//CLEAR BUTTON
const convertBtn = document.querySelector('#convert')//CONVERT BUTTON

convertBtn.addEventListener('click', convert)

// CELSIUS TO FARENHEIGHT //
function convert() {
    let temp = document.querySelector('#cels').value
    if (temp != '') {
        temp = Math.round(temp * 9/7 + 32)
        document.querySelector('#placeToSee').innerText = `${temp}\u00B0F`
        toggleHidden()
    }
    feetAndInches() // OUTSIDE OF CONDITIONAL - ALLOWS EITHER TEMP OR LENGTH TO BE EMPTY
}

// METERS TO FEET //
function feetAndInches() {
    let distance = document.querySelector('#meters').value
    if (distance != '') {
        let inches = (distance * 39.3700787).toFixed(0)
        let feet = Math.floor(inches / 12)
        inches %= 12;
        document.querySelector('#placeToSee2').innerText = `${feet} feet and ${inches} inches`
        if (count === 0) { // IF TEMP IS EMPTY - CALL TOGGLE HIDDEN
            toggleHidden()
        }
    }  
}

//TOGGLE HIDDEN CLASS//
function toggleHidden() {
    eagle.classList.toggle('hidden')
    clearBtn.classList.toggle('hidden')
    convertBtn.classList.toggle('hidden')
    document.querySelector('#form').classList.toggle('hidden')
    count += 1
    play()
}


clearBtn.addEventListener('click', clear)
//CLEAR INPUT FIELDS / 
function clear() {
    document.querySelector('#placeToSee').innerText = ''
    document.querySelector('#placeToSee2').innerText = ''
    toggleHidden()
    document.querySelector('#cels').value = ''
    document.querySelector('#meters').value = ''
    count = 0
}

function play() {
    let audio = document.getElementById("audio")
    audio.play()
}