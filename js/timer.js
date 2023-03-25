function getDate() {
    return new Date();
}

function getDay() {
    let day = getDate();
    let date = day.getDate();
    let month = day.getMonth();
    let year = day.getFullYear();
    let time = date < 10 ? '0' + date + ' ' : date + ' ';
    time += month < 10 ? '0' + (month + 1) : (month + 1);
    time += ' ' + year;
    return time;
}

function getTime () {
    let date = getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours < 10 ? '0' + hours : hours;
    time += ':';
    time += minutes < 10 ? '0' + minutes : minutes;
    time += ':';
    time += seconds < 10 ? '0' + seconds : seconds;

    return time;
}



function showTime ( id, str ) {
    document.getElementById(id).textContent = str;
}

showTime( 'timer', getTime() );

setInterval(function() {
    showTime( 'timer', getTime() )
}, 1000);

showTime('date', getDay());