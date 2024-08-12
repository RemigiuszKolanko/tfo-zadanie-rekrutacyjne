const endTime = new Date(Date.now() + 4 * 60 * 60 * 1000);

const updateClock = () => {
    const now = new Date();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
        document.getElementById('hours-tens').textContent = '0';
        document.getElementById('hours-ones').textContent = '0';
        document.getElementById('minutes-tens').textContent = '0';
        document.getElementById('minutes-ones').textContent = '0';
        return;
    }

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('hours-tens').textContent = Math.floor(hours / 10);
    document.getElementById('hours-ones').textContent = hours % 10;
    document.getElementById('minutes-tens').textContent = Math.floor(minutes / 10);
    document.getElementById('minutes-ones').textContent = minutes % 10;
}

updateClock();
setInterval(updateClock, 1000);
