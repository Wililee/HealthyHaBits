window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    } ,1000)
})

//  Navigation Controls
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        removePrev();
        for(let j = 0; j < totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addPrev(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200){
            asideToggle();
        }
    })
}

function showSection(element){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("active");
    }
    target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

function removePrev(){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("prev-section");
    }
}

function addPrev(n){
    allSection[n].classList.add("prev-section");
}

document.querySelector(".email-btn").addEventListener("click",function(){
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removePrev();
    addPrev(sectionIndex)
})

document.querySelector(".contact-me").addEventListener("click",function(){
    showSection(this);
    updateNav(this)
})

const navToggleBtn = document.querySelector(".nav-toggle"),
      aside = document.querySelector(".aside");

navToggleBtn.addEventListener("click", asideToggle);

function asideToggle(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}