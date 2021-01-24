import "../css/nav.scss";

const menu = document.querySelector("#menu");

menu.addEventListener("click", (e) => {
  const lis = e.currentTarget.querySelectorAll("li a");
  lis.forEach((li) => {
    console.log(li);
    li.classList.remove("now");
  });
  e.target.classList.add("now");
});
