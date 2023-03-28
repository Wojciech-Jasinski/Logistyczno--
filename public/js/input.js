const inputTag = test("input", {
  onOpen(d, dstr, ins) {
    console.log(
      "edit: " + ins.element.closest(".info-bar").id,
      ins.element.getAttribute("position"),
      ins.element.value
    );
  },
  onChange() {},
  onClose(d, dstr, ins) {
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
});
