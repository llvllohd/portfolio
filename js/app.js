// console.log("hello im here..");

// portfolio item filter

window.addEventListener('load', function (e) {
    document.querySelector('.preloader').classList.add('opacity-0');
    this.setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
})

const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children,
    totalFilterBtns = filterBtns.length;
portfolioItems = document.querySelectorAll('.portfolio-item');
totalPortfolioItems = portfolioItems.length;
// console.log(totalPortfolioItems);

for (let i = 0; i < totalFilterBtns; i++) {
    filterBtns[i].addEventListener('click', function (e) {
        // console.log(e.target.innerHTML);
        // console.log(this.innerHTML);
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add("active");

        const filterValue = this.getAttribute('data-filter');
        // console.log(filterValue);
        for (let k = 0; k < totalPortfolioItems; k++) {
            if (filterValue === portfolioItems[k].getAttribute('data-category')) {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            } else {
                portfolioItems[k].classList.remove('show');
                portfolioItems[k].classList.add('hide');
            }
            if (filterValue === 'all') {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            }
        }

    });

}

// portfolio lightbox

const lightbox = document.querySelector('.lightbox'),
    lightboxClose = lightbox.querySelector('.lightbox-close .far'),
    lightboxImg = lightbox.querySelector('.lightbox-img'),
    lightboxText = lightbox.querySelector('.caption-text'),
    lightboxCounter = lightbox.querySelector('.caption-counter');
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItems; i++) {
    portfolioItems[i].addEventListener('click', (e) => {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    });
}

function nextItem() {
    if (itemIndex === totalPortfolioItems - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    // console.log(itemIndex);
    changeItem();
}
function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItems - 1;
    } else {
        itemIndex--;
    }
    // console.log(itemIndex);
    changeItem();
}

function toggleLightbox() {
    lightbox.classList.toggle('open');
}

function changeItem() {
    let imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
    // console.log(imgSrc);
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
    lightboxCounter.innerHTML = `${itemIndex + 1} of ${totalPortfolioItems}`;
}

// close lightbox
lightbox.addEventListener('click', function (e) {
    if (e.target === lightboxClose || e.target === lightbox) {
        toggleLightbox();
    }
    // console.log(e.target)
});


// Toggle switcher
document.querySelector('.toggle-style-switcher').addEventListener('click', function (e) {
    // console.log('hi')
    document.querySelector('.style-switcher').classList.toggle('open');
});


// style changer
let root = document.documentElement;
function setActiveStyle(color) {
    if (color === 'pink') {
        root.style.setProperty('--pink', '#ec1839');
    } else if (color === 'blue') {
        root.style.setProperty('--pink', '#2196F3');
    } else if (color === 'orange') {
        root.style.setProperty('--pink', '#fa5b0f');
    } else if (color === 'yellow') {
        root.style.setProperty('--pink', '#ffb400');
    } else if (color === 'green') {
        root.style.setProperty('--pink', '#72b626');
    }
};


// Skin changer
// let root = document.documentElement;
const bodySkin = document.querySelectorAll('.body-skin');
for (i = 0; i < bodySkin.length; i++) {
    bodySkin[i].addEventListener('change', function (e) {
        if (this.value === "dark") {
            root.style.setProperty('--background-dark-bl', '#151515');
            root.style.setProperty('--background-light-bl', '#222222');
            root.style.setProperty('--heading-bl', '#ffffff');
            root.style.setProperty('--text-bl', '#e9e9e9');
            root.style.setProperty('--border-dark-bl', '#393939');
        } else {
            root.style.setProperty('--background-dark-bl', '#f2f2fc');
            root.style.setProperty('--background-light-bl', '#fdf9ff');
            root.style.setProperty('--heading-bl', '#302e4d');
            root.style.setProperty('--text-bl', '#504e70');
            root.style.setProperty('--border-dark-bl', '#d4d4e3');
            root.style.setProperty('--border-light-bl', '#e8dfec');
        }
    });
}


//  /* body light */
//  --background-dark-bl: #f2f2fc;
//  --background-light-bl: #fdf9ff;
//  --heading-bl: #302e4d;
//  --text-bl: #504e70;
//  --border-dark-bl: #d4d4e3;
//  --border-light-bl: #e8dfec;

//  /* body dark */
//  --background-dark-bd: #151515;
//  --background-light-bd: #222222;
//  --heading-bd: #ffffff;
//  --text-bd: #e9e9e9;
//  --border-bd: #393939;


// Nav changer

const nav = document.querySelector('.nav'),
    navlist = nav.querySelectorAll('a'),
    totalNavList = navlist.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    navlist[i].addEventListener('click', function (e) {
        //Removing backsection
        removeBackSectionClass();

        //Adding backsection if it is active
        for (let j = 0; j < totalNavList; j++) {
            // console.log(navlist[j])
            if (navlist[j].classList.contains('active')) {
                addBackSectionClass(j);
            }
            navlist[j].classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }

    });
}

function removeBackSectionClass() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}

function addBackSectionClass(num) {
    allSection[num].classList.add('back-section');
}


function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}

function NavUpdate(element) {
    for (let i = 0; i < totalNavList; i++) {
        navlist[i].classList.remove('active');
        // console.log(navlist[i])
        const target = element.getAttribute('href').split('#')[1];
        if (target === navlist[i].getAttribute('href').split('#')[1]) {
            navlist[i].classList.add('active');
        }
    }
}

// Hire Me button
document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index');
    console.log(sectionIndex)
    showSection(this);
    NavUpdate(this)
    removeBackSectionClass()
    addBackSectionClass(sectionIndex)
});

// Nav toggler

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', function (e) {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}