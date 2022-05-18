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
      d: [{ value: moonPath }, { value: moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=750"
    );
});
