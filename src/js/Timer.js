export const getTimer = () => {
  const getReportDate = async () => {
    const myJson = await fetch("config.json");
    const config = await myJson.json();

    const endDate = config.timerEndDate.split(/\W/);
    const [endDay, endMonth, endYear, endHour, endMinute] = endDate;

    const countDownDate = new Date(
      +endYear,
      +endMonth - 1,
      +endDay,
      +endHour,
      +endMinute
    ).getTime();

    const now = new Date().getTime();

    const distance = countDownDate - now;
    if (distance < 0) {
      // clearInterval(interval);
      document.getElementById("timer").style.display = "none ";
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dayTimer = (days >= 10 ? "" : "0") + days.toString();
      const hoursTimer = (hours >= 10 ? "" : "0") + hours.toString();
      const minutesTimer = (minutes >= 10 ? "" : "0") + minutes.toString();
      const secondTimer = (seconds >= 10 ? "" : "0") + seconds.toString();

      document.getElementById("day").textContent = dayTimer;
      document.getElementById("hours").textContent = hoursTimer;
      document.getElementById("min").textContent = minutesTimer;
      document.getElementById("sec").textContent = secondTimer;

      

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("timer").style.display = "none ";
      }
  
    }, 1000);
  };
  getReportDate();
};
