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
        `,
        'competenze': `
            <h2>My Skills</h2>
            <h4>Programming Languages</h4>
            <ul>
                <li>Python</li>
                <li>C/C++</li>
                <li>Bash/Shell Scripting</li>
                <li>HTML, CSS, JavaScript, PHP, SQL</li>
                <li>Java</li>
            </ul>
            <h4>Security Tools & Technologies</h4>
            <ul>
                <li><strong>Penetration Testing:</strong> Nmap, Metasploit, Burp Suite, Wireshark</li>
                <li><strong>Virtualization:</strong> Proxmox, Docker</li>
                <li><strong>Networking:</strong> OpenSense, Firewall & Network Configuration</li>
                <li><strong>Operating Systems:</strong> Linux, Windows</li>
            </ul>
        `,
        'progetti': `
            <h2>Key Projects</h2>
            <div class="project-item">
                <h3>CTF Creation and Exploitation</h3>
                <p>A university project where my team designed a vulnerable machine (Capture The Flag) and then challenged other teams to breach it, documenting every step.</p>
            </div>
            <div class="project-item">
                <h3>Secure Network Infrastructure</h3>
                <p>Using Proxmox and OpenSense, I configured a segmented virtual network with a firewall, DMZ, and access policies to simulate a secure corporate environment.</p>
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
                <h3>Data Analysis with Machine Learning</h3>
                <p>I developed a Python model for suggesting travel destinations and other things (this project is currently in progress).</p>
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
            <p>I share my knowledge and passions through writing. Here you can find links to my personal spaces.</p>
            <a href="https://thenewzimo.github.io/writeups/" target="_blank" class="external-link">Hack The Box Write-ups</a>
            <p>A collection of my solutions and thought processes for retired HTB machines.</p>
            <br>
            <a href="[INSERT ERASMUS BLOG LINK HERE]" target="_blank" class="external-link">Erasmus in Tallinn Guide</a>
            <p>Practical advice and stories from my experience to help future students.</p>
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
    
});