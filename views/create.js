let options = document.getElementById("options");
let addOption = document.getElementById("addOption");
let currentOptionNumber = 3; /* jahatu amadar option 1 & 2 aca sai jonno ai ta 3 thaka start kora hoyaca*/

addOption.addEventListener("click", (e) => {
  e.preventDefault();
  const option = createNewOptions();
  options.appendChild(option);
});

const createNewOptions = () => {
  let div = document.createElement("div");
  div.className = "form-group";
  let input = document.createElement("input");
  input.type = "text";
  input.name = "options";
  input.placeholder = "option" + currentOptionNumber++;
  input.className = "form-control";
  div.appendChild(input);
  return div;
};
