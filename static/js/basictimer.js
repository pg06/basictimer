// Add countdown in this
// ...
function basicTimer(elementId,startTime,endTime) {
    var element, startTime, endTime, baseTime, isFinished;
    isFinished = false;
    startTime = typeof startTime === 'undefined' || !startTime ? 0 : startTime;
    endTime = typeof endTime === 'undefined' || !endTime ? 0 : endTime;
    if (endTime < startTime) { console.log('Help:\nLast parameter (endTime) should be higher or equal to the second parameter (startTime).') }
    baseTime = new Date;
    function refershTimer(time_) {
        hours = time_.getUTCHours();
        mins = time_.getUTCMinutes();
        element.innerHTML = (hours ? hours + ':' + pad( mins, 2 ) : mins) + ':' + pad( time_.getUTCSeconds(), 2 );
        setTimeout( updateTimer, 500 );
    }
    function updateTimer() {
        var timeLeft_ = endTime ? addMinutes(baseTime, endTime - startTime).getTime() - Date.now() : 1;
        var newTime = new Date(addMinutes(new Date, startTime) - baseTime);
        if (timeLeft_ < 0) {
            if (!isFinished) {
                refershTimer(newTime)
                isFinished = true;
                element.innerHTML += "<br>Finished!";
            }
        } else {
            refershTimer(newTime)
        }
    }
    element = document.getElementById( elementId );
    updateTimer()
}
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function addMinutes(date, minutes_) {
    return new Date(date.getTime() + minutes_*60000);
}