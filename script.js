const works = {
    "task1": { "title": "Project 1", "url": "task1.html" },
    "task2": { "title": "Project 2", "url": "task2.html" },
    "task3": { "title": "Project 3", "url": "task3.html" }
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
