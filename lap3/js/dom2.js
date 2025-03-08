const p = document.getElementById("text");
p.style.color = "#777";
p.style.fontSize = "2rem";
p.innerHTML =
  "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

const ul = document.getElementsByTagName("ul")[0];

const liList = ul.children;
for (let i = 0; i < liList.length; i++) {
    liList[i].style.color = 'blue';
}

const ul2 = document.getElementById('list');
for (let i = 8; i < 11; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = `Item ${i}`;
    ul2.append(newLi);
}

const liList2 = ul2.children;
liList2[0].style.color = 'red';
liList2[2].style.background = 'green';

ul2.removeChild(liList2[3])

const newLi4 = document.createElement('li')
newLi4.innerText = 'Noi dung bat ki' 

ul2.insertBefore(newLi4, liList2[4]);