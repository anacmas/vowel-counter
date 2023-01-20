const button = document.querySelector(".button-count");

button.addEventListener("click", countVowels);

function countVowels() {
  const inputContent = document.querySelector(".input-word").value;
  const answer = document.querySelector(".answer");

  vowels = inputContent.match(/[aeiou]/gi);

  if (vowels == null) {
    answer.innerHTML = `You entered 0 vowels`;
  } else {
    answer.innerHTML = `You entered ${vowels.length} vowels`;
  }
}
