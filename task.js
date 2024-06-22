const time = function () {
  const startTimer = document.getElementById("timer");
  let number = parseInt(startTimer.textContent);
  if (number === 0) {
    alert("Вы победили в конкурсе");
  } else {
    startTimer.textContent--;
  }
};
setInterval(time, 1000);