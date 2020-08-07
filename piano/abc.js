document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});
function makeSound(key) {

  switch (key) {
    case "a":
      var a1 = new Audio("sounds/95326__ramas26__a.wav");
      a1.play();
      break;

    case "b":
      var b1 = new Audio("sounds/95327__ramas26__b.wav");
      b1.play();
      break;

    case "c":
      var c1 = new Audio("sounds/95328__ramas26__c.wav");
      c1.play();
      break;

    case "d":
      var d1 = new Audio("sounds/95329__ramas26__d.wav");
      d1.play();
      break;

    case "e":
      var e1 = new Audio("sounds/95330__ramas26__e.wav");
      e1.play();
      break;

    case "f":
      var f1 = new Audio("sounds/95331__ramas26__f.wav");
      f1.play();
      break;

    case "g":
      var g1 = new Audio("sounds/95332__ramas26__g.wav");
      g1.play();
      break;
    default: console.log(key);

  }
}
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
