// css 선택자 아무거나 가능
// 처음 만나는 element 를 가져옴
let container = document.querySelector(".container");
console.log(container);

let first_li = document.querySelector(".pagination li:first-child");
console.log(first_li);

let button = document.querySelector(".pagination li:nth-child(2)");
console.log(button);

let data = document.querySelector('[data-target="#navbarText"]');
console.log(data);

//전체 요소 가져오기 querySelectorAll (NodeList)
let liList = document.querySelectorAll(".pagination li");
console.log(liList);
