let homePoints = document.getElementById ("homePoints")
let guestPoints = document.getElementById ("guestPoints")
let homeScore = 0
let guestScore = 0
function home1 () {
    homeScore += 1
    homePoints.textContent = homeScore
}
function home2 () {
    homeScore += 2
    homePoints.textContent = homeScore
}
function home3 () {
    homeScore += 3
    homePoints.textContent = homeScore
}
function guest1 () {
    guestScore += 1
    guestPoints.textContent = guestScore
}
function guest2 () {
    guestScore += 2
    guestPoints.textContent = guestScore
}
function guest3 () {
    guestScore += 3
    guestPoints.textContent = guestScore
}
function resetScore () {
    homeScore = 0
    guestScore = 0
    homePoints.textContent = homeScore
    guestPoints.textContent = guestScore
}