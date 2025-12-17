function throttle(fn, delay) {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      fn.apply(this, args); 
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false; 
      }, delay);
    }
  };
}
 
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input3");

  const onChange = throttle(() => {
    console.log("Executed immediately at 1st keystroke");
  }, 500);

  input.addEventListener("input", onChange);
});
