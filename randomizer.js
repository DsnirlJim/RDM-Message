let idx = 0;
let idc = 0;
let idk = 0;
const poem = [
  "You’re so cute, but why,",
  "In the morning light,",
  "I love you so much, ",
  "Texting with my mom. ",
  "The joy of sweet corn,",
  "Over the wintry",
  "Haikus are easy",
  "The earth shakes",
  "The apparition of these faces ",
  "love between us is",
  "O snail",
  "I want to sleep",
];
const poem2 = [
  " You sleep despite my meow.",
  "Should I write a haiku for you?",
  "But your love of cheese is wrong. ",
  "I don’t think that emoji means",
  "Taste of summer and butter.",
  "Forest, winds howl in rage",
  "But sometimes they don't make sense",
  "just enough",
  "in the crowd;",
  "speech and breath. loving you is",
  "Climb Mount Fuji,",
  "Swat the flies",
];
const poem3 = [
  "I stand on your face.",
  "You can’t even read.",
  "The smell makes me gag.",
  "What she thinks it does.",
  "I forgot to floss.",
  "With no leaves to blow.",
  "Refrigerator",
  "to remind us. ",
  "Petals on a wet, black bough.",
  "a long river running.",
  "But slowly, slowly!",
  "Softly, please.",
];

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("#p1").innerHTML = poem[idx];
  idx = Math.floor(Math.random() * 15) % poem.length;
  console.log(idx);
  document.querySelector("#p2").innerHTML = poem2[idk];
  idk = Math.floor(Math.random() * 15) % poem2.length;
  console.log(idk);
  document.querySelector("#p3").innerHTML = poem3[idc];
  idc = Math.floor(Math.random() * 15) % poem3.length;
  console.log(idc);
});
