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

// Redirect to project page
function openPage(url)
{
    window.location.href = url;
}

// MODAL
//********
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}