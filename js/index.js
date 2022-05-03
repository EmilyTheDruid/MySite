var currentActive = "main";
var mainNewTop = "1%";
var linkNewTextSize = "1.5em";
var movedUpOnce = false;
var projectsPage = 0;
var workPage = 0;
var numPPages = projectsContentArr.length-1;
var numWPages = workContentArr.length-1;

let jeremyskalla = document.getElementById("name");
let linkDiv = document.getElementById("link-container");
let secondLinkDiv = document.getElementById('second-link-div');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let work = document.getElementById('workexp');
let art = document.getElementById('art');
let content = document.getElementById('content');
let contentText = document.getElementById('content-text');
let contentHeader = document.getElementById('content-header');
let contentSubHeader = document.getElementById('content-subheader');
let buttons = document.getElementById('bottom-buttons');
let current_section = "";
let jsonData="";
$.getJSON( "https://emilyiverson.net/data.json", function( data ) {
    jsonData=data.data
    console.log(jsonData)
});

function restoreToPrev() {
    content.hidden = true;
    if (currentActive == "about") {
        about.style.color = "#757575";
        about.addEventListener('click', activateAbout); // Readds ability to click
        document.getElementById('about-underline').classList.add("underline");
    }
    else if (currentActive == "projects") {
        projects.style.color = "#757575";
        projects.addEventListener('click', activateProjects); // Readds ability to click
        document.getElementById('projects-underline').classList.add("underline");
    }
    else if (currentActive == "work") {
        work.style.color = "#757575";
        work.addEventListener('click', activateWork); // Readds ability to click
        document.getElementById('work-underline').classList.add("underline");
    }
}

function moveUp(newactive) {
    if (!movedUpOnce) { // Changing page
        setTimeout(function () { content.hidden = false; }, 1000); // Move this to moveUp once content done for all
        movedUpOnce = true;
    }
    else {
        setTimeout(function () { content.hidden = false; }, 100);
    }
    restoreToPrev();
    currentActive = newactive;

    jeremyskalla.style.top = mainNewTop;
    jeremyskalla.style.fontSize = "4em";

    linkDiv.style.top = "7.5%";
    linkDiv.style.fontSize = linkNewTextSize;
    secondLinkDiv.style.margin = "0 5.75%";
}

function pageButtons(pageCount) { // Retrieves buttons for both projects and work
    if (pageCount == 0) {
        return firstButtons; 
    }
    else if (currentActive == "projects" && pageCount == numPPages) {
        return lastButtons; 
    }
    else if (currentActive == "work" && pageCount == numWPages) {
        return lastButtons; 
    }
    else { 
        return middleButtons; 
    }
}

function nextPage() {
    if (currentActive == "projects") {
        projectsPage += 1;
        contentHeader.innerHTML = projectsHeaderArr[projectsPage];
        contentSubHeader.innerHTML = projectsH2Arr[projectsPage];
        contentText.innerHTML = projectsContentArr[projectsPage];
        buttons.innerHTML = pageButtons(projectsPage);
    }
    else if (currentActive == "work") {
        workPage += 1;
        contentHeader.innerHTML = workHeaderArr[workPage];
        contentSubHeader.innerHTML = workH2Arr[workPage];
        contentText.innerHTML = workContentArr[workPage];
        buttons.innerHTML = pageButtons(workPage);
    }
}

function prevPage() {
    if (currentActive == "projects") {
        projectsPage -= 1;
        contentHeader.innerHTML = projectsHeaderArr[projectsPage];
        contentSubHeader.innerHTML = projectsH2Arr[projectsPage];
        contentText.innerHTML = projectsContentArr[projectsPage];
        buttons.innerHTML = pageButtons(projectsPage);
    }
    else if (currentActive == "work") {
        workPage -= 1;
        contentHeader.innerHTML = workHeaderArr[workPage];
        contentSubHeader.innerHTML = workH2Arr[workPage];
        contentText.innerHTML = workContentArr[workPage];
        buttons.innerHTML = pageButtons(workPage);
    }
}

function activateAbout() {
    if(current_section!=""){
        current_section.style.color="#757575";
        current_section="";
    }
    current_section=document.getElementById('about');
    about.style.color = "#ff94d6";
}

function activateProjects() {
    if(current_section!=""){
        current_section.style.color="#757575";
        current_section="";
    }
        
    current_section=document.getElementById('projects');
    projects.style.color = "#ff94d6";

}

function activateWork() {
    if(current_section!=""){
        current_section.style.color="#757575";
        current_section="";
    }
    current_section=document.getElementById('workexp');
    
    work.style.color = "#ff94d6";

}

function activateArt() {
    if(current_section!=""){
        current_section.style.color="#757575";
        current_section="";
    }
    current_section=document.getElementById('art');

    art.style.color = "#ff94d6";
}

function updateContent(get){

}

about.addEventListener('click', activateAbout);
projects.addEventListener('click', activateProjects);
work.addEventListener('click', activateWork);
art.addEventListener('click', activateArt);