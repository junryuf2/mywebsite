document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is ready!");
});

function showSection(sectionId) {
    const allSections = document.querySelectorAll('.tab-content');
    allSections.forEach((section) => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
    selectedSection.style.display = 'block';
}