var i = 0;
var text = "Front-end Developer / Figma Expert";
function typing() {
  if (i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

const moonPath =
  "M14.5 27.5C14.5 42.6878 27.5 53 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 14.5 12.3122 14.5 27.5Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

// Here we setup the timeline
darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  //add different animation to timeline
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=750"
    )
    .add(
      {
        targets: ".nav,.hero-area,.about",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
      },
      "-=750"
    )
    .add(
      {
        targets: "h1,h3,p,a,.btn, .about",
        color: toggle ? "rgb(0,0,0)" : " rgb(255,255,255)",
      },
      "-=750"
    )
    .add(
      {
        targets: ".my-port,.projects-p,.footer-p",
        color: !toggle ? "rgb(255,255,255)" : " rgb(255,255,255)",
      },
      "-=750"
    );

  // Every time we click on sun, i want toggle to switch
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
