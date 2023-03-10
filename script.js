// Execute JavaScript code after the HTML content has loaded
window.addEventListener("DOMContentLoaded", function() {

    // Select the navigation links
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Add an event listener to each navigation link
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
  
        // Prevent the default link behavior
        event.preventDefault();
  
        // Get the target section ID from the link href attribute
        const targetId = link.getAttribute("href").substring(1);
  
        // Get the target section element by ID
        const targetEl = document.getElementById(targetId);
  
        // Close the mobile navigation menu if open
        const mobileMenu = document.querySelector(".navbar-collapse");
        mobileMenu.classList.remove("show");
  
        // Scroll smoothly to the target section using the scrollIntoView method
        targetEl.scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Select the contact form element
    const contactForm = document.getElementById("contact-form");
  
    // Add an event listener to the form submit button
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Get the form data using the FormData API
      const formData = new FormData(contactForm);
      
      // Log the form data to the console (replace with your own form submission logic)
      console.log(formData);
    });
  
  });
  