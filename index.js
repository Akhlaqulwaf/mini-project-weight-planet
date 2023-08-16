const container = document.querySelector(".container");
const button = document.querySelector("button");
const requireMass = document.querySelector("#requireMass");
const requireChoose = document.querySelector("#requireChoose");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#mass").value;
  const planet = document.querySelector("#sel").value;
  const images = document.querySelector(".image");
  const img = document.querySelector("img");
  const desc = document.querySelector(".description");
  const desc1 = document.querySelector("#desc1")
  const desc2 = document.querySelector("#desc2")

  if (input === "") {
    images.style.display = "none";
    requireMass.style.display = "block";
  }else if(planet === "none"){
    requireMass.style.display = "none";
    requireChoose.style.display = "block"
  } else{
    requireMass.style.display = "none";
    requireChoose.style.display = "none"
    images.style.display = "flex";
    desc.style.display = "flex";
    let gravity;
    if (planet === "Earth") {
      gravity = 9.8;
    }
    if (planet === "Jupiter") {
      gravity = 23.1;
    }
    if (planet === "Mars") {
      gravity = 3.7;
    }
    if (planet === "Mercury") {
      gravity = 3.7;
    }
    if (planet === "Moon") {
      gravity = 1.6;
    }
    if (planet === "Neptune") {
      gravity = 11;
    }
    if (planet === "Pluto") {
      gravity = 0.7;
    }
    if (planet === "Saturn") {
      gravity = 9;
    }
    if (planet === "Uranus") {
      gravity = 8.7;
    }
    if (planet === "Venus") {
      gravity = 8.9;
    }

    const weight = input * gravity;

    img.src = `./image/${planet.toLowerCase()}.png`;
    desc1.textContent = `The Weight of The Object ${planet}`;
    desc2.textContent = `${weight.toFixed(2)} N`
  }
});
