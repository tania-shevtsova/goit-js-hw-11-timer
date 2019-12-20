// class CountdownTimer{

// }

const CountdownTimer = {
  // selector: '#timer-1',
  // targetDate: new Date('Jul 17, 2019'),
  // currentTime: Date.now(),
  // time: this.targetDate-this.currentTime,

  start() {
    const targetDate = new Date("Dec 20, 2020");
    const tim = document.querySelector("#timer-1");
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const time = targetDate - currentTime;
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      if (targetDate.valueOf() <= currentTime.valueOf()) {
        clearInterval(this.timerId);
        update("00", "00", "00", "00");
      } else {
        update(days, hours, mins, secs);
      }
    }, 1000);
  }
};

const refs = {
  day: document.querySelector('span[data-value="days"]'),
  hour: document.querySelector('span[data-value="hours"]'),
  min: document.querySelector('span[data-value="mins"]'),
  sec: document.querySelector('span[data-value="secs"]')
};

function update(num1, num2, num3, num4) {
  refs.day.textContent = `${num1}`;
  refs.hour.textContent = `${num2}`;
  refs.min.textContent = `${num3}`;
  refs.sec.textContent = `${num4}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

CountdownTimer.start();
