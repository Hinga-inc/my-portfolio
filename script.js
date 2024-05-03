// Function to open a specific tab
function openTab(tabName) {
    // Hide all tab content
    var sectioncontents = document.getElementsByClassName("section1");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }
    
    // Deactivate all tab links
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and activate its corresponding tab link
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// function to in responsive to screen size
const menu =  document.querySelector('.largeMenu');
const menuOpener = document.querySelector('.smallMenu');

menuOpener.addEventListener('click', () => {
    menuOpener.classList.toggle('active');
    menu.classList.toggle('active');
});