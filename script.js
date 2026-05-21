const load = document.getElementById("load");
const categoryKivalasztas = document.getElementById("category");
const foodpic = document.getElementById("foodpic");

async function KajaKepBetoltes() {
  const category = categoryKivalasztas.value;

  try {
    const response = await fetch(`https://foodish-api.com/api/images/${category}`);
    const data = await response.json();

    foodpic.src = data.image;
  } catch (error) {
    console.error("Hiba történt:", error);
    alert("Nem sikerült betölteni a képet!");
  }
}

load.addEventListener("click", KajaKepBetoltes);

KajaKepBetoltes();
