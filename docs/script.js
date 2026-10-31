const CONFIG = 
{
    "name": "Meng Chen",
    "titleName": "Meng Chen",
    "highlightAuthorName": "Meng Chen",
    "bio": "<p>I am currently a researcher at <a href=\"https://www.bytedance.com\">ByteDance</a>, working on the security of large language models and agent systems. I received my Ph.D. degree in Cyberspace Security from the <a href=\"http://www.en.cs.zju.edu.cn\">College of Computer Science and Technology</a> at Zhejiang University in 2026, advised by <a href=\"https://lynnlilu.github.io\">Li Lu</a>. I also earned my bachelor's degree from Zhejiang University in 2021. During my Ph.D., I visited the <a href=\"https://www.ntu.edu.sg/computing/research/institutes-centres/csl\">Cyber Security Lab</a> at Nanyang Technological University, advised by <a href=\"https://personal.ntu.edu.sg/tianwei.zhang\">Tianwei Zhang</a>, and collaborated with <a href=\"https://zjhzjh123.github.io\">Jiaheng Zhang</a> at National University of Singapore. Previously, my research focused on adversarial robustness and backdoor learning, especially their threats to intelligent audio systems and multimodal large language models.</p>",
    "profileImg": "assets/img/profile.jpg",
    "bibtexPath": "assets/pub.bib",
    "email": "m.chen@bytedance.com",
    "scholar": "https://scholar.google.com/citations?user=oSNnYaAAAAAJ",
    "services": [
        {
            "category": "Journal Reviewer",
            "items": "IEEE TIFS, IEEE TNSE, IEEE TVCG"
        },
        {
            "category": "External Reviewer",
            "items": "USENIX Security (2025-2026), AAAI (2026), ACL (2026), IEEE INFOCOM (2023-2026), ACM UbiComp (2026), ACM MM (2024), ICASSP (2024), IEEE/ACM IWQoS (2023-2025)"
        },
        {
            "category": "Artifact Evaluation Committee",
            "items": "USENIX Security (2026), ACM CCS (2026)"
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
const BIBTEX_RAW = "@inproceedings{hijacking,\n\tauthor= {Chen, Meng and Wang, Kun and Lu, Li and Zhang, Jiaheng and Zhang, Tianwei},\n\ttitle= {{Hijacking Large Audio-Language Models via Context-agnostic and Imperceptible Auditory Prompt Injection}},\n\tbooktitle= {IEEE S&P},\n\tpages= {},\n\taddress= {San Francisco, CA, USA},\n\tyear= {2026},\n    url={},\n\tcorresponding={Li Lu},\n\tselected={true}\n}\n\n@inproceedings{fosu,\n\tauthor= {Wang, Kun and Chen, Meng and Lu, Li and Feng, Jingwen and Chen, Qianniu and Ba, Zhongjie and Ren, Kui and Chen, Chun},\n\ttitle= {{From One Stolen Utterance: Assessing the Risks of Voice Cloning in the AIGC Era}},\n\tbooktitle= {IEEE S&P},\n\tpages= {4633-4681},\n\taddress= {San Francisco, CA, USA},\n\tyear= {2025},\n\turl={https://doi.org/10.1109/SP61157.2025.00238},\n\tcorresponding={Li Lu},\n\tselected={true}\n}\n\n@inproceedings{trojanroom,\n\tauthor= {Chen, Meng and Xu, Xiangyu and Lu, Li and Ba, Zhongjie and Lin, Feng and Ren, Kui},\n\ttitle= {{Devil in the Room: Triggering Audio Backdoors in the Physical World}},\n\tbooktitle= {USENIX Security},\n\tpages= {7285-7302},\n\taddress= {Philadelphia, PA, USA},\n\tyear= {2024},\n\turl={https://www.usenix.org/conference/usenixsecurity24/presentation/chen},\n\tcorresponding={Li Lu},\n\tselected={true}\n}\n\n@article{advreverb,\n\tauthor= {Chen, Meng and Lu, Li and Yu, Jiadi and Ba, Zhongjie and Lin, Feng and Ren, Kui},\n\ttitle= {{AdvReverb: Rethinking the Stealthiness of Audio Adversarial Examples to Human Perception}},\n\tjournal= {IEEE TIFS},\n\tvolume= {19},\n\tpages= {1948-1962},\n\tyear= {2024},\n\turl={https://doi.org/10.1109/TIFS.2023.3345639},\n\tcode={https://github.com/zju-muslab/AdvReverb},\n\tcorresponding={Li Lu},\n\tselected={true}\n}\n\n@article{voicecloak,\n\tauthor= {Chen, Meng and Lu, Li and Wang, Junhao and Yu, Jiadi and Chen, Yingying and Wang, Zhibo and Ba, Zhongjie and Lin, Feng and Ren, Kui},\n\ttitle= {{VoiceCloak: Adversarial Example Enabled Voice De-Identification with Balanced Privacy and Utility}},\n\tjournal= {ACM UbiComp},\n\tvolume= {7},\n\tnumber= {2},\n\tpages= {48:1-48:21},\n\tyear= {2023},\n\turl={https://doi.org/10.1145/3596266},\n\tcorresponding={Li Lu},\n\tselected={true}\n}\n\n@article{voicelistener,\n\tauthor= {Wang, Lei and Chen, Meng and Lu, Li and Ba, Zhongjie and Lin, Feng and Ren, Kui},\n\ttitle= {{VoiceListener: A Training-Free and Universal Eavesdropping Attack on Built-in Speakers of Mobile Devices}},\n\tjournal= {ACM UbiComp},\n\tvolume= {7},\n\tnumber= {1},\n\tpages= {32:1-32:22},\n\tyear= {2023},\n\turl={https://doi.org/10.1145/3580789},\n\tcode={https://github.com/zju-muslab/VoiceListener},\n\tcorresponding={Li Lu},\n\tselected={false}\n}\n\n@inproceedings{phoneytalker,\n\tauthor= {Chen, Meng and Lu, Li and Ba, Zhongjie and Ren, Kui},\n\ttitle= {{PhoneyTalker: An Out-of-the-Box Toolkit for Adversarial Example Attack on Speaker Recognition}},\n\tbooktitle= {IEEE INFOCOM},\n\tpages= {1419-1428},\n\taddress= {London, United Kingdom},\n\tyear= {2022},\n\turl={https://doi.org/10.1109/INFOCOM48880.2022.9796934},\n\tcode={https://github.com/zju-muslab/PhoneyTalker},\n\tcorresponding={Li Lu},\n\tselected={true}\n}\n\n@inproceedings{voicecloak_mobicom,\n\tauthor= {Chen, Meng and Lu, Li and Yu, Jiadi and Chen, Yingying and Ba, Zhongjie and Lin, Feng and Ren, Kui},\n\ttitle= {{Poster: A Non-Intrusive and Adaptive Speaker De-Identification Scheme Using Adversarial Examples}},\n\tbooktitle= {ACM MobiCom},\n\tpages= {853-855},\n\taddress= {Sydney, NSW, Australia},\n\tyear= {2022},\n\turl={https://doi.org/10.1145/3495243.3558260},\n\taward={Best Poster Runner-up Award},\n\tcertificate={assets/pdf/mobicom_2022_best_poster_runner_up_award.pdf},\n\tcorresponding={Li Lu},\n\tselected={true}\n}\n\n@inproceedings{phytalker,\n\tauthor= {Chen, Qianniu and Chen, Meng and Lu, Li and Yu, Jiadi and Chen, Yingying and Wang, Zhibo and Ba, Zhongjie and Lin, Feng and Ren, Kui},\n\ttitle= {{Push the Limit of Adversarial Example Attack on Speaker Recognition in Physical Domain}},\n\tbooktitle= {ACM SenSys},\n\tpages= {710-724},\n\taddress= {Boston, MA, USA},\n\tyear= {2022},\n\turl={https://doi.org/10.1145/3560905.3568518},\n\tcorresponding={Li Lu},\n\tselected={false}\n}\n";

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
    renderPublications();
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
        { key: 'email', icon: 'mail', label: CONFIG.email, url: CONFIG.email ? `mailto:${CONFIG.email}` : '' },
        { key: 'github', icon: 'github', label: 'GitHub', url: CONFIG.github || '' },
        { key: 'scholar', icon: 'graduation-cap', label: 'Google Scholar', url: CONFIG.scholar || '' },
        { key: 'orcid', icon: 'id-card', label: 'ORCID', url: CONFIG.orcid ? (CONFIG.orcid.startsWith('http') ? CONFIG.orcid : `https://orcid.org/${CONFIG.orcid}`) : '' }
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

function renderPublications() {
    const pubList = document.getElementById('publication-list');

    try {
        let entries = parseBibTeX(BIBTEX_RAW);

        entries = entries.filter(e => e.selected === 'true');
        entries.sort((a, b) => (b.year || 0) - (a.year || 0));

        pubList.innerHTML = '';

        entries.forEach(entry => {
            const li = createPublicationItem(entry);
            pubList.appendChild(li);
        });

        if (window.lucide) lucide.createIcons();
    } catch (e) {
        pubList.innerHTML = '<li class="status-text">Error loading publications.</li>';
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