```javascript
// Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Thank you! The contact form will be connected to a backend later.");

            contactForm.reset();

        });

    }

});
```
