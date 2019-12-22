class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;
    this.day = document.querySelector('span[data-value="days"]');
    this.hour = document.querySelector('span[data-value="hours"]');
    this.min = document.querySelector('span[data-value="mins"]');
    this.sec = document.querySelector('span[data-value="secs"]');
  }
  start() {
    this.timerId = setInterval(() => {
      this.currentTime = Date.now();
      this.time = this.targetDate - this.currentTime;
      this.days = this.pad(Math.floor(this.time / (1000 * 60 * 60 * 24)));
      this.hours = this.pad(
        Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      this.mins = this.pad(
        Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60))
      );
      this.secs = this.pad(Math.floor((this.time % (1000 * 60)) / 1000));

      if (this.targetDate.valueOf() <= this.currentTime.valueOf()) {
        clearInterval(this.timerId);
        this.update("00", "00", "00", "00");
      } else {
        this.update(this.days, this.hours, this.mins, this.secs);
      }
    }, 1000);
  }

  update(num1, num2, num3, num4) {
    this.day.textContent = `${num1}`;
    this.hour.textContent = `${num2}`;
    this.min.textContent = `${num3}`;
    this.sec.textContent = `${num4}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 20, 2020")
});

timer.start();
