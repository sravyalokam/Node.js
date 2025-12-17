function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}


document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input1");

  const onChange = debounce(() => {
    console.log("Executed after last keystroke");
  }, 500);

  input.addEventListener("input", onChange);
});
