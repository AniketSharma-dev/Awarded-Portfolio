function revealToSpan() {
  const reveal = document.querySelectorAll(".reveal");

  reveal.forEach((e) => {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = e.innerHTML;

    spanParent.appendChild(spanChild);
    e.innerHTML = "";
    e.appendChild(spanParent);
  });
}

revealToSpan();

let tl = gsap.timeline();

tl.from(".child span", {
  left: "31%",
  stagger: 0.2,
  ease: Power3.easeInOut,
})
  .to(".parent .child", {
    y: "-100%",
    duration: 0.4,
    ease: Circ.easeInOut,
  })
  .to(".loader", {
    height: 0,
    duration: 1.1,
    ease: Expo.easeInOut,
  })
  .to(".green", {
    height: "100%",
    delay: -2,
    duration: 1.1,
    ease: Expo.easeIn,
  })
  .to(".white", {
    height: "100%",
    delay: -1.4,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
