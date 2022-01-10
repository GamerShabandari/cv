let githubDiv = document.getElementById("githubDiv");
let konamiCode = document.getElementsByClassName("konamiCode");
let secret = document.getElementsByClassName("secret");

gsap.from(".min-bild", { y: -200, duration: 1.3, ease: "elastic"});
gsap.from(".h1", { y: -1000, duration: 1.4, delay: 1, ease: "elastic"});

gsap.from(".om-mig", { x: -1000, duration: 1.4, delay: 1.5, ease: "power2.in"});
gsap.from(".arbetsprover", { x: 1000, duration: 1.4, delay: 1.5, ease: "power2.in"});

gsap.from(".javascript", { y: -10, duration: 1, ease: "power2.in", yoyo:true, repeat:-1 });
gsap.from(".html", { y: -10, duration: 1, delay: 0.2, ease: "power2.in", yoyo:true, repeat:-1 });
gsap.from(".css", { y: -10, duration: 1, delay: 0.3, ease: "power2.in", yoyo:true, repeat:-1 });


gsap.from(".email", { y: -10, duration: 1.3, delay: 2, ease: "power2.in", yoyo:true, repeat:-1 });
gsap.from(".linkedin", { y: -10, duration: 1.3, delay: 2.1, ease: "power2.in", yoyo:true, repeat:-1 });
gsap.from(".github", { y: -10, duration: 1.3, delay: 2.2, ease: "power2.in", yoyo:true, repeat:-1 });


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

