class CountdownTimer {
  constructor({ selector, targetDate}) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  start() {
    const data1 = this.targetDate.getTime();
    const intID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = data1 - currentTime;
      const time = this.getTimeComponents(deltaTime);
      if (time.secs <= 0 && time.mins <= 0 && time.hours <= 0 && time.days <= 0) {
        clearInterval(intID);
        this.selector.textContent = `00:00:00:00`;
        return;
      }
      this.updateTimer(time);
    }, 1000);
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
      return String(value).padStart(2, '0');
  }
  updateTimer({ days, hours, mins, secs }) {
    const r1 = this.selector;
         return r1.textContent = `${days}:${hours}:${mins}:${secs}`;
      };
}
const userTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 15, 2021'),
  // targetDate: new Date(2021, 8, 4, 12, 54),
});

userTimer.start()


