 const projectsButton = document.querySelector("#projectsButton");

projectsButton.addEventListener("click", function() {

    const projectsSection = document.querySelector("#projects");

    projectsSection.scrollIntoView({
        behavior: "smooth"
    });

});