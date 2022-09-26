function currenttime() {
  setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    if (h > 12) {
      hours.innerText = h - 12;
    }
    minutes.innerText = d.getMinutes();
    seconds.innerText = d.getSeconds();
  }, 1000);
}
currenttime();
