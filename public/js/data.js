// import "flatpickr/dist/flatpickr.min.css";
// import flatpickr from "flatpickr";

// let timer = null;
// let countdownDate = new Date();
// const daysDisplay = document.querySelector("[data-days]");
// const hoursDisplay = document.querySelector("[data-hours]");
// const minutesDisplay = document.querySelector("[data-minutes]");
// const secondsDisplay = document.querySelector("[data-seconds]");
const fp = flatpickr("[dll = datetime-picker]", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 5,
  dateFormat: "H:i d-m",

  onOpen(d, dstr, ins) {
    console.log(
      "edit: " + ins.element.closest(".info-bar").id,
      ins.element.getAttribute("position"),
      ins.element.value
    );
  },
  onChange() {},
  onClose(d, dstr, ins) {
    // console.log("edit: " + ins.element.id + " date: " + ins.element.value);
    // console.log(new Date(Number(ins.latestSelectedDateObj)));
    // console.log("zamyk");

    const ID = ins.element.closest(".info-bar").id;
    const position = ins.element.getAttribute("position");
    const newValue = ins.element.value;
    console.log(ID, position, newValue);

    const data = { ID, position, newValue };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("/api", options);
    console.log("change send to server");
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
