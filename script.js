const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = "green";
});

function getAverage(marks) {
  let sum = 0;
  marks.foreach((mark) => {
    sum += mark;
  });
  return parseInt(sum / marks.length);
}
getAverage([2, 2, 2, 2]);
