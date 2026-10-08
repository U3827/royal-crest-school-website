/* =========================================================
   ROYAL CREST INTERNATIONAL SCHOOL
   Main JavaScript
   Single-Page Website
   PART 1 OF 2
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    const infoModal =
        document.getElementById("infoModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalEyebrow =
        document.getElementById("modalEyebrow");

    const modalContent =
        document.getElementById("modalContent");

    const modalIcon =
        document.getElementById("modalIcon");

    const siteHeader =
        document.querySelector(".site-header");

    const closeModalButtons =
        document.querySelectorAll(
            "[data-close-modal]"
        );


    /* =====================================================
       INFORMATION CONTENT
       ===================================================== */

    const information = {

        about: {

            eyebrow: "ABOUT ROYAL CREST",

            title: "A School Where Potential Becomes Purpose",

            icon: "fa-school",

            content: `
                <p>
                    Royal Crest International School is built around
                    a simple belief: every learner deserves an
                    environment where knowledge, character and
                    confidence can grow together.
                </p>

                <h3>Our Mission</h3>

                <p>
                    To provide a supportive and challenging learning
                    environment that develops knowledgeable,
                    responsible and confident young people.
                </p>

                <h3>Our Vision</h3>

                <p>
                    To inspire excellence in learning and build
                    leaders who are prepared to contribute positively
                    to their communities and the wider world.
                </p>

                <h3>Our Values</h3>

                <ul>
                    <li>
                        Excellence in learning and personal growth.
                    </li>

                    <li>
                        Respect for every member of the school
                        community.
                    </li>

                    <li>
                        Integrity, responsibility and good character.
                    </li>

                    <li>
                        Creativity, curiosity and continuous
                        improvement.
                    </li>
                </ul>
            `
        },


        academics: {

            eyebrow: "ACADEMIC PROGRAMMES",

            title: "Learning Designed for Every Stage",

            icon: "fa-graduation-cap",

            content: `
                <p>
                    Our academic approach is designed to build strong
                    foundations before progressively developing deeper
                    knowledge, independent thinking and practical
                    skills.
                </p>

                <h3>Early Years</h3>

                <p>
                    A nurturing beginning focused on communication,
                    early numeracy, discovery, creativity and social
                    development.
                </p>

                <h3>Primary School</h3>

                <p>
                    Strong foundations in literacy, mathematics,
                    science and wider learning, supported by
                    communication, creativity and character
                    development.
                </p>

                <h3>Secondary School</h3>

                <p>
                    A more advanced learning environment that
                    encourages critical thinking, subject development,
                    independent study and preparation for future
                    academic pathways.
                </p>

                <h3>Our Learning Approach</h3>

                <ul>
                    <li>
                        Clear academic foundations.
                    </li>

                    <li>
                        Active classroom participation.
                    </li>

                    <li>
                        Communication and presentation skills.
                    </li>

                    <li>
                        Problem-solving and critical thinking.
                    </li>

                    <li>
                        Creativity and practical learning.
                    </li>
                </ul>
            `
        },


        admissions: {

            eyebrow: "ADMISSIONS",

            title: "Admissions Are Currently Closed",

            icon: "fa-file-signature",

            content: `
                <p>
                    Admissions at Royal Crest International School
                    are currently closed.
                </p>

                <p>
                    No new admission application is being accepted
                    through this website at this time.
                </p>

                <h3>When Admissions Reopen</h3>

                <p>
                    Families interested in joining Royal Crest
                    International School are encouraged to contact
                    the school directly for the latest admission
                    information, available classes and requirements.
                </p>

                <h3>Need More Information?</h3>

                <p>
                    You can contact the school using the available
                    phone, WhatsApp or email options.
                </p>
            `
        },


        staff: {

            eyebrow: "OUR PEOPLE",

            title: "Teachers Who Inspire Learning",

            icon: "fa-chalkboard-user",

            content: `
                <p>
                    Great schools are built by people who care about
                    learning and about the development of every child.
                </p>

                <h3>Our Teaching Approach</h3>

                <p>
                    Our teachers are expected to create structured,
                    respectful and engaging classrooms where pupils
                    can ask questions, develop confidence and make
                    meaningful progress.
                </p>

                <h3>Professional Commitment</h3>

                <ul>
                    <li>
                        Child-centred teaching and support.
                    </li>

                    <li>
                        Clear communication with learners and families.
                    </li>

                    <li>
                        Continuous professional development.
                    </li>

                    <li>
                        Positive classroom management.
                    </li>

                    <li>
                        Strong academic and character expectations.
                    </li>
                </ul>

                <p>
                    The goal is not simply to deliver lessons, but to
                    help learners become confident, responsible and
                    curious individuals.
                </p>
            `
        },


        "school-life": {

            eyebrow: "SCHOOL LIFE",

            title: "More Than a Classroom",

            icon: "fa-people-group",

            content: `
                <p>
                    School life at Royal Crest is designed to give
                    learners opportunities to discover interests,
                    build friendships and develop confidence beyond
                    regular classroom lessons.
                </p>

                <h3>Community</h3>

                <p>
                    Learners are encouraged to respect one another,
                    cooperate and contribute positively to the school
                    community.
                </p>

                <h3>Creativity</h3>

                <p>
                    Creative activities provide opportunities for
                    pupils to express ideas, explore talents and
                    develop imagination.
                </p>

                <h3>Leadership</h3>

                <p>
                    Learners are encouraged to develop responsibility,
                    communication skills and the confidence to take
                    positive leadership roles.
                </p>

                <h3>Activities</h3>

                <ul>
                    <li>
                        Creative and artistic activities.
                    </li>

                    <li>
                        Sports and physical activities.
                    </li>

                    <li>
                        Communication and presentation activities.
                    </li>

                    <li>
                        Leadership and teamwork opportunities.
                    </li>

                    <li>
                        Community-focused school activities.
                    </li>
                </ul>
            `
        },


        contact: {

            eyebrow: "CONTACT ROYAL CREST",

            title: "We Would Be Glad to Hear From You",

            icon: "fa-address-book",

            content: `
                <p>
                    For general enquiries, school information or
                    future admission updates, you can contact Royal
                    Crest International School through the channels
                    below.
                </p>

                <div class="modal-contact-list">

                    <div class="modal-contact-item">

                        <i class="fa-solid fa-phone"></i>

                        <span>
                            <strong>Phone</strong>

                            <a href="tel:+2349020213832">
                                +234 902 021 3832
                            </a>
                        </span>

                    </div>


                    <div class="modal-contact-item">

                        <i class="fa-brands fa-whatsapp"></i>

                        <span>
                            <strong>WhatsApp</strong>

                            <a
                                href="https://wa.me/2349020213832"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                +234 902 021 3832
                            </a>
                        </span>

                    </div>


                    <div class="modal-contact-item">

                        <i class="fa-solid fa-envelope"></i>

                        <span>
                            <strong>Email</strong>

                            <a href="mailto:masausman1@gmail.com">
                                masausman1@gmail.com
                            </a>
                        </span>

                    </div>


                    <div class="modal-contact-item">

                        <i class="fa-brands fa-telegram"></i>

                        <span>
                            <strong>Telegram</strong>

                            <a
                                href="https://t.me/usyboy_official"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @usyboy_official
                            </a>
                        </span>

                    </div>


                    <div class="modal-contact-item">

                        <i class="fa-solid fa-location-dot"></i>

                        <span>
                            <strong>Location</strong>

                            Kano, Nigeria
                        </span>

                    </div>

                </div>
            `
        }

    };


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mainNav.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                menuToggle.innerHTML =
                    isOpen
                        ? '<i class="fa-solid fa-xmark"></i>'
                        : '<i class="fa-solid fa-bars"></i>';

            }
        );


        const navItems =
            mainNav.querySelectorAll(
                "a, button"
            );


        navItems.forEach((item) => {

            item.addEventListener(
                "click",
                () => {

                    mainNav.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';

                }
            );

        });

    }


    /* =====================================================
       OPEN INFORMATION MODAL
       ===================================================== */

    const infoButtons =
        document.querySelectorAll(
            "[data-info]"
        );


    function openModal(type) {

        if (
            !infoModal ||
            !information[type]
        ) {
            return;
        }


        const data =
            information[type];


        if (modalEyebrow) {

            modalEyebrow.textContent =
                data.eyebrow;

        }


        if (modalTitle) {

            modalTitle.textContent =
                data.title;

        }


        if (modalContent) {

            modalContent.innerHTML =
                data.content;

        }


        if (modalIcon) {

            modalIcon.className =
                "fa-solid " + data.icon;

        }


        infoModal.classList.add("active");

        infoModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );


        if (modalClose) {

            setTimeout(() => {

                modalClose.focus();

            }, 100);

        }

    }


    infoButtons.forEach((button) => {

        button.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                const type =
                    button.getAttribute(
                        "data-info"
                    );

                openModal(type);

            }
        );

    });


    /* =====================================================
       CLOSE INFORMATION MODAL
       ===================================================== */

    function closeModal() {

        if (!infoModal) {
            return;
        }


        infoModal.classList.remove("active");

        infoModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    closeModalButtons.forEach((button) => {

        button.addEventListener(
            "click",
            closeModal
        );

    });


    /* =====================================================
       CLOSE MODAL BY OVERLAY
       ===================================================== */

    if (infoModal) {

        const modalOverlay =
            infoModal.querySelector(
                ".modal-overlay"
            );


        if (modalOverlay) {

            modalOverlay.addEventListener(
                "click",
                closeModal
            );

        }

    }


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }


            if (
                infoModal &&
                infoModal.classList.contains("active")
            ) {

                closeModal();

            }


            if (
                mainNav &&
                mainNav.classList.contains("open")
            ) {

                mainNav.classList.remove("open");


                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';

                }

            }

        }
    );
