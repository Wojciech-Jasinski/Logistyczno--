// console.log(document.activeElement);

// const bodyListener = document.querySelector("body");
// console.log(bodyListener);

// bodyListener.addEventListener(
//   "click",
//   () => console.log(document.activeElement),
//   false
// );

// body.addEventListener("onClick", console.log(body));
const sendContent = (element) => {
  return () => {
    console.log(element.value);
  };
};
const initiateInputEvents = () => {
  const inputs = document.querySelectorAll("input");
  for (const i of inputs) {
    i.addEventListener("change", sendContent(i));
  }
};
initiateInputEvents();
