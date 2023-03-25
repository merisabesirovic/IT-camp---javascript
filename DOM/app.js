// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = "New Title";
// console.log(document.title);

// console.log(document.body);
// console.log(document.all);
// const headerTitle = document.all[10];
// console.log(headerTitle);

// headerTitle.textContent = "new logo";
// headerTitle.innerHTML = "<h1>new logo</h1>";

// console.log(document.forms);
// console.log(document.images);

// // GET ELEMENT BY ID

const headerTitle = document.getElementById("logo");
// // console.log(headerTitle);

// // headerTitle.textContent = "new logo";
// // headerTitle.innerHTML = "<em>new logo</em>";

// // // PROMENA STILOVA

// headerTitle.style.borderBottom = "solid 3px #000";

// // GET ELEMENTS BY CLASS NAME

// const containers = document.getElementsByClassName("container");

// const container = containers[0];
// container.style.backgroundColor = "#ABABAB";
// container.style.border = "1px solid #f00";
// console.log(container);
// // GET ELEMENTS BY TAG NAME

const listItems = document.getElementsByTagName("li");
console.log(listItems);

// listItems.style.color = "blue"; ne radi na taj nacin, vec mora kroz iteraciju

// for (let i = 0; i < listItems.length; i++) {
//   if (i === 1) {
//     listItems[i].style.color = "brown";
//   } else {
//     listItems[i].style.color = "blue";
//   }
// }

// // QUERY SELECTOR

// const firstLogoId = document.querySelector("#logo");
// const firstCont = document.querySelector(".container");
// const firstLi = document.querySelector("li");

// console.log(firstLogoId);
// console.log(firstCont);
// console.log(firstLi);

// firstLi.textContent = "first item";

// const input = document.querySelector("input");
// input.value = "Hello World";

// const input2 = document.querySelector("input[type='email']");
// input2.value = "test@test.com";
// input2.placeholder = "Unesite vasu email adresu";

// // QUERY SELECTOR ALL

// const listItems2 = document.querySelectorAll("li");
// console.log(listItems2);

// const evenLi = document.querySelectorAll("li:nth-child(even)");
// const oddLi = document.querySelectorAll("li:nth-child(odd)");

// for (let i = 0; i <= oddLi.length; i++) {
//   oddLi[i].style.backgroundColor = "blue";
//   evenLi[i].style.backgroundColor = "orange";
// }

// // parentNode

// const title = document.getElementById("add");
// console.log(title.parentNode);

// // parentElement

// const title = document.getElementById("add");
// console.log(title.parentElement);

// // childNodes   (vraca sve elemente i razmake)

// const container = document.querySelector(".container");
// console.log(container.childNodes);

// // children (vraca samo elemente)

const container = document.querySelector(".container");
// // console.log(container.children);

// // firstElementChild

// const container = document.querySelector(".container");
// console.log(container.firstElementChild);

// // lastElementChild
// // nextElementSibling
// // previousElementSibling

// // // createElement

const newDiv = document.createElement("div");

// // add class

newDiv.className = "newDiv";

// // // add id

// newDiv.id = "newId";

const textForNewDiv = (document.createTextNode = "Hello World");

newDiv.append(textForNewDiv);

container.appendChild(newDiv);

// input2.setAttribute("placeholder", "Unesite vasu email adresu");
// console.log(input2.getAttribute("placeholder"));
// let button = document.querySelector("button");
// button.addEventListener("click", buttonClicked);
// function buttonClicked(event) {
//   console.log(event.target.className);
//   console.log(event.target.clientX);
//   console.log(event.taget.altKey);
// }
let button = document.querySelector("button");
button.addEventListener("click", buttonClicked);
function buttonClicked(event) {
  button.style.backgroundColor = "green";
}
newDiv.addEventListener("dblclick", runEvent);
function runEvent(event) {
  console.log("Type of event: " + event.type);
  console.log(event.mousedown);
  console.log(event.mousemove);
  //   za input polja
  console.log(event.keyup);
}

let inputs = document.querySelectorAll("input");
let itemName = inputs[0].value;
let email = inputs[2].value;
// console.log(input1);
// input1.addEventListener("keydown", getValue);
// function getValue(e) {
//   console.log(e.target.value);
// }
let form = document.querySelector("form");
form.addEventListener("submit", getValues);
function getValues(e) {
  e.preventDefault();
  console.log(itemName);
  console.log(email);
}
let deleteButton = document.createElement("button");
const textDeleteButton = (document.createTextNode = "X");
deleteButton.className = "deletebtn";
deleteButton.append(textDeleteButton);
console.log(deleteButton);
let lis = document.querySelectorAll("li");
let li = lis[lis.length - 1];
li.appendChild(deleteButton);
console.log(deleteButton);
