function showSection(sectionId) {
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId + 'Tab').classList.add('active');
}

const translations = {
    en: {
        welcomeMessage: "Hey! Welcome to Junryu's website!",
        scrollHintMessage: "scroll down to see them work!",
        aboutmeTab: "About Me",
        experienceTab: "Experience",
        educationTab: "Education",
        publicationTab: "Publication"
    },
    ja: {
        welcomeMessage: "こんにちは！Junryuのウェブサイトへようこそ！",
        scrollHintMessage: "下にスクロールして見てみよう！",
        aboutmeTab: "私について",
        experienceTab: "経験",
        educationTab: "学歴",
        publicationTab: "研究・論文"
    }
};

function switchLanguage(lang) {
    for (const [id, text] of Object.entries(translations[lang])) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.dataset[lang];
    });
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-ja').classList.toggle('active', lang === 'ja');
}

document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
});
