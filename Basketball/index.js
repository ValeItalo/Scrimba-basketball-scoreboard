const scoreboardHome = document.getElementById("scoreboard-home")
const scoreboardGuest = document.getElementById("scoreboard-guest")

const homeBtn1 = document.getElementById("home-btn1")
const homeBtn2 = document.getElementById("home-btn2")
const homeBtn3 = document.getElementById("home-btn3")

const guestBtn1 = document.getElementById("guest-btn1")
const guestBtn2 = document.getElementById("guest-btn2")
const guestBtn3 = document.getElementById("guest-btn3")

const guestBtnLess1 = document.getElementById("guest-btn-less1")
const homeBtnLess1 = document.getElementById("home-btn-less1")
const resetScoreBtn = document.getElementById("reset-score")
let homeScore = 0
let guestScore = 0

homeBtn1.addEventListener("click", homePoint1)
homeBtn2.addEventListener("click", homePoint2)
homeBtn3.addEventListener("click", homePoint3)

// HOME POINTS
function homePoint1() {
    homeScore += 1
    scoreboardHome.textContent = homeScore
    homeScoreFontSize()
}

function homePoint2() {
    homeScore += 2
    scoreboardHome.textContent = homeScore
    homeScoreFontSize()
}

function homePoint3() {
    homeScore += 3
    scoreboardHome.textContent = homeScore
    homeScoreFontSize()
}

// GUEST POINTS 
guestBtn1.addEventListener("click", guestPoint1)
guestBtn2.addEventListener("click", guestPoint2)
guestBtn3.addEventListener("click", guestPoint3)

function guestPoint1() {
    guestScore += 1
    scoreboardGuest.textContent = guestScore
    guestScoreFontSize()
}

function guestPoint2() {
    guestScore += 2
    scoreboardGuest.textContent = guestScore
    guestScoreFontSize()
}

function guestPoint3() {
    guestScore += 3
    scoreboardGuest.textContent = guestScore
    guestScoreFontSize()
}

// RESET SCORE BUTTON
resetScoreBtn.addEventListener("click", resetScore)
function resetScore() {
    homeScore = 0
    guestScore = 0
    scoreboardHome.textContent = 0
    scoreboardGuest.textContent = 0
}

// LESS 1 POINT BUTTON
homeBtnLess1.addEventListener("click", homeLess1)
function homeLess1() {
    homeScore -= 1
    if (homeScore <= 0) {
        scoreboardHome.textContent = 0
        homeScore = 0
    }
    scoreboardHome.textContent = homeScore
    homeScoreFontSize()
}

guestBtnLess1.addEventListener("click", guestLess1)
function guestLess1() {
    guestScore -= 1
    if (guestScore <= 0) {
        scoreboardGuest.textContent = 0
        guestScore = 0
    }
    scoreboardGuest.textContent = guestScore
    guestScoreFontSize()
    return
}

// FONT SIZE FUNCTION
function homeScoreFontSize() {
    if (homeScore > 99) {
        scoreboardHome.style.fontSize = "120px"
    } else {
        scoreboardHome.style.fontSize = "150px"
    }
}

function guestScoreFontSize() {
    if (guestScore > 99) {
        scoreboardGuest.style.fontSize = "120px"
    } else {
        scoreboardGuest.style.fontSize = "150px"
    }
}