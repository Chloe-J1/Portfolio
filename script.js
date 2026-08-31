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
//*******
// Get the card that opens the modal
var card = document.querySelectorAll("div.card");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < card.length; i++) 
{
 card[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(this.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) 
{
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}