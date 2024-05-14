let timers = [null, null, null];
let seconds = [60, 60, 300];

function displayTime(timerId) {
    let min = Math.floor(seconds[timerId - 1] / 60);
    let sec = seconds[timerId - 1] % 60;
    document.getElementById(`time${timerId}`).innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function startTimer(timerId) {
    // 检查是否有其他计时器在运行
    timers.forEach((timer, index) => {
        if (timer !== null && (index + 1) !== timerId) {
            pauseTimer(index + 1);
        }
    });

    // 启动当前计时器
    if (!timers[timerId - 1]) {
        timers[timerId - 1] = setInterval(() => {
            if (seconds[timerId - 1] > 0) {
                seconds[timerId - 1]--;
                displayTime(timerId);
            } else {
                pauseTimer(timerId);
            }
        }, 1000);
    }
}

function pauseTimer(timerId) {
    clearInterval(timers[timerId - 1]);
    timers[timerId - 1] = null;
}

function resetTimer(timerId) {
    pauseTimer(timerId);
    seconds[timerId - 1] = [60, 60, 300][timerId - 1]; // 重置为对应的初始值
    displayTime(timerId);
}
