
// ===============================
// ARPIT PORTFOLIO - INTERACTIONS
// ===============================

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Scroll Reveal Animation
    // -------------------------------

    const revealElements = document.querySelectorAll(
        ".section-heading, .project, .service, .about-container, .process-item, .contact-container"
    );

    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // -------------------------------
    // Navbar Background on Scroll
    // -------------------------------

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(11, 11, 11, 0.96)";

        } else {

            navbar.style.background = "rgba(11, 11, 11, 0.85)";

        }

    });


    // -------------------------------
    // Smooth Navigation
    // -------------------------------

    const navLinks = document.querySelectorAll(
        '.nav-links a, .nav-button, .hero-buttons a, .primary-button'
    );

    navLinks.forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId &&
                targetId.startsWith("#") &&
                targetId.length > 1
            ) {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // -------------------------------
    // Project Hover Tilt
    // -------------------------------

    const projectImages = document.querySelectorAll(".project-image");

    projectImages.forEach((project) => {

        project.addEventListener("mousemove", (event) => {

            const rect = project.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -2;
            const rotateY = ((x - centerX) / centerX) * 2;

            project.style.transform =
                `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;

        });

        project.addEventListener("mouseleave", () => {

            project.style.transform =
                "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

        });

    });


    // -------------------------------
    // Current Year
    // -------------------------------

    const footerYear = document.querySelector(".footer p:last-child");

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} Arpit. All rights reserved.`;

    }


    // -------------------------------
    // Console Message
    // -------------------------------

    console.log(
        "🚀 Arpit Portfolio loaded successfully."
    );
// ===============================
// CLIENT ENQUIRY → WHATSAPP
// ===============================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const business =
            document.getElementById("business").value.trim();

        const service =
            document.getElementById("service").value;

        const budget =
            document.getElementById("budget").value;

        const message =
            document.getElementById("message").value.trim();


        const phoneNumber = "918960432098"; // Replace with your WhatsApp number


        const whatsappMessage =
`Hi Arpit,

I'd like to discuss a website project.

Name: ${name}
Email: ${email}
Business: ${business || "Not provided"}
Service: ${service}
Budget: ${budget || "Not specified"}

Project details:
${message}

Looking forward to hearing from you.`;


        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}
});
// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            menuToggle.classList.toggle("active");

        navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}
// =========================================
// SCROLL PROGRESS
// =========================================

const scrollProgress =
    document.getElementById("scrollProgress");

if (scrollProgress) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / documentHeight) * 100;

        scrollProgress.style.width =
            `${progress}%`;

    });

}


// =========================================
// CURSOR GLOW
// =========================================

const cursorGlow =
    document.querySelector(".cursor-glow");

if (cursorGlow) {

    window.addEventListener("mousemove", (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}