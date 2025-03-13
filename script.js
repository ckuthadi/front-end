const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" }
};

document.addEventListener("DOMContentLoaded", () => {
    const navPanel = document.getElementById("navPanel");
    const contentFrame = document.getElementById("content");

    // Create navigation links
    for (let key in works) {
        let link = document.createElement("a");
        link.href = "#";
        link.textContent = works[key].title;
        link.onclick = (e) => {
            e.preventDefault();
            contentFrame.src = works[key].url;
        };
        navPanel.appendChild(link);
    }
});