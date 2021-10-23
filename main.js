setInterval(showTime,1000)

function showTime() {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let session ="AM"
    
    if (hour>=12){
        hour =hour-12
        session ="PM"
    }
    
    if(minutes>=60){
        minutes=minutes-60
    }
    if(seconds>=60){
        seconds=seconds-60
    }
    hour=(hour<10) ? `0${hour}` : hour
    minutes=(minutes<10) ? `0${minutes}` : minutes
    seconds=(seconds<10) ? `0${seconds}` : seconds

    let time = `${hour}:${minutes}:${seconds} ${session}`

    document.querySelector(".clock").innerText =time
}