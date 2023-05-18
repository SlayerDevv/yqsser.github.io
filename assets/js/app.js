function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
const buttons = document.querySelectorAll('.pricing-buttons');
buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        buttons.forEach(otherButton=>{
            otherButton.classList.remove('active');
        }
        );
        button.classList.add('active');
    }
    );
}
);
window.addEventListener("scroll", reveal);
const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}
items.forEach(item=>item.addEventListener('click', toggleAccordion));
function showSection(sectionId) {
    var sections = document.querySelectorAll('.pricing section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}
