let githubDiv = document.getElementById("githubDiv");
let konamiCode = document.getElementsByClassName("konamiCode");
let secret = document.getElementsByClassName("secret");
let languageBtn = document.getElementById("languageBtn")
let kortOmMig = document.getElementById("kortOmMig");
let yrken = document.getElementById("yrken");
let akademi = document.getElementById("akademi");
let arbetsproverRubrik = document.getElementById("arbetsproverRubrik");

let setLanguageToEnglish = false;

////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".min-bild", { duration: 1.3, delay: 0.6, opacity: 0, scale: 0, ease: "expo" });
gsap.from(".h1", { duration: 1.4, delay: 1.2, opacity: 0, scale: 0, ease: "expo" });
gsap.from(".footer", { duration: 1.3, delay: 1, opacity: 0, ease: "expo" });
gsap.from("#languageBtn", { duration: 1.3, delay: 0.2, scale: 0, opacity: 0, ease: "expo" });



////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".om-mig", { x: -1000, duration: 1.4, delay: 1.5, opacity: 0, ease: "expo" });

gsap.from(".javascript", { opacity: 0, delay: 3, duration: 1.3, ease: "sine" });
gsap.from(".html", { opacity: 0, delay: 3.2, duration: 1.3, ease: "sine" });
gsap.from(".css", { opacity: 0, delay: 3.4, duration: 1.3, ease: "sine" });
gsap.from(".angular", { opacity: 0, delay: 3.6, duration: 1.3, ease: "sine" });
gsap.from(".react", { opacity: 0, delay: 3.8, duration: 1.3, ease: "sine" });
gsap.from(".typescript", { opacity: 0, delay: 4, duration: 1.3, ease: "sine" });
gsap.from(".sass", { opacity: 0, delay: 4.2, duration: 1.3, ease: "sine" });
gsap.from(".gsap", { opacity: 0, delay: 4.4, duration: 1.3, ease: "sine" });
gsap.from(".node", { opacity: 0, delay: 4.6, duration: 1.3, ease: "sine" });
gsap.from(".mongoDb", { opacity: 0, delay: 4.8, duration: 1.3, ease: "sine" });


////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".textToFadeIn", { opacity: 0, delay: 4.4, duration: 1.3, stagger: 0.4, ease: "sine" });

