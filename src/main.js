import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay();

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");

// k.add([k.pos(120, 80), k.sprite("bean")]);   

// putting together our player character
const bean = add([sprite("bean"), pos(80, 40), area(), body()]);

// .jump() when "space" key is pressed
onKeyPress("space", () => {
  bean.jump();
});

//platform
