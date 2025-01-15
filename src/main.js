import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay();

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");

// k.add([k.pos(120, 80), k.sprite("bean")]);

// putting together our player character
const bean = k.add([sprite("bean"), pos(80, 40), area(), body()]);

// add platform
k.add([
  rect(width(), 48),
  pos(0, height() - 48),
  outline(4),
  area(),
  body({ isStatic: true }),
  color(127, 200, 255),
]);

k.setGravity(1600);

//jump only if grounded

k.onKeyPress("space", () => {
  if (bean.isGrounded()) {
    bean.jump();
  }
});
// add tree
k.add([
  rect(48, 64),
  area(),
  outline(4),
  pos(width(), height() - 48),
  anchor("botleft"),
  color(255, 180, 255),
  move(LEFT, 240),
  "tree"
]);