/* =========================================================
   ROYAL CREST INTERNATIONAL SCHOOL
   Main JavaScript
   Single-Page Website
   PART 2 OF 2
   ========================================================= */


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    function updateHeader() {

        if (!siteHeader) {
            return;
        }


        if (window.scrollY > 20) {

            siteHeader.classList.add(
                "scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "scrolled"
            );

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    /* =====================================================
       SMOOTH ANCHOR LINKS
       ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElement =
        document.getElementById(
            "currentYear"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       ACCESSIBILITY
       ===================================================== */

    if (menuToggle) {

        if (
            !menuToggle.hasAttribute(
                "aria-expanded"
            )
        ) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    /* =====================================================
       EXTERNAL LINKS
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="http"]'
        )
        .forEach((link) => {

            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href &&
                !href.includes(
                    window.location.hostname
                )
            ) {

                link.setAttribute(
                    "target",
                    "_blank"
                );


                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );

            }

        });


    /* =====================================================
       EMPTY ANCHOR PROTECTION
       ===================================================== */

    document
        .querySelectorAll(
            'a[href="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                }
            );

        });


    /* =====================================================
       PAGE READY
       ===================================================== */

    document.body.classList.add(
        "page-ready"
    );


    /* =====================================================
       FINAL CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "Royal Crest International School"
    );

    console.log(
        "Inspiring Excellence. Building Leaders."
    );


});