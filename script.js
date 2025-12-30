document.addEventListener('DOMContentLoaded', (event) => {
    // --- Config of TSPARTICLES ---
    tsParticles.load("particles-js", {
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse", // Point move away from the pointer
                },
                onClick: {
                    enable: true,
                    mode: "push", // Add new point at click
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3, // Opacity line
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1, // Speed of the point
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 600,
                },
                value: 80, // Number of the point
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    });

    // Panel content
    const nodeContent = {
        'chi-sono': `
            <h2>About Me</h2>
            <p>
                I am a Cybersecurity student at Sapienza University of Rome, with a deep passion for this field. 
                I am an extremely curious person, I love learning new things and constantly challenging myself.
            </p>
            <p>
                Another great interest of mine is traveling. I was fortunate enough to have an Erasmus experience in Tallinn!
            </p>
            <br>
            <h2>Why Cybersecurity?</h2>
            <p>
                I enjoy breaking down complex systems, understanding how they fail 
                and learning how to secure them. I am particularly interested in offensive security
                and security assessments in real-world environments.
            </p>

        `,
        'competenze': `
            <h2>Technical Skills</h2>

            <h4>Offensive Security</h4>
            <ul>
                <li>Web Application Penetration Testing (OWASP Top 10)</li>
                <li>Network scanning, enumeration and service discovery</li>
                <li>Linux privilege escalation in lab environments</li>
                <li>Basic Active Directory attacks (lab-based)</li>
                <li>Capture The Flag (CTF) challenges and real-world inspired labs</li>
            </ul>

            <h4>Security Tools</h4>
            <ul>
                <li><strong>Nmap</strong> – network discovery and service enumeration</li>
                <li><strong>Burp Suite</strong> – web application testing and interception</li>
                <li><strong>Metasploit</strong> – exploitation framework and post-exploitation</li>
                <li><strong>Wireshark</strong> – network traffic analysis</li>
            </ul>

            <h4>Systems & Networking</h4>
            <ul>
                <li>Linux (daily use)</li>
                <li>Windows</li>
                <li>Networking fundamentals (TCP/IP, firewalls, routing)</li>
                <li>Virtualized environments using Proxmox and Docker</li>
            </ul>

            <h4>Scripting & Programming</h4>
            <ul>
                <li>Python – scripting and basic automation</li>
                <li>Bash – system automation and scripting</li>
                <li>Basic knowledge of C/C++, Java, JavaScript, PHP and SQL</li>
            </ul>

        `,
        'progetti': `
            <h2>Key Projects</h2>
            <div class="project-item">
                <h3>CTF Creation & Exploitation</h3>
                <p>Designed and deployed a vulnerable Linux machine for Capture The Flag (CTF) challenges,
                    simulating real-world misconfigurations and common security vulnerabilities.
                    The project covered the full attack lifecycle, from initial reconnaissance and service
                    enumeration to exploitation and Linux privilege escalation.</p>
                <p>The environment was built and tested in a controlled lab setting, with detailed
                    technical documentation produced to describe vulnerabilities, exploitation techniques
                    and mitigation strategies.</p>
            </div>
            <div class="project-item">
                <h3>Secure Network Infrastructure Design</h3>
                <p>Designed and implemented a segmented virtual network infrastructure to simulate
                    a secure corporate environment. The architecture included multiple network zones,
                    firewall rules, access control policies and a demilitarized zone (DMZ).</p>
                <p>The project focused on understanding network security principles such as traffic
                    filtering, segmentation, and least privilege, using virtualized environments to
                    analyze potential attack paths and misconfigurations.</p>
                <p>The infrastructure was deployed using Proxmox and OPNsense, allowing hands-on
                    experience with firewall configuration, network monitoring and security hardening.</p>
            </div>

            <div class="project-item">
                <h3>Event Manager Software Design</h3>
                <p>Designed the complete documentation for a hypothetical event management software, including project analysis and diagrams such as PERT charts.</p>
            </div>
            <div class="project-item">
                <h3>Vehicle Rental Software</h3>
                <p>A private software application to manage a vehicle rental business, structured with object-oriented programming in Java.</p>
            </div>
            <div class="project-item">
                <h3>Univaq Classroom Occupancy Calendar</h3>
                <p>Created a calendar divided by department to display the availability of each classroom and its scheduled events. The project was built using Java Servlets, SQL, and HTML.</p>
            </div>
            <div class="project-item">
                <h3>Clothing E-commerce Store</h3>
                <p>For this project, we were tasked with modifying an existing website template (both back-end and front-end) to transform it into an e-commerce platform. We converted it into a clothing store with various filters and integrated a local database.</p>
            </div>
            <div class="project-item">
                <h3>Travel Recommendation App (Python)</h3>
                <p>Developed a simple Python application using decision trees to recommend travel
                    destinations based on user preferences and dislikes. The project focuses on data
                    preprocessing, basic machine learning logic and result interpretation.</p>
                <p>This project helped strengthen my understanding of Python programming and
                    introductory machine learning concepts.</p>
            </div>

        `,
        'percorso': `
            <h2>My Journey</h2>
            <div class="path-item">
                <h3>Student @ Tallinn University of Technology (TalTech)</h3>
                <p><strong>2025 - Present</strong> | 6-month Erasmus+ experience in Tallinn, Estonia.</p>
            </div>
            <div class="path-item">
                <h3>Master's Degree in Cybersecurity</h3>
                <p><strong>2024 - Present</strong> | Sapienza University of Rome</p>
            </div>
             <div class="path-item">
                <h3>Production Controller @ Lfoundry Technology</h3>
                <p><strong>2021 - 2022</strong> | Internship and subsequent employment in the semiconductor production line.</p>
            </div>
            <div class="path-item">
                <h3>Bachelor's Degree in Computer Science</h3>
                <p><strong>2019 - 2024</strong> | University of L'Aquila</p>
            </div>
            <div class="path-item">
                <h3>High School Diploma in Information Technology</h3>
                <p><strong>2014 - 2019</strong> | IIS Ettore Majorana, Avezzano</p>
            </div>
        `,
        'blog': `
            <h2>Blog & Write-ups</h2>
            <p>I regularly practice penetration testing through Hack The Box and publish 
            detailed technical write-ups explaining methodology, tools and exploitation paths.</p>
            <br>
            <p>I share my knowledge and passions through writing. Here you can find links to my personal spaces.</p>
            
            <div class="blog-links-container">
                
                <a href="https://thenewzimo.github.io/writeups/" target="_blank" class="blog-link">
                    <i class="fa-solid fa-terminal"></i>
                    <div class="link-text">
                        <strong>Hack The Box Write-ups</strong>
                        <span>A collection of my solutions for retired HTB machines.</span>
                    </div>
                </a>

                <a href="[INSERT ERASMUS BLOG LINK HERE]" target="_blank" class="blog-link">
                    <i class="fa-solid fa-plane-departure"></i>
                    <div class="link-text">
                        <strong>Erasmus in Tallinn Guide</strong>
                        <span>Practical advice and stories from my experience.</span>
                    </div>
                </a>

            </div>
        `,
        'contatti': `
            <h2>Contact Me</h2>
            <p>I am always open to new opportunities and collaborations. You can find me here:</p>
            <div class="contact-links-container">
                <a href="https://linkedin.com/in/simone-morisi-71269a276" target="_blank" class="contact-link">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/thenewzimo" target="_blank" class="contact-link">
                    <i class="fa-brands fa-github"></i>
                    <span>GitHub</span>
                </a>
                <a href="https://www.instagram.com/zimoisback?igsh=M2thMWVjODZwaW1w" target="_blank" class="contact-link">
                    <i class="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                </a>
            </div>
        `
    };

    const nodes = document.querySelectorAll('.node');
    const sidePanel = document.getElementById('side-panel');
    const panelContent = document.getElementById('panel-content');
    const closePanelBtn = document.getElementById('close-panel-btn');
    const mainContent = document.querySelector('.main-content');

    // Open the panel
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const nodeKey = node.dataset.node; 
            const contentToLoad = nodeContent[nodeKey];
            panelContent.innerHTML = contentToLoad;
            sidePanel.classList.add('is-visible');
            mainContent.classList.add('content-shifted');
        });
    });

    // Close the panel
    closePanelBtn.addEventListener('click', () => {
        sidePanel.classList.remove('is-visible');
        mainContent.classList.remove('content-shifted');
    });
    
    // Close panel with swipe
    let touchStartX = 0;
    let touchEndX = 0;
    sidePanel.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    }, false);
    sidePanel.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipeGesture();
    }, false);

    function handleSwipeGesture() {
        const swipeDistance = touchEndX - touchStartX;
        const minSwipeDistance = 75; 
        if (touchEndX > touchStartX && swipeDistance > minSwipeDistance) {
            console.log('Swipe right detected, closing panel.');
            sidePanel.classList.remove('is-visible');
            mainContent.classList.remove('content-shifted');
        }
    }

});