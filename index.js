
const btn = document.getElementById("btn");
const no = document.getElementById("no");
const adv = document.getElementById("adv");

console.log(no.innerHTML);
console.log(adv.innerHTML);

// console.log(no.)
btn.addEventListener("click", ()=>{
  fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    const slip = data["slip"];
    no.innerHTML = `ADVICE #${slip["id"]}`;
    adv.innerHTML = slip["advice"]
  });
})