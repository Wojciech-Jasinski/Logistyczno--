// import "flatpickr/dist/flatpickr.min.css";
// import flatpickr from "flatpickr";

// let timer = null;
// let countdownDate = new Date();
// const daysDisplay = document.querySelector("[data-days]");
// const hoursDisplay = document.querySelector("[data-hours]");
// const minutesDisplay = document.querySelector("[data-minutes]");
// const secondsDisplay = document.querySelector("[data-seconds]");
const fp = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 5,
  onOpen() {
    // document.querySelector("#datetime-picker").classList.add("test--h--active");
    console.log("dzala");
  },
  //   onClose(selectedDates) {
  //     countdownDate = selectedDates[0];
  //     if (validateDate(countdownDate)) {
  //       resetTimer();
  //       // update(1, '??');
  //       update(1, "00");
  //     } else {
  //       update(1, "00");
  //       if (timer) {
  //         clearInterval(timer);
  //         btnStart.innerText = "Start";
  //         timer = null;
  //       }
  //       // window.alert('Please choose a date in the future');
  //       Notify.failure("Please choose a date in the future", {
  //         timeout: 3000,
  //       });
  //     }
  //   },
});
