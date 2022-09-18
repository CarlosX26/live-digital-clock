

function getTime(){

    const date            = new Date()
    const boxHours        = document.getElementById("hours")
    const boxMinutes      = document.getElementById("minutes")
    const boxSeconds      = document.getElementById("seconds")
    const currentDate     = document.getElementById("date")

    const hours           = `${date.getHours()}`.length < 2? `0${date.getHours()}` : date.getHours()
    const minutes         = `${date.getMinutes()}`.length < 2? `0${date.getMinutes()}` : date.getMinutes()
    const seconds         = `${date.getSeconds()}`.length < 2? `0${date.getSeconds()}` : date.getSeconds()
    
    const day             = `${date.getDay()}`.length < 2? `0${date.getDay()}` : date.getDay()
    console.log(day)
    const month           = `${date.getMonth()}`.length < 2? `0${date.getMonth()}` : date.getMonth()
    const year            = date.getFullYear()
    
    boxHours.innerText    = hours
    boxMinutes.innerText  = minutes
    boxSeconds.innerText  = seconds

    currentDate.innerText = `${day}/${month}/${year}`
}

setInterval(()=>{
    getTime()
}, 1000)














