"use strict";

async function loadRepositories(userName) {
    const mountPoint = document.getElementById("projects");
    const response = await fetch(`https://api.github.com/users/${userName}/repos`);
    const repos = await response.json();
    const repoElements = repos.map(repo => {
        const repoCard = document.createElement("p");
        repoCard.className = "repository-card"
        repoCard.innerHTML = `<b class="repository-card__title">${repo.name}</b>
<a nonce target="_blank" href="${repo.html_url}">Link</a>
${repo.description}`;
        return repoCard;
    });
    mountPoint.append(...repoElements);
}