////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".arbetsprover", { x: 1000, duration: 1.4, delay: 1.7, ease: "expo" });
gsap.from(".arbetsprov", { duration: 1, delay: 1.8, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov1", { duration: 1, delay: 2, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov2", { duration: 1, delay: 2.2, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov3", { duration: 1, delay: 2.4, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".arbetsprov4", { duration: 1, delay: 2.8, opacity: 0, stagger: 0.4, ease: "expo" });
gsap.from(".tools", { duration: 1.4, delay: 4.8, opacity: 0, stagger: 0.2, ease: "expo" });


////////////////////////////////////////////////////////////////////////////////////////////


gsap.from(".email", { y: -10, duration: 1.3, delay: 2, ease: "power2.in", yoyo: true, repeat: -1 });
gsap.from(".linkedin", { y: -10, duration: 1.3, delay: 2.1, ease: "power2.in", yoyo: true, repeat: -1 });
gsap.from(".github", { y: -10, duration: 1.3, delay: 2.2, ease: "power2.in", yoyo: true, repeat: -1 });

////////////////////////////////////////////////////////////////////////////////////////////


// Up, Up, Down, Down, Left, Right, Left, Right, B, A

let konamiCodeCheck = "";

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

    languageBtn.style.backgroundColor = "whitesmoke"
    languageBtn.style.color = "palevioletred"


    kortOmMig.innerHTML = `<img src="img/me.png" alt="icon about me" width="60" aria-hidden="true">

        <h2>ABOUT ME</h2>

        <div class="textToFadeIn">
          <p>I am a licenced gym instructor who has a degree in Medieteknik aswell as Frontend development. My
          biggest interests are technology and design which is exactly what I get to work with as a frontend developer.
          Other interests include training and football witch I have had the luxury of working with a lot over the course of my professional life.</p>

          <p>I have many years of experiance in sales, technical service and support. These are professions that require close work with people whom you must learn to understand in order to help solve their problems, whether they are technical in nature or health related.

        </p>

        <p>
        I am a happy and pragmatic person who likes a challenge and to constantly keep learning in life. I speak Swedish, English and Armenian fluently.
        </p>
      </article>`

    yrken.innerHTML = `
      
      <img src="img/jobs.png" alt="icon jobs" width="60" aria-hidden="true">
        <h2>WORK EXPERIENCE</h2>

        <div class="textToFadeIn">
          <ul>
            <li> <strong>Friskis & Svettis Uppsala</strong> - <em>Gyminstructor</em> - 2017-202X</li>
            <li> <strong>Netonnet Uppsala</strong> - <em>Technical Service</em> - 2010-2017</li>
            <li> <strong>Securitas Stockholm</strong> - <em>Security Officer</em> - 2009-2010</li>
          </ul>
        </div>
      
      `

    akademi.innerHTML = `

    <img src="img/school.png" alt="academic background" width="60" aria-hidden="true">
        <h2>ACADEMIC BACKGROUND</h2>

        <div class="textToFadeIn">
          <ul>
            <li> <strong>Frontend developer</strong> - <em>Medieinstitutet</em> - 2021-2023</li>
            <li> <strong>Bachelors degree in Medieteknik</strong> - <em>S??dert??rns h??gskola</em> - 2006-2010</li>
            <li> <strong>Specialutformat Datorprogram</strong> - <em>Bolandsskolan Uppsala</em> - 2000-2003</li>
          </ul>
        </div>
    `

    arbetsproverRubrik.innerHTML = "PROJECTS"


  } else {

    languageBtn.style.backgroundColor = "palevioletred"
    languageBtn.style.color = "whitesmoke"

    kortOmMig.innerHTML = `<img src="img/me.png" alt="ikon om mig" width="60" aria-hidden="true">

        <h2>KORT OM MIG</h2>

        <div class="textToFadeIn">
          <p>Jag ??r en licensierad gyminstrukt??r som ??ven ??r utbildad inom Medieteknik samt Frontend-utveckling. Mina
            stora intressen ??r teknik och design vilket jag f??r jobba med som frontend utvecklare, mina andra stora
            intressen ??r
            fotboll och tr??ning vilket jag ocks?? har haft lyxen att jobba mycket med.</p>

          <p>Jag har l??ng erfarenhet utav s??lj, teknisk service och support. Yrken d??r man jobbar med m??nniskor och ska
            f??rst?? samt hj??lpa kunden att l??sa sina problem vare sig det g??ller tekniska produkter eller deras h??lsa.
          </p>

          <p>Som person ??r jag glad och l??sningsorienterad, jag gillar utmaningar och att st??ndigt l??ra mig nya saker.
            Talar svenska, engelska och armeniska flytande.</p>
        </div>
      </article>`


    yrken.innerHTML = `
      
      <img src="img/jobs.png" alt="ikon yrken" width="60" aria-hidden="true">
        <h2>YRKEN</h2>

        <div class="textToFadeIn">
          <ul>
            <li> <strong>Friskis & Svettis Uppsala</strong> - <em>Gyminstrukt??r</em> - 2017-202X</li>
            <li> <strong>Netonnet Uppsala</strong> - <em>Teknisk Service</em> - 2010-2017</li>
            <li> <strong>Securitas Stockholm</strong> - <em>Ronderande v??ktare</em> - 2009-2010</li>
          </ul>
        </div>
      
      `

    akademi.innerHTML = `

    <img src="img/school.png" alt="akademisk bakgrund" width="60" aria-hidden="true">
        <h2>AKADEMISK BAKGRUND</h2>

        <div class="textToFadeIn">
          <ul>
            <li> <strong>Frontend-utvecklare</strong> - <em>Medieinstitutet</em> - 2021-2023</li>
            <li> <strong>Filosofie kandidat Medieteknik</strong> - <em>S??dert??rns h??gskola</em> - 2006-2010</li>
            <li> <strong>Specialutformat Datorprogram</strong> - <em>Bolandsskolan Uppsala</em> - 2000-2003</li>
          </ul>
        </div>
    `
    arbetsproverRubrik.innerHTML = "ARBETSPROVER"

  }
});
