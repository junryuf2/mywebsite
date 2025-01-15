document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is ready!");
});

function showSection(sectionId) {
    const allTabButtons = document.querySelectorAll('.tab-button');
    allTabButtons.forEach((button) => {button.classList.remove('active')});

    const allSections = document.querySelectorAll('.tab-content');
    allSections.forEach((section) => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
    selectedSection.style.display = 'block';

    const clickedButton = document.getElementById(sectionId + 'Tab');
    clickedButton.classList.add('active');
}

const translations = {
    en : {
        welcomeMessage: "Hey! Welcome to my website!",
        animationMessage: "Scroll down to see the cranes working hard on this construction site!",
        aboutmeTab: "About Me",
        experienceTab: "Experience",
        educationTab: "Education",
        publicationTab: "Publication"
    },
    ja: {
        welcomeMessage: "こんにちは！私のウェブサイトへようこそ！",
        animationMessage: "下にスクロールすると現場で頑張るクレーンを見ることができます！",
        aboutmeTab: "私について",
        experienceTab: "経験",
        educationTab: "学歴",
        publicationTab: "研究・論文"
    }
};

function switchLanguage(lang) {
    // Get all translatable elements from the translations object
    const elementsToTranslate = translations[lang];
  
    // Loop through each key-value pair in the selected language's translations
    for (const [id, text] of Object.entries(elementsToTranslate)) {
      const element = document.getElementById(id);
      if (element) {
        element.innerText = text; // Update the text content dynamically
      }
    }
  
    // Highlight the selected language button
    if (lang === 'en') {
      document.getElementById('lang-en').classList.add('active');
      document.getElementById('lang-ja').classList.remove('active');
    } else if (lang === 'ja') {
      document.getElementById('lang-ja').classList.add('active');
      document.getElementById('lang-en').classList.remove('active');
    }
  }
  

window.onload = () => {
    switchLanguage('en'); // Default language is English (en)
};