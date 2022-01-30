let githubDiv = document.getElementById("githubDiv");
let konamiCode = document.getElementsByClassName("konamiCode");
let secret = document.getElementsByClassName("secret");

////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".min-bild", { duration: 1.3, delay: 0.6, opacity: 0, scale: 0, ease: "expo"});
gsap.from(".h1", {  duration: 1.4, delay: 1.2, opacity: 0, scale: 0, ease: "expo"});
gsap.from(".footer", { duration: 1.3, delay: 1, opacity:0, ease: "expo" });

////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".om-mig", { x: -1000, duration: 1.4, delay: 1.5, opacity: 0,ease: "expo"});

gsap.from(".javascript", { opacity:0, delay: 3, duration:1.3, ease: "sine" });
gsap.from(".html", { opacity:0, delay: 3.2, duration:1.3, ease: "sine" });
gsap.from(".css", { opacity:0, delay: 3.4, duration:1.3, ease: "sine" });
gsap.from(".angular", { opacity:0, delay: 3.6, duration:1.3, ease: "sine" });
gsap.from(".react", { opacity:0, delay: 3.8, duration:1.3, ease: "sine"  });
gsap.from(".typescript", { opacity:0, delay: 4, duration:1.3, ease: "sine" });
gsap.from(".sass", { opacity:0, delay: 4.2, duration:1.3, ease: "sine" });
gsap.from(".gsap", { opacity:0, delay: 4.4, duration:1.3, ease: "sine" });

////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".textToFadeIn", { opacity:0, delay: 4.4, duration:1.3, stagger: 0.4,ease: "sine" });

////////////////////////////////////////////////////////////////////////////////////////////

gsap.from(".arbetsprover", { x: 1000, duration: 1.4, delay: 1.7,ease: "expo"});

gsap.from(".arbetsprov1", { duration: 1, delay: 2, opacity: 0, stagger: 0.4, ease: "expo"});
gsap.from(".arbetsprov2", { duration: 1, delay: 2.2, opacity: 0, stagger: 0.4, ease: "expo"});
gsap.from(".arbetsprov3", { duration: 1, delay: 2.4, opacity: 0,stagger: 0.4, ease: "expo"});
gsap.from(".arbetsprov4", { duration: 1, delay: 2.8, opacity: 0, stagger: 0.4, ease: "expo"});

////////////////////////////////////////////////////////////////////////////////////////////


gsap.from(".email", { y: -10, duration: 1.3, delay: 2, ease: "power2.in", yoyo:true, repeat:-1 });
gsap.from(".linkedin", { y: -10, duration: 1.3, delay: 2.1, ease: "power2.in", yoyo:true, repeat:-1 });
gsap.from(".github", { y: -10, duration: 1.3, delay: 2.2, ease: "power2.in", yoyo:true, repeat:-1 });

////////////////////////////////////////////////////////////////////////////////////////////


// Up, Up, Down, Down, Left, Right, Left, Right, B, A

let konamiCodeCheck = "";

document.addEventListener("keyup", (evt) => {
    konamiCodeCheck += evt.key;

    checkHiddenCode(konamiCodeCheck);
});

function checkHiddenCode(usersinput){

    if (usersinput === "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba") {

        gsap.to(".secret", { y: -1500, duration: 1.5, opacity: 1, ease: "circ", yoyo:true, repeat:3});

        konamiCodeCheck = "";

    };
};

// fetch("https://api.github.com/users/gamershabandari/repos")
// .then(response => response.json())
// .then(githubRepos => {

//     renderGithubDiv(githubRepos);
// });


// function renderGithubDiv (repos){

//     let myRepos = repos;

//     for (let i = 0; i < myRepos.length; i++) {
//         let repo = myRepos[i];

//         console.log(repo.id);
//         console.log(repo.html_url);

//         let repoDiv = document.createElement("div");

//         let repoLink = document.createElement("a");
//         repoLink.innerText = repo.full_name;
//         repoLink.href = repo.html_url;
//         repoLink.target = "_blank";
//         repoLink.className = "repolink"

//         repoDiv.append(repoLink);
//         githubDiv.append(repoDiv);
        
//     };

// };

