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

function valueSetters() {
  gsap.set("nav a", { y: "-100%", opacity: 0 });
  gsap.set(".hero .parent .child", { y: "100%" });
  gsap.set(".hero .heroBottom img", { opacity: 0 });

  document.querySelectorAll("#Visual>g").forEach((e) => {
    const character = e.childNodes[1].childNodes[1];
    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });
}

function loaderAnimation() {
  let tl = gsap.timeline();

  tl.from(".loader .child span", {
    left: "41%",
    stagger: 0.2,
    ease: Power3.easeInOut,
  })
    .to(".loader .parent .child", {
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
      delay: -1.7,
      duration: 1.1,
      ease: Expo.easeIn,
    })
    .to(".green", {
      bottom: "100%",
      delay: -1.3,
      duration: 1.8,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateHomepage();
      },
    });
}

function animateHomepage() {
  let tl = gsap.timeline();
  tl.to("nav a", {
    y: "0%",
    stagger: 0.1,
    opacity: 1,
    duration: 0.2,
    ease: Circ.easeInOut,
  })
    .to(".hero .heroBottom img", {
      opacity: 1,
      duration: 0.2,
      ease: Circ.easeInOut,
    })
    .to(".hero .parent .child", {
      y: "0%",
      stagger: 0.2,
      duration: 0.5,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateSVG();
      },
    });
}

function animateSVG() {
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    // strokeDasharray: 0,
    strokeDashoffset: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    // delay: 2.5,
  });
}

revealToSpan();
valueSetters();
loaderAnimation();
