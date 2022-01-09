let githubDiv = document.getElementById("githubDiv");
let konamiCode = document.getElementsByClassName("konamiCode");

gsap.from(".min-bild", { y: -200, duration: 1, ease: "bounce"});
gsap.from(".h1", { y: -1000, duration: 1.4, delay: 1, ease: "bounce"});

gsap.from(".om-mig", { x: -1000, duration: 1.4, delay: 1.5, ease: "bounce"});
gsap.from(".arbetsprover", { x: 1000, duration: 1.4, delay: 1.5, ease: "bounce"});

gsap.from(".javascript", { y: -10, duration: 1, ease: "power2.in", yoyo:true, repeat:-1 });
gsap.from(".html", { y: -10, duration: 1, delay: 0.2, ease: "power2.in", yoyo:true, repeat:-1 });
gsap.from(".css", { y: -10, duration: 1, delay: 0.3, ease: "power2.in", yoyo:true, repeat:-1 });


// Up, Up, Down, Down, Left, Right, Left, Right, B, A

let konamiCodeCheck = "";

document.addEventListener("keyup", (evt) => {
    konamiCodeCheck += evt.key;

    checkHiddenCode(konamiCodeCheck);
});

function checkHiddenCode(usersinput){

    if (usersinput === "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba") {

        gsap.to(".konamiCode", { y: -1000, duration: 1.5, color: "white", scale: 4, ease: "circ"});
        gsap.to(".konamiCode", { rotation: 720, duration: 1.5, ease: "circ"});
        gsap.to(".konamiCode", { y: -10000, duration: 1, delay: 5 ,ease: "power2.in"});

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

