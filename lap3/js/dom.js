const a = document.getElementById("my_link");
const span = document.getElementById("my_span");

const divList = document.getElementsByTagName("div");
console.log(a);
console.log(span);

console.log(divList);

const section = document.getElementById("my_section");

console.log(section.innerHTML);
console.log(section.innerText);
console.log(section.textContent);

// section.innerHTML = `
//      <a id="my_link" class="a-element" href=""> link facebook </a>
// `;

// section.innerText = 'hello word'

// section.classList.add("")

section.style.background = "red";
section.style.border = "solid 5px black";

const p = document.createElement("a");
p.innerText = "The a moi duoc tao";

console.log(section.textContent);
p.setAttribute("href", "https://www.google.com.vn/?hl=vi");
p.setAttribute("target", "blank");

p.href = "https://www.w3schools.com/jsref/jsref_obj_regexp.asp";

section.append(p);
