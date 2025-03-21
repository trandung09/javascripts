const btnRandomAnswer = document.getElementById("btn");

btnRandomAnswer.addEventListener("click", function () {
  const quizGroups = new Set();
  document
    .querySelectorAll(".quiz-answer input[type='radio']")
    .forEach((input) => {
      quizGroups.add(input.name);
    });

  quizGroups.forEach((name) => {
    const options = document.querySelectorAll(`input[name='${name}']`);
    const randomIndex = Math.floor(Math.random() * options.length);
    options[randomIndex].checked = true;
  });
});
