const CONFIG = 
{
    "name": "Meng Chen",
    "titleName": "Meng Chen",
    "highlightAuthorName": "Meng Chen",
    "bio": "<p>I'm a final-year Ph.D. candidate in Cyberspace Security in the <a href=\"http://www.en.cs.zju.edu.cn\">College of Computer Science and Technology</a> at Zhejiang University, advised by <a href=\"https://lynnlilu.github.io\">Li Lu</a>. I also earned my bachelor's degree from Zhejiang University in 2021. I has visited <a href=\"https://www.ntu.edu.sg/computing/research/institutes-centres/csl\">Cyber Security Lab</a> at Nanyang Technological University, advised by <a href=\"https://personal.ntu.edu.sg/tianwei.zhang\">Tianwei Zhang</a>. I also work with <a href=\"https://zjhzjh123.github.io\">Jiaheng Zhang</a> at National University of Singapore. My research focuses on AI system security, including adversarial robustness, backdoor learning, especially their threats to intelligent audio systems and multimodal large language models.</p>",
    "profileImg": "assets/img/profile.jpg",
    "bibtexPath": "assets/pub.bib",
    "email": "meng.chen@zju.edu.cn",
    "orcid": "https://orcid.org/0000-0002-4775-5107",
    "github": "https://github.com/mangophant",
    "scholar": "https://scholar.google.com/citations?user=oSNnYaAAAAAJ",
    "services": [
        {
            "category": "Journal Reviewer",
            "items": "IEEE TIFS, IEEE TNSE"
        },
        {
            "category": "External Reviewer",
            "items": "USENIX Security (2025-2026), AAAI (2026), ACL (2026), IEEE INFOCOM (2023-2026), ACM UbiComp (2026), ACM MM (2024), ICASSP (2024), IEEE/ACM IWQoS (2023-2025)"
        },
        {
            "category": "Artifact Evaluation Committee",
            "items": "USENIX Security (2026)"
        }
    ],
    "awards": [
        { 
            "name": "Outstanding Graduate", 
            "org": "Zhejiang Province", 
            "year": 2026 
        },
        { 
            "name": "Outstanding Graduate", 
            "org": "Zhejiang University", 
            "year": 2026 
        },
        { 
            "name": "National Scholarship", 
            "org": "China", 
            "year": 2024 
        },
        { 
            "name": "Young Student Fundamental Research Grant (Ph.D. Student)", 
            "org": "NSFC", 
            "note": "国自然青年学生基础研究项目",
            "year": 2024 
        },
        { 
            "name": "Young Elite Scientist Sponsorship Program (Ph.D. Student)", 
            "org": "CAST", 
            "note": "中国科协青年人才托举工程博士生专项",
            "year": 2024 
        },
        { 
            "name": "Supporting Outstanding Doctoral Dissertation Scholarship", 
            "org": "Zhejiang University", 
            "year": 2024 
        },
        { 
            "name": "Best Poster Runner-up Award", 
            "org": "ACM MobiCom", 
            "year": 2022 
        },
        { 
            "name": "Student Conference Grant", 
            "org": "IEEE INFOCOM", 
            "year": 2022 
        },
        { 
            "name": "Outstanding Bachelor Dissertation Award", 
            "org": "Zhejiang University", 
            "year": 2021 
        },
        { 
            "name": "Outstanding Graduate", 
            "org": "Zhejiang University", 
            "year": 2021 
        },
        { 
            "name": "Provincial Government Scholarship", 
            "org": "Zhejiang Province", 
            "year": 2019 
        }
    ],
    "tabs": [
        { "id": "home", "label": "Home" },
        { "id": "cv", "label": "CV", "link": "assets/pdf/meng_cv.pdf" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    if (!window.lucide) {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/lucide@latest";
        script.onload = initApp;
        document.head.appendChild(script);
    } else {
        initApp();
    }
});

function initApp() {
    if (!CONFIG || Object.keys(CONFIG).length === 0) return;
    renderBasicInfo();
    renderNavigation();
    renderSections();
    fetchPublications();
}

function renderBasicInfo() {
    document.title = `${CONFIG.name} - Academic Profile`;
    document.getElementById('site-title').textContent = CONFIG.titleName;
    document.getElementById('bio-content').innerHTML = CONFIG.bio;
    
    const profileImg = document.getElementById('profile-img');
    if (CONFIG.profileImg) {
        profileImg.src = CONFIG.profileImg;
        profileImg.onload = () => profileImg.style.display = 'block';
        if (profileImg.complete) profileImg.style.display = 'block';
    }

    const linksContainer = document.getElementById('bio-links');
    linksContainer.innerHTML = '';
    const iconLinks = [
        { key: 'email', icon: 'mail', label: 'Email', url: `mailto:${CONFIG.email}` },
        { key: 'github', icon: 'github', label: 'GitHub', url: CONFIG.github },
        { key: 'scholar', icon: 'graduation-cap', label: 'Scholar', url: CONFIG.scholar },
        { key: 'orcid', icon: 'id-card', label: 'ORCID', url: `https://orcid.org/${CONFIG.orcid}` }
    ];

    iconLinks.forEach(item => {
        if (CONFIG[item.key]) {
            const a = document.createElement('a');
            a.href = item.url;
            a.className = 'link-item';
            a.target = item.key === 'email' ? '_self' : '_blank';
            a.innerHTML = `<i data-lucide="${item.icon}"></i> <span>${item.label}</span>`;
            linksContainer.appendChild(a);
        }
    });
    if (window.lucide) lucide.createIcons();
}

function renderNavigation() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.innerHTML = '';
    
    CONFIG.tabs.forEach((tab, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = tab.label;
        
        if (tab.link) {
            a.href = tab.link;
            a.target = "_blank";
        } else {
            a.href = `#${tab.id}`;
            a.dataset.tabTarget = tab.id;
            if (index === 0) a.classList.add('active');
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                switchTab(a);
            });
        }
        li.appendChild(a);
        navMenu.appendChild(li);
    });
}

