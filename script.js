let githubDiv = document.getElementById("githubDiv");

fetch("https://api.github.com/users/gamershabandari/repos")
.then(response => response.json())
.then(githubRepos => {

    renderGithubDiv(githubRepos);
});


function renderGithubDiv (repos){

    let myRepos = repos;
    console.log(myRepos);
    
    console.log(myRepos[0].id);

    for (let i = 0; i < myRepos.length; i++) {
        let repo = myRepos[i];

        console.log(repo.id);
        console.log(repo.html_url);

        let repoDiv = document.createElement("div");

        let repoLink = document.createElement("a");
        repoLink.innerText = repo.full_name;
        repoLink.href = repo.html_url;
        repoLink.target = "_blank";
        repoLink.className = "repolink"

        repoDiv.append(repoLink);
        githubDiv.append(repoDiv);
        
    };

};

