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
            <h2>Chi Sono</h2>
            <p>
                Sono uno studente di Cybersecurity presso l'Università La Sapienza, con una profonda passione per questo mondo. 
                Sono una persona estremamente curiosa, amo imparare cose nuove e mettermi costantemente alla prova.
            </p>
            <p>
                Un altro mio grande interesse sono i viaggi. Ho avuto la fortuna di fare un'esperienza Erasmus a Tallinn!
            </p>
        `,
        'skill': `
            <h2>Le Mie Competenze</h2>
            <h4>Linguaggi di Programmazione</h4>
            <ul>
                <li>Python</li>
                <li>C/C++</li>
                <li>Bash/Shell Scripting</li>
                <li>HTML, CSS, JavaScript, PHP, SQL</li>
                <li>Java</li>

            </ul>
            <h4>Tool & Tecnologie di Sicurezza</h4>
            <ul>
                <li><strong>Penetration Testing:</strong> Nmap, Metasploit, Burp Suite, Wireshark</li>
                <li><strong>Virtualizzazione:</strong> Proxmox, Docker</li>
                <li><strong>Networking:</strong> OpenSense, configurazione firewall e reti</li>
                <li><strong>Sistemi Operativi:</strong> Linux, Windows</li>
            </ul>
        `,
        'progetti': `
            <h2>Progetti Principali</h2>
            <div class="project-item">
                <h3>Creazione e Violazione di una CTF</h3>
                <p>Progetto universitario in cui il mio team ha progettato una macchina vulnerabile (Capture The Flag) e ha poi sfidato altri team a violarla, documentando ogni passo.</p>
            </div>
            <div class="project-item">
                <h3>Infrastruttura di Rete Sicura</h3>
                <p>Utilizzando Proxmox e OpenSense, ho configurato una rete virtuale segmentata con firewall, DMZ e policy di accesso per simulare un ambiente sicuro.</p>
            </div>
            <div class="project-item">
                <h3>Progettazione di un gestore di eventi</h3>
                <p>Progettazione di tutta la documentazione relativa ad un software ipotetico che gestisce eventi, con le varie analisi del progetto e diagrammi come ad esempio il PERT.</p>
            </div>
            <div class="project-item">
                <h3>Software di noleggio veicoli</h3>
                <p>Un software privato che permette di gestire un entità che si occupa di noleggiare veicoli. Strutturato con una programmazione a oggetti in Java.</p>
            </div>
            <div class="project-item">
                <h3>Calendario occupazione delle aule univaq</h3>
                <p>Creazione di un calendario suddiviso in aree i base al dipartimento di ogni aula, in base alla sezione verranno visualizzate le disponibilità di ogni aula con i relativi eventi che ci sono. Il tutto è stato fatto utilizzando Servlet java tra sql e html.</p>
            </div>
            <div class="project-item">
                <h3>E-commerce di vestiti</h3>
                <p>In questo progetto veniva richiesto di modificare un template già esistente di un sito internet che abbia sia la parte di back end sia il front end, e modificarlo con le richieste del professore che richiedevano di trasformarlo in un e-commerce, noi lo abbiamo trasformato in un e-commerce di vestiti con tutti i vari filtri e lo abbiamo implementato con un database locale.</p>
            </div>
            <div class="project-item">
                <h3>Analisi Dati con Machine Learning</h3>
                <p>Ho sviluppato un modello in Python per consigli di mete e altre cose (questo è da finire perche lo sto facendo ora)</p>
            </div>
        `,
        'percorso': `
            <h2>Il Mio Percorso</h2>
            <div class="path-item">
                <h3>Studente @ Tallinn University of Technology (TalTech)</h3>
                <p><strong>2025 - Presente</strong> | Esperienza Erasmus+ di 6 mesi a Tallinn in Estonia.</p>
            </div>
            <div class="path-item">
                <h3>Laurea Magistrale in Cybersecurity</h3>
                <p><strong>2024 - Presente</strong> | Università di Roma "La Sapienza"</p>
            </div>
             <div class="path-item">
                <h3>Production Controller @ Lfoundry Technology</h3>
                <p><strong>2021 - 2022</strong> | Stage e successivo impiego nella linea di produzione su semiconduttori.</p>
            </div>
            <div class="path-item">
                <h3>Laurea Triennale in Informatica</h3>
                <p><strong>2019 - 2024</strong> | Università degli studi dell'Aquila</p>
            </div>
            <div class="path-item">
                <h3>Diploma in informatica</h3>
                <p><strong>2014 - 2019</strong> | IIS Ettore Majorana, Avezzano</p>
            </div>
        `,
        'blog': `
            <h2>Blog & Write-ups</h2>
            <p>Condivido le mie conoscenze e le mie passioni attraverso la scrittura. Qui trovi i link ai miei spazi personali.</p>
            <a href="https://thenewzimo.github.io/writeups/" target="_blank" class="external-link">Write-ups di Hack The Box</a>
            <p>Una raccolta delle mie soluzioni e ragionamenti per le macchine ritirate di HTB.</p>
            <br>
            <a href="[INSERISCI QUI IL LINK AL BLOG ERASMUS]" target="_blank" class="external-link">Guida all'Erasmus a Tallinn</a>
            <p>Consigli pratici e racconti della mia esperienza per aiutare futuri studenti.</p>
        `,
        'contatti': `
            <h2>Contattami</h2>
            <p>Sono sempre aperto a nuove opportunità e collaborazioni. Puoi trovarmi qui:</p>
            <div class="contact-links">
                 <a href="https://linkedin.com/in/simone-morisi-71269a276" target="_blank">LinkedIn</a>
                 <a href="https://github.com/thenewzimo" target="_blank">GitHub</a>
                 <a href="https://www.instagram.com/zimoisback?igsh=M2thMWVjODZwaW1w" target="_blank">Instagram</a>
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