function switchTab(clickedLink) {
    const targetId = clickedLink.dataset.tabTarget;
    if (!targetId) return;

    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    clickedLink.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === `tab-${targetId}`) {
            content.classList.add('active');
        }
    });
}

function renderSections() {
    const serviceList = document.getElementById('service-list');
    if (CONFIG.services) {
        serviceList.innerHTML = '';
        CONFIG.services.forEach(s => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${s.category}</strong>: ${s.items}`;
            serviceList.appendChild(li);
        });
    }

    const awardList = document.getElementById('award-list');
    if (CONFIG.awards) {
        awardList.innerHTML = '';
        CONFIG.awards.forEach(a => {
            const li = document.createElement('li');
            if (a.note) {
                li.innerHTML = `<strong>${a.name}</strong>, <em>${a.org}</em>, ${a.year}</br><em class="award-note">(${a.note})</em>`;
            } else {
                li.innerHTML = `<strong>${a.name}</strong>, <em>${a.org}</em>, ${a.year}`;
            }
            awardList.appendChild(li);
        });
    }
}

async function fetchPublications() {
    const pubList = document.getElementById('publication-list');
    const loading = document.getElementById('pub-loading');
    
    try {
        const response = await fetch(CONFIG.bibtexPath);
        const bibtexText = await response.text();
        let entries = parseBibTeX(bibtexText);
        
        entries = entries.filter(e => e.selected === 'true');
        entries.sort((a, b) => (b.year || 0) - (a.year || 0));
        
        loading.style.display = 'none';
        pubList.innerHTML = '';

        entries.forEach(entry => {
            const li = createPublicationItem(entry);
            pubList.appendChild(li);
        });
        
        if (window.lucide) lucide.createIcons();
    } catch (e) {
        loading.textContent = "Error loading publications.";
    }
}

function createPublicationItem(entry) {
    const li = document.createElement('li');
    li.className = 'pub-item';

    const authorsArr = (entry.author || "").split(', ');
    const authorsStr = authorsArr.map(name => {
        let res = name.trim();
        const highlightName = CONFIG.highlightAuthorName ? CONFIG.highlightAuthorName.trim() : "";
        const corresName = entry.corresponding ? entry.corresponding.trim() : "";

        if (highlightName && res.toLowerCase().includes(highlightName.toLowerCase())) {
            res = `<span class="highlight-self">${res}</span>`;
        }
        
        if (corresName && res.toLowerCase().includes(corresName.toLowerCase())) {
            res += `<span class="highlight-corr">*</span>`;
        }
        return res;
    }).join(', ');

    const venueName = entry.journal || entry.booktitle || "Preprint";
    const venueAbbr = entry.abbr ? `${entry.abbr}, ` : "";

    li.innerHTML = `
        <div class="pub-row title"><strong>${entry.title || "Untitled"}</strong></div>
        
        <div class="pub-row authors">${authorsStr}</div>
        
        <div class="pub-row venue">
            ${venueAbbr}${venueName}, ${entry.year || ""}
            <span class="pub-links">
                ${entry.url ? `[<a href="${entry.url}" target="_blank">PDF</a>]` : ""}
                ${entry.code ? `[<a href="${entry.code}" target="_blank">Code</a>]` : ""}
            </span>
        </div>
        
        ${entry.award ? `
        <div class="pub-row award">
            <i data-lucide="trophy" style="width: 14px; height: 14px;"></i>
            ${entry.certificate ? `<a href="${entry.certificate}" target="_blank">${entry.award}</a>` : entry.award}
        </div>` : ""}
    `;

    return li;
}

function parseBibTeX(text) {
    const entries = [];
    const entryRegex = /@([a-zA-Z]+)\s*\{\s*([^,]+),\s*([\s\S]*?)\n\s*\}/g;
    let match;
    while ((match = entryRegex.exec(text)) !== null) {
        const entryData = { id: match[2].trim() };
        const body = match[3];
        const fieldRegex = /([a-zA-Z0-9_-]+)\s*=\s*(?:\{([\s\S]*?)\}|"([\s\S]*?)"|([^\s,}]+))/g;
        let fMatch;
        while ((fMatch = fieldRegex.exec(body)) !== null) {
            const key = fMatch[1].toLowerCase();
            let val = fMatch[2] || fMatch[3] || fMatch[4];
            if (val) {
                val = val.replace(/[\{\}]/g, '').replace(/\s+/g, ' ').trim();
                entryData[key] = val;
            }
        }
        if (entryData.author) {
            entryData.author = entryData.author.split(' and ')
                .map(a => a.includes(',') ? `${a.split(',')[1].trim()} ${a.split(',')[0].trim()}` : a)
                .join(', ');
        }
        entries.push(entryData);
    }
    return entries;
}