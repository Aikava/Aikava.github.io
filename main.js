"use strict";

const loadPosts = async () => {
    const response = await fetch("/posts/index.json");

    if (response.ok)
	return response.json();
    else throw response;
};

const landingApp = () => {
    const landingContent = document.querySelector("#site-articles");
    const landingHeader = document.querySelector("#site-header");
    const landingFooter = document.querySelector("#site-footer");

    loadPosts().then(console.log);
};

const finalErrorHandler = error => {
    console.log("Error", error);
};

try {
    landingApp();
} catch (error) {
    finalErrorHandler(error);
}
