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

// document.querySelector(".email-btn").addEventListener("click",function(){
//     const sectionIndex = this.getAttribute("data-section-index");
//     showSection(this);
//     updateNav(this);
//     removePrev();
//     addPrev(sectionIndex)
// })

// document.querySelector(".contact-me").addEventListener("click",function(){
//     showSection(this);
//     updateNav(this)
// })

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

/*Here is where we will retrieve all the information about the user
and their pre determiend schedule
we will then make a schedule class
with all the user inputted working days


BASIC JQUEARY SYNTAX:

to hide a component with the id='menu'
$("#menu").hide(); 

when a button is clicked with id = 'button'
$("#button").focus();
$("#button").on("click", () => {
    content
}

$("#txtbox").val() gets a txtbox's value
$("#txtbox").text('reee') sets txtbox's text to reee
*/

//way to change schedule
//way to

$("#btn1").on("click", () => {
    $("#pg1").text("new content");
})

function createGoogleCalader(){

}

function createSchedule(){

}

//inputs are either R to remove a slot (set type to null)
//or A to add a slot (change type)
function changeSchedule(){

}

function displayStats(){

}