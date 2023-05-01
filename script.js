let githubDiv = document.getElementById("githubDiv");
let konamiCode = document.getElementsByClassName("konamiCode");
let secret = document.getElementsByClassName("secret");
let languageBtn = document.getElementById("languageBtn")
let kortOmMig = document.getElementById("kortOmMig");
let yrken = document.getElementById("yrken");
let akademi = document.getElementById("akademi");
let arbetsproverRubrik = document.getElementById("arbetsproverRubrik");
let profilBorder = document.querySelector(".profilBorder");
let h1 = document.querySelector(".h1");
let katanaSushi = document.getElementById("katanaSushi");
let flixRus = document.getElementById("flixRus");
let Dashboard = document.getElementById("Dashboard");
let braggy = document.getElementById("braggy")
let setLanguageToEnglish = false;

////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".profilBorder", { duration: 1.3, delay: 0.6, opacity: 0, scale: 0, ease: "expo" });
gsap.from(".h1", { duration: 1.4, delay: 1.2, opacity: 0, scale: 0, ease: "expo" });
gsap.from(".footer", { duration: 1.3, delay: 1, opacity: 0, ease: "expo" });
gsap.from("#languageBtn", { duration: 1.3, delay: 0.2, scale: 0, opacity: 0, ease: "expo" });



////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".om-mig", { x: -1000, duration: 1.4, delay: 1.5, opacity: 0, ease: "expo" });

gsap.from(".javascript", { opacity: 0, delay: 3, duration: 1.3, ease: "sine" });
gsap.from(".html", { opacity: 0, delay: 3.1, duration: 1.3, ease: "sine" });
gsap.from(".css", { opacity: 0, delay: 3.2, duration: 1.3, ease: "sine" });
gsap.from(".angular", { opacity: 0, delay: 3.3, duration: 1.3, ease: "sine" });
gsap.from(".react", { opacity: 0, delay: 3.4, duration: 1.3, ease: "sine" });
gsap.from(".typescript", { opacity: 0, delay: 3.5, duration: 1.3, ease: "sine" });
gsap.from(".sass", { opacity: 0, delay: 3.6, duration: 1.3, ease: "sine" });
gsap.from(".gsap", { opacity: 0, delay: 3.7, duration: 1.3, ease: "sine" });
gsap.from(".node", { opacity: 0, delay: 3.8, duration: 1.3, ease: "sine" });
gsap.from(".mongoDb", { opacity: 0, delay: 3.9, duration: 1.3, ease: "sine" });
gsap.from(".socket", { opacity: 0, delay: 4, duration: 1.3, ease: "sine" });
gsap.from(".lottie", { opacity: 0, delay: 4.1, duration: 1.3, ease: "sine" });
gsap.from(".framer", { opacity: 0, delay: 4.2, duration: 1.3, ease: "sine" });
gsap.from(".azure", { opacity: 0, delay: 4.4, duration: 1.3, ease: "sine" });



////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".textToFadeIn", { opacity: 0, delay: 4.4, duration: 1.3, stagger: 0.4, ease: "sine" });

////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".arbetsprover", { x: 1000, duration: 1.4, delay: 1.7, ease: "expo" });
gsap.from(".arbetsprov", { duration: 1, delay: 1.8, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov1", { duration: 1, delay: 1.9, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov2", { duration: 1, delay: 2, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov3", { duration: 1, delay: 2.1, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov4", { duration: 1, delay: 2.2, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov5", { duration: 1, delay: 2.3, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".tools", { duration: 1.3, delay: 4.4, opacity: 0, stagger: 0.2, ease: "expo" });


////////////////////////////////////////////////////////////////////////////////////////////


gsap.from(".email", { y: -10, duration: 1.3, delay: 2, ease: "power2.in", yoyo: true, repeat: -1 });
gsap.from(".linkedin", { y: -10, duration: 1.3, delay: 2.1, ease: "power2.in", yoyo: true, repeat: -1 });
gsap.from(".github", { y: -10, duration: 1.3, delay: 2.2, ease: "power2.in", yoyo: true, repeat: -1 });

////////////////////////////////////////////////////////////////////////////////////////////


// Up, Up, Down, Down, Left, Right, Left, Right, B, A

let konamiCodeCheck = "";
let count = 0;

profilBorder.addEventListener("click", () => {
  count++
  if (count == 10) {
    h1.innerHTML = "Gamer <br> Over"
  }
});

document.addEventListener("keyup", (evt) => {
  konamiCodeCheck += evt.key;

  checkHiddenCode(konamiCodeCheck);
});

function checkHiddenCode(usersinput) {

  if (usersinput === "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba") {

    gsap.to(".secret", { y: -1500, duration: 1.5, opacity: 1, ease: "circ", yoyo: true, repeat: 3 });

    konamiCodeCheck = "";

  };
};

languageBtn.addEventListener("click", function changeLanguage() {


  setLanguageToEnglish = !setLanguageToEnglish;

  languageBtn.style.backgroundColor
  languageBtn.style.backgroundColor

  if (setLanguageToEnglish == true) {

    languageBtn.style.backgroundColor = "#d0ab30"
    languageBtn.style.color = "black"


    kortOmMig.innerHTML = `<img src="img/me.png" alt="icon about me" width="60" aria-hidden="true">

        <h2>ABOUT ME</h2>

        <div class="textToFadeIn">
          <p>Hi! My name is Gamer and I’m a passionate Frontend Developer at Trippus Event Solutions in Uppsala Sweden. I'm also a licenced gym instructor with degrees in Medieteknik aswell as in Frontend development.
          <br>
          I love building fun and lively animated UIs for users of all kinds to experience. 
          <br>
          Other interests include training and football witch I have had the luxury of working with a lot over the course of my professional life.</p>
      </div>`

    yrken.innerHTML = `

    <img src="img/jobs.png" alt="icon jobs" width="60" aria-hidden="true">
    <h2>WORK EXPERIENCE</h2>

    <div class="textToFadeIn">
      <ul class="yrken">
        <li><img src="img/trippus.jpeg" alt="logo Trippus" width="20" aria-hidden="true"> <strong>Trippus</strong> - <em>Frontend dev</em> - 2023-20XX</li>
        <li><img src="img/livsmedelsverket.jpeg" alt="logo Livsmedelsverket" width="20" aria-hidden="true"> <strong>SLV</strong> - <em>Frontend dev</em> - LIA 2023</li>
        <li><img src="img/friskis.jpeg" alt="logo Friskis" width="20" aria-hidden="true"> <strong>Friskis</strong> - <em>Gyminstructor</em> - 2017-2023</li>
        <li><img src="img/netonnet.jpeg" alt="logo Netonnet" width="20" aria-hidden="true"> <strong>Netonnet</strong> - <em>Teknisk Service</em> - 2010-2017</li>
        <li><img src="img/securitas.jpeg" alt="logo Securitas" width="20" aria-hidden="true"> <strong>Securitas</strong> - <em>Security Officer</em> - 2009-2010</li>
      </ul>
    </div> 
      `

    akademi.innerHTML = `

    <img src="img/school.png" alt="academic background" width="60" aria-hidden="true">
        <h2>ACADEMICS</h2>

        <div class="textToFadeIn">
          <ul>
            <li> <strong>Frontend developer</strong> - <em>Medieinstitutet</em> - 2021-2023</li>
            <li> <strong>Bachelors in Medieteknik</strong> - <em>Södertörns högskola</em> - 2006-2010</li>
            <li> <strong>Datorprogram</strong> - <em>Bolandsskolan Uppsala</em> - 2000-2003</li>
          </ul>
        </div>
    `

    arbetsproverRubrik.innerHTML = "PROJECTS"


    katanaSushi.innerHTML = `

    Katana Sushi - Complete site inc booking and admin, built using React & TypeScript.
        <br>
        Live site to the left and repo to the right
    `

    flixRus.innerHTML = `

    FlixRus - Complete webshop inc order and admin, built using Angular & TypeScript.
        <br>
        Live site to the left and repo to the right
    `

    Dashboard.innerHTML = `

    Dashboard - Had the opportunity and responsibility to build this from the ground up by myself for Livsmedelsverket during my internship in the spring of 2023. Built using React & Framer Motion. This replaced their previous system that was built using Blazor. <br> View a live version of the system with dummy data to the left, repo to the right
    `

    braggy.innerHTML = `

    Braggy - Thesis assignment inc backend and highscores, built using React, JavaScript, NodeJs, LottieFiles & Framer Motion.
    <br>
    Live site to the left and repo to the right
    `

  } else {

    languageBtn.style.backgroundColor = "palevioletred"
    languageBtn.style.color = "whitesmoke"

    kortOmMig.innerHTML = `<img src="img/me.png" alt="ikon om mig" width="60" aria-hidden="true">

        <h2>KORT OM MIG</h2>

        <div class="textToFadeIn">
        <p>
        Hej! mitt namn är Gamer och jag är en passionerad Frontend utvecklare som jobbar på Trippus Event Solutions
        i Uppsala.
        Jag är dessutom en licensierad gyminstruktör med examen inom Medieteknik samt Frontend-utveckling.
        <br>
        Jag älskar att bygga roliga och livligt animerade gränssnitt för användare av alla slag att uppleva.
        <br>
        Mina andra stora intressen är fotboll och träning vilket jag också har haft lyxen att jobba mycket med.
      </p>
        </div>
      `


    yrken.innerHTML = `
      
    <img src="img/jobs.png" alt="ikon yrken" width="60" aria-hidden="true">
    <h2>YRKEN</h2>

    <div class="textToFadeIn">
      <ul class="yrken">
        <li><img src="img/trippus.jpeg" alt="logga Trippus" width="20" aria-hidden="true"> <strong>Trippus</strong> - <em>Frontend utv</em> - 2023-20XX</li>
        <li><img src="img/livsmedelsverket.jpeg" alt="logga Livsmedelsverket" width="20" aria-hidden="true"> <strong>SLV</strong> - <em>Frontend utv</em> - LIA 2023</li>
        <li><img src="img/friskis.jpeg" alt="logga Friskis" width="20" aria-hidden="true"> <strong>Friskis</strong> - <em>Gyminstruktör</em> - 2017-2023</li>
        <li><img src="img/netonnet.jpeg" alt="logga Netonnet" width="20" aria-hidden="true"> <strong>Netonnet</strong> - <em>Teknisk Service</em> - 2010-2017</li>
        <li><img src="img/securitas.jpeg" alt="logga Securitas" width="20" aria-hidden="true"> <strong>Securitas</strong> - <em>Väktare</em> - 2009-2010</li>
      </ul>
    </div>
      
      `

    akademi.innerHTML = `

    <img src="img/school.png" alt="akademisk bakgrund" width="60" aria-hidden="true">
        <h2>AKADEMISK BAKGRUND</h2>

        <div class="textToFadeIn">
          <ul>
            <li> <strong>Frontend-utvecklare</strong> - <em>Medieinstitutet</em> - 2021-2023</li>
            <li> <strong>Fil.kand Medieteknik</strong> - <em>Södertörns högskola</em> - 2006-2010</li>
            <li> <strong>Datorprogram</strong> - <em>Bolandsskolan Uppsala</em> - 2000-2003</li>
          </ul>
        </div>
    `
    arbetsproverRubrik.innerHTML = "ARBETSPROVER"

    katanaSushi.innerHTML = `

    Katana Sushi - Komplett sida ink bokning och admin, byggd i React & TypeScript.
    <br>
    Live sida till vänster och repo till höger
    `

    flixRus.innerHTML = `

    FlixRus - Komplett webshop ink köp och admin, byggd i Angular & TypeScript.
    <br>
    Live sida till vänster och repo till höger
    `
    Dashboard.innerHTML = `

    Dashboard - Fick chansen samt ansvaret att bygga detta från grunden åt Livsmedelsverket under min LIA hos dem våren 2023. Byggd i React & Framer Motion. Detta ersatte deras tidigare system som var byggt i Blazor. <br> Live sida med dummy data till vänster och repo till höger
    `
    
    braggy.innerHTML = `

    Braggy - Examensarbete ink backend och highscores, byggd i React, JavaScript, NodeJs, LottieFiles & Framer Motion.
    <br>
    Live sida till vänster och repo till höger
    `

  }
});
