let githubDiv = document.getElementById("githubDiv");


gsap.from(".min-bild", { y: -200, duration: 1, ease: "bounce"});
gsap.from(".h1", { y: -1000, duration: 1.4, delay: 1, ease: "bounce"});

gsap.from(".om-mig", { x: -1000, duration: 1.4, delay: 1.5, ease: "bounce"});
gsap.from(".arbetsprover", { x: 1000, duration: 1.4, delay: 1.5, ease: "bounce"});



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

