document.addEventListener('DOMContentLoaded', function () {
    //A hamburger menü 
   const menuToggle = document.getElementById('menu-toggle');
   const navLinksContainer = document.getElementById('nav-links');
   const navLinks = document.querySelectorAll('.nav-links li a');

   //Hamburger menü nyitása
   menuToggle.addEventListener('click', function() {
    navLinksContainer.classList.toggle('active');
   });

   /* Autómatikus menűpont kiemelés az url alapján */
   const currentPage = window.location.pathname.split("/").pop() || "index.html";
   navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage) {
        link.classList.add("active-link");
        console.log("Current page:", currentPage);
    }
   });


   //Aktív link kiemelése, kattintásra
        navLinks.forEach(link => {
        link.addEventListener('click', function() {
            /* Ha egy másik oldalra navigál */
           if (this.getAttribute("href") === "#") {
            navLinks.forEach(el => el.classList.remove("active-link"));
    //Csak egyre tesszük
        this.classList.add('active-link');        
           }

            
            });
        });
   });