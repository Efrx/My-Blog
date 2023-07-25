const navButton = document.querySelector('.nav-button')
// const mobileMenu = document.querySelector('.nav--menu-mobile')
const projectList = document.getElementById('projectsContainer')
const headerNav = document.querySelector('.header')
// const trailElement = document.querySelector(".trail")
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const projects = [
    {
        imageUrl: "assets/img/projects-ss/Interior-project-ss.png",
        title: "Interior consultain",
        descriptionShort: "Descripción breve del Proyecto 1",
        descriptionLong: "Descripción extendida del Proyecto 1",
        category: "Categoría 1",
        technologies: ["Tecnología 1", "Tecnología 2", "Tecnología 3"]
    },
    {
        imageUrl: "assets/img/projects-ss/Batatabit-project-ss.png",
        title: "Batatabit",
        descriptionShort: "Descripción breve del Proyecto 2",
        descriptionLong: "Descripción extendida del Proyecto 2",
        category: "Categoría 2",
        technologies: ["Tecnología 1", "Tecnología 4", "Tecnología 5"]
    },
    {
        // /home/efrain/personalProjects/My_Blog/public/
        imageUrl: "assets/img/projects-ss/Recipe-project-ss.png",
        title: "Recipe",
        descriptionShort: "Descripción breve del Proyecto 2",
        descriptionLong: "Descripción extendida del Proyecto 2",
        category: "Categoría 2",
        technologies: ["Tecnología 1", "Tecnología 4", "Tecnología 5"]
    },
    {
        // /home/efrain/personalProjects/My_Blog/public/
        imageUrl: "assets/img/projects-ss/MyTeam-project-ss.png",
        title: "My team",
        descriptionShort: "Descripción breve del Proyecto 2",
        descriptionLong: "Descripción extendida del Proyecto 2",
        category: "Categoría 2",
        technologies: ["Tecnología 1", "Tecnología 4", "Tecnología 5"]
    },
    {
        // /home/efrain/personalProjects/My_Blog/public/
        imageUrl: "assets/img/projects-ss/Edie-project-ss.png",
        title: "Edie hompage",
        descriptionShort: "Descripción breve del Proyecto 2",
        descriptionLong: "Descripción extendida del Proyecto 2",
        category: "Categoría 2",
        technologies: ["Tecnología 1", "Tecnología 4", "Tecnología 5"]
    }
]
let previous = getScrollTop()
navButton.addEventListener('click', (e) => {
    e.preventDefault()
    let prefix =  e.target.classList[0]
    activeStattus(prefix,e.target)
    
})

document.addEventListener('DOMContentLoaded', () => {
    printProjects();
    
    // this detects howmany px the scroll has been moved
    window.addEventListener('scroll', () => {
        const scrollTop = getScrollTop()
        // console.log("actual: ",scrollTop," prev: ",previous)
        if (scrollTop > previous) {
            // scroll down | header disapear
            headerNav.style.transform = 'translateY(-100%)';
        }
        if (scrollTop < previous) {   
            // scroll up | header apear
            headerNav.style.transform = 'translateY(0%)';
            headerNav.style.boxShadow = '#020c1b 0px 0px 15px -10px';
        }
        if (scrollTop === 0) { 
            // scroll back to initials | header apear
            headerNav.style.boxShadow = 'none';
        }
        previous = scrollTop;
    });

})

function showMobileMenu() {

}

// this fn return the dom's current position in px 
function getScrollTop() {
    return document.documentElement.scrollTop;
}

// aqui se le activa una clase 'active' al elemento target...
const activeStattus = (prefix, target) => {
    // si no solo activa o desactiva...
    let active = '-active'
    prefix = prefix + active
    target.classList.toggle(prefix)
}

const printProjects = () => {
    projects.forEach(project => {
        // console.log(project)
        const clone = templateCard.cloneNode(true)
        clone.querySelector('.project-img').src = project.imageUrl
        clone.querySelector('.project-title').textContent = project.title
        clone.querySelector('.project-description').textContent = project.descriptionShort

        fragment.appendChild(clone)
    });
    projectList.appendChild(fragment)
}

// printProjects()

// const printProjects = () => {
//     projectList.innerHTML = ''

//     projects.forEach(project => {
//         console.log(project)
//     })
// }

// button-scroll
// e.stopPropagation();
// console.log('');

// optimizar el navbar (esteticamente y ux)