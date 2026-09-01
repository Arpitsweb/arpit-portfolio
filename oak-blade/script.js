document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".service, .about-content, .about-image, .booking, .contact"
    );

    elements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach((element) => {
        observer.observe(element);
    });

});