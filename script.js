setInterval( ()=> {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds() + 20;

    let h = document.getElementsByClassName("hour")[0];
    let m = document.getElementsByClassName("minute")[0];
    let s = document.getElementsByClassName("second")[0];

    let hourRotation = 30*hours + minutes/2;
    let minuteRotation = 6*minutes;
    let secondRotation = 6*seconds

    h.style.transform = `rotate(${hourRotation}deg)`;
    m.style.transform = `rotate(${minuteRotation}deg)`;
    s.style.transform = `rotate(${secondRotation}deg)`;
} , 100);