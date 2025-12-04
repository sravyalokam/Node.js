const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listener
emitter.on("greet", () => {
  console.log("Hello from event!");
});

// Emit event
emitter.emit("greet");
