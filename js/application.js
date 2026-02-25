alert ("application.js loaded")
window.requestAnimationFrame(function () {
  console.log("Application JS loaded");
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
