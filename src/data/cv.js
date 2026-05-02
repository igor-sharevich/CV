export const cv = {
    name: 'Igor Sharevich',
    title: 'Senior Salesforce Engineer',
    jobTitle: 'Salesforce Engineer',
    yearsOfExperience: 7,
    birthDate: '1991-10-16',
    availableForWork: false,
    contacts: [
        { type: 'email', label: 'Email', display: 'ihar.sharevich@gmail.com', href: 'mailto:igor@example.com' },
        { type: 'linkedin', label: 'LinkedIn', display: 'linkedin.com/in/igor-sharevich', href: 'https://www.linkedin.com/in/igor-sharevich-620a72193/' },
        { type: 'location', label: 'Location', display: 'Poland', href: null }
        // { type: 'phone', label: 'Phone', display: '+1 234 567 890', href: 'tel:+1234567890' },
        // { type: 'github', label: 'GitHub', display: 'github.com/igor-sharevich', href: 'https://github.com/igor-sharevich' },
    ],
    about: "Hi, I'm {{name}}, a {{title}} with over {{years}} years of experience building and optimizing scalable CRM solutions. I specialize in bridging the gap between complex backend architectures and intuitive frontend experiences using Apex, LWC, and Lightning frameworks. Whether it's architecting custom applications, optimizing code, or integrating complex third-party systems like Stripe, I focus on delivering cutting-edge, high-performance results.",
    summary: 'Professional Senior Salesforce Engineer with full-cycle development experience, from requirements gathering to deployment. Possesses deep knowledge of the Salesforce platform, featuring strong hands-on experience with Commerce Cloud and latest B2B technologies. Excels at data migration, security configurations, and integrating third-party web services (REST/SOAP). Distinguished by strong problem-solving skills and a commitment to writing clean, optimized code.',
    skills: [
        {
            category: 'Salesforce Clouds',
            items: ['Sales Cloud', 'Service Cloud', 'Commerce Cloud', 'Experience Cloud'],
        },
        {
            category: 'Salesforce Features',
            items: ['Sharing & Security Models', 'Flow & Process Builder', 'REST/SOAP API', 'SFDX', 'Field Service', 'Salesforce OMS'],
        },
        {
            category: 'Backend — Apex',
            items: ['Sync/Async Apex', 'Batch Jobs', 'SOQL/SOSL', 'DML Operations', 'Apex Triggers', 'Custom REST Services'],
        },
        {
            category: 'Frontend & Web',
            items: ['Lightning Web Components', 'Aura Components', 'Visualforce', 'JavaScript', 'React', 'HTML5 / CSS3'],
        },
        {
            category: 'Tools & Integrations',
            items: ['GitHub / GitLab', 'Copado', 'JIRA', 'DataLoader', 'Workbench', 'REST & SOAP APIs'],
        },
    ],
    certifications: [
        'Salesforce Certified Platform Developer I',
        'Salesforce JavaScript Developer I',
        'Salesforce Certified Administrator',
        'Salesforce Certified Platform App Builder',
    ],
    experience: [
        {
            company: 'Forte Next',
            link: 'https://fortenext.com/',
            role: 'Salesforce Engineer',
            period: 'September 2022 – Present',
            bullets: [
                'Actively engaged in the end-to-end development of various Salesforce B2B (LEX) projects, implementing the latest B2B technologies to streamline partner operations.',
                'Leveraged advanced Apex development techniques to design and implement robust features within the Commerce Cloud implementation.',
                'Spearheaded design and implementation of advanced features in a mobile quoting application utilizing Lightning components and Flows.',
                'Implemented intricate integration solutions to achieve real-time data synchronization across systems.',
                'Demonstrated strong solution developing skills, designing scalable solutions anticipating future business requirements.',
            ],
        },
        {
            company: 'InCountry',
            link: 'https://incountry.com/',
            role: 'Salesforce Developer / Engineer',
            period: 'February 2022 – August 2022',
            bullets: [
                'Developed the InCountry Data Residency for Salesforce app, configuring complex visibility restrictions for regulated data.',
                'Engineered various Apex Classes and Lightning Web Component applications for functional needs.',
                'Created and managed second-generation packages using SFDX, CLI, and VS Code.',
            ],
        },
        {
            company: 'Customertimes Corp',
            link: 'https://www.customertimes.com/',
            role: 'Salesforce Engineer',
            period: 'January 2021 – September 2022',
            bullets: [
                'Worked primarily with Commerce Cloud and Salesforce B2B LEX projects with the latest B2B technologies.',
                'Set up and developed 3rd-party integrations, including Stripe and Apple/Google Pay.',
                'Developed features for major healthcare platforms (IQVIA Safety and IQVIA Virtual Trial).',
                'Built comprehensive LWC components for Community Cloud enabling customized patient-centric solutions.',
            ],
        },
        {
            company: 'VRP Consulting',
            link: 'https://www.vrpconsulting.com/',
            role: 'Salesforce Engineer',
            period: 'July 2018 – January 2021',
            bullets: [
                'Led technical aspects of the team during the absence of the designated technical leader.',
                'Contributed to a fully customized recruitment portal and complex employee tracking systems.',
                'Integrated external payment gateways (Stripe, GoCardless) and various REST/SOAP web services.',
                'Applied security patches to address vulnerabilities across multiple organizations.',
            ],
        },
    ],
    education: [
        {
            institution: 'Baranovichi State University (BARSU)',
            degree: "Bachelor's degree in Information Systems and Technologies",
            period: '2010 – 2016',
        },
    ],
    languages: [
        { language: 'English', level: 'Limited Professional Proficiency' },
        { language: 'Russian', level: 'Native or Bilingual Proficiency' },
        { language: 'Polish', level: 'A2 — Elementary' },
    ],
}

export function getAge() {
    const birth = new Date(cv.birthDate)
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const hadBirthday =
        today.getMonth() > birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())
    return hadBirthday ? age : age - 1
}
