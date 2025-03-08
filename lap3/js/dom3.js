const p = document.getElementById("text");
const a = document.createElement("a");
a.setAttribute("href", "facebook.com");
a.innerText = "facebook";

p.insertAdjacentElement("afterend", a);

let text = p.innerHTML;
let strArr = text.split(" ");

for (let i = 0; i < strArr.length; i++) {
  if (strArr[i].length > 4) {
    strArr[i] = `<span style="background: yellow">${strArr[i]}</span>`;
  }
}

text = strArr.join(" ");

text = text.replace(/,/g, "🤔").replace(/\./g, "😲");

p.innerHTML = text;
