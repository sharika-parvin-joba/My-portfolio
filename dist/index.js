let btn = document.getElementById("lode-btn");
btn.addEventListener("click", () => {
  const project5 = document.getElementById("project5");
  const project6 = document.getElementById("project6");
  const project7 = document.getElementById("project7");
  const project8 = document.getElementById("project8");
  const project9 = document.getElementById("project9");
  const btnInnerText = btn.innerText;
  if (btnInnerText == "LODE MORE") {
    btn.innerText = "LODE LESS";
    project5.style.display = "block";
    project6.style.display = "block";
    project7.style.display = "block";
    project8.style.display = "block";
    project9.style.display = "block";
  } else {
    btn.innerText = "LODE MORE";
    project5.style.display = "none";
    project6.style.display = "none";
    project7.style.display = "none";
    project8.style.display = "none";
    project9.style.display = "none";
  }

  console.log(btnInnerText);
});
