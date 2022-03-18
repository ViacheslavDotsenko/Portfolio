

const langArr = {
    "langtitle": {
        "en": "Front-End Web Developer - Portfolio",
        "ua": "Фронт енд розробник - Портфоліо"
    },
    "langebout": {
        "en": "ebout me",
        "ua": "про мене",
    },
    "langcontact": {
        "en": "contact",
        "ua": "контакти",
    },
    "langeducation": {
        "en": "studies",
        "ua": "навчання",
    },
    "langhobbies": {
        "en": "hobbies",
        "ua": "хоббі",
    },
    "langBodTitle": {
        "en": "resume",
        "ua": "резюме",
    },
    "langeducationTitle": {
        "en": "Education",
        "ua": "Освіта",
    },
    "langInterests": {
        "en": "Interests",
        "ua": "Інтереси:",
    },
    "langInterestsText": {
        "en": "Programming, front-end, back-end, car programming, new technologies.",
        "ua": "Програмування, front-end, back-end, автомобільне програмування, нові технології.",
    },
    "langHobbi": {
        "en": "Hobbies",
        "ua": "Захоплення:",
    },
    "langHobbiText": {
        "en": "Sports hobby - weightlifting, for a long time professionally engaged in this sport, I have won the championships of Ukraine. I also act as a mentor for professional athletes.",
        "ua": "Спортивне ззахоплення - важка атлетика, тривалий час професійно займався цим видом спорту маю нагороди чемпіонатів України. Також виступаю в ролі наставника для професійних атлетів.",
    },

    "langName": {
        "en": "Dotsenko Viacheslav",
        "ua": "Доценко Вячеслав",
    },
    "langE-B-MY": {
        "en": "Desire to be part of a friendly and professional team where i could improve my professional skills. I can work with other developers' code. Also I work with HTML5, CSS, JavaScript, React, jQuery, Git.  I have passed Frecodecamp and currently studying at RS School of the EPAM company.",
        "ua": "Маю бажання стати частиною дружньої та професійної команди, де я міг би покращити свої професійні навички. Можу працювати з кодом інших розробників. Також  працюю з такими мовами програмування як: HTML5, CSS, JavaScript, React, jQuery, Git. Пройшов он-лайн курси Frecodecamp і зараз навчаюся в RS School компанії EPAM.",
    },
    "langProjekt": {
        "en": "Project:",
        "ua": "Проекти:",
    },
    "langContact": {
        "en": "Contact me:",
        "ua": "Контакти:",
    },
    "langHB": {
        "en": "Date of birthday: 18.07.1986",
        "ua": "Дата народження: 18.07.1986",
    },
    "langLngSkills": {
        "en": "Language skills",
        "ua": "Володіння мовами:",
    },
    "langEnglish": {
        "en": "English",
        "ua": "Англійська",
    },
    "langUA": {
        "en": "Ukrainian",
        "ua": "Українська",
    },
    "langRU": {
        "en": "Russian",
        "ua": "Російська",
    },
    "langQuality": {
        "en": "Personal quality",
        "ua": "Особисті якості:",
    },
    "langQualityText": {
        "en": "Stress resistance, communication skills, industriousness, perseverance.",
        "ua": "Стресостійкість, комунікабельність, трудолюбивий, усидчивість.",
    },
    "langPostgraduate": {
        "en": "National University of Life and Environmental Sciences of Ukraine, Speciality 'Agricultural Mechanization'. Postgraduate 2009-2013 year",
        "ua": "Національний Університет біоресурсів та природокористування України, спеціальність 'Механізація сільского господарства'. Аспірант 2009-2013 роки.",
    },
    "langMagister": {
        "en": "2008-2009 Magister. Speciality 'Research engineer for agricultural mechanization'",
        "ua": "2008-2009 роки. Магістр. Спеціальність 'Інженер-дослідник з механізації сільського господарства'",
    },
    "langBachelor": {
        "en": "2004-2008 Bachelor. Speciality 'Agricultural Engineer'",
        "ua": "2004-2008 роки. Бакалавр. Спеціальність 'Інженер з механізаії сільського господрства'",
    },

}


const maxImg = document.querySelector('.left-panel img');
const select = document.querySelector("select");
const allLang = ["en", "ua"];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage () {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr["langtitle"][hash];
    document.querySelector('.lng-langebout').innerHTML = langArr['langebout'][hash];
    for (let key in langArr) {
          let elem =  document.querySelector('.lng-'+ key);
         if (elem) {  
            elem.innerHTML = langArr[key][hash];
        }
    }
}
changeLanguage();
//------------animation

let blokh2 = document.querySelector('.ava-text-h2');

    function addShadow () {
 blokh2.classList.add('shadow'); 
 setTimeout(() => blokh2.classList.remove('shadow'), 2000);
};

// let blokcontact = document.querySelector('');
//     function addShadowContact() {
//         blokcontact.classList.add('shadow');
//         setTimeout(() => blokh2.classList.remove('shadow'), 2000);      
//     };

    let blokEducation = document.querySelector('.text-Education');
    function addShadowEducation() {        
       blokEducation.classList.add('shadow');
      setTimeout(() => blokEducation.classList.remove('shadow'), 2000);
     };

     let blokHobbi = document.querySelector('.lng-langHobbi');
     function addShadowHobbi() {
        blokHobbi.classList.add('shadow')
         setTimeout(() => blokHobbi.classList.remove('shadow'), 2000);
     };

    let blokcontactTitle = document.querySelector('.contact-title');    
        function addShadowContact() {
            blokcontactTitle.classList.add('shadow');
            setTimeout(() => blokcontactTitle.classList.remove('shadow'), 2000);
        };
    
        let header_burger = document.querySelector('.header_burger');
        let header_menu = document.querySelector('.header_menu');
        let back = document.querySelector('body');
        let header__list = document.querySelector('.header_list');
        
        header_burger.onclick = function(){
            
            header_burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('lock');
        };
        
        header__list.onclick = function () {
            header__list.classList.remove('active');
            back.classList.toggle('lock');
        }