function firstEvent(fn, delay) {
  let isWaiting = false;

  return function (...args) {
    if (!isWaiting) {
      fn(...args);         
      isWaiting = true;     

      setTimeout(() => {
        isWaiting = false;  
      }, delay);
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input2"); 

  const onChange = firstEvent(() => {
    console.log("Executed only on 1st keystroke in delay");
  }, 500);

  input.addEventListener("input", onChange);
});
