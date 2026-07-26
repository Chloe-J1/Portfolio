const sections = document.querySelectorAll("section[id].content")

function scrollTracker()
{
    const currentYScroll = window.scrollY;

    sections.forEach((section) =>{
        const sectionHeight  = section.offsetHeight;
        const sectionTop = section.offsetTop - 54;
        const id = section.getAttribute("id");
        const currentNavLink = document.querySelector(`.navBar a[href*="#${id}"]`);
        if(
            currentYScroll > sectionTop &&
            currentYScroll <= sectionTop + sectionHeight
        ){
            currentNavLink.classList.add("active");
        } else
        {
            currentNavLink.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", scrollTracker);