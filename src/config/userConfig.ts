import neurospeccompanionmerged from './projects/neurospeccompanionmerged.json';
import scheds from './projects/scheds.json';
import fadedTextRestoration from './projects/fadedtextrestoration.json';
import clinicalmain from './projects/clinicalmain.json';
import seatReservation from './projects/seatreservation.json';
import nucpaBalloons from './projects/nucpa-balloons.json';
import nucpaBalloonsApi from './projects/nucpaballoonsapi.json';
import portfolio from './projects/portfolio.json';
import foodies from './projects/foodies.json';
export const userConfig = {
    // Personal Information
    name: 'Behnam Farhadi',
    role: 'Software Developer - Backend Developer',
    location: 'St. Johns, NL, CANADA',
    email: 'farhadi.behnam@gmail.com',
    website: 'Behnam Farhadi',
    roleFocus: 'Full Stack Developer skilled in JavaScript, React, Node.js, HTML, and CSS, with backend experience using .NET, C#, Entity Framework, and SQL Server, and familiarity with Bootstrap and Angular.',
    age: 39,    

    // Social Links
    social: {
        github: 'https://github.com/behnamfarhadi2010',
        linkedin: 'https://www.linkedin.com/in/farhadi-behnam/', // Add your LinkedIn URL
    },

    // Contact Information
    contact: {
        email: 'farhadi.behnam@gmail.com',
        phone: '+17093417330', // Add your phone number
        calendly: 'https://calendly.com/bfarhadi', // Add your Calendly URL
    },

    // Spotify Configuration
    spotify: {
        playlistId: '3e6ksTUOhetnqLANRxQRll', // Your Spotify playlist ID
        playlistName: 'Coding-Time',
    },

    // Resume Configuration
    resume: {
        url: 'https://drive.google.com/file/d/1e91Bh-XTxbUjQ6QrlgyM-xwbJlNjksRe/view',
        localPath: '/resume.pdf',
    },

    // Education Background
    education: [
        {
            degree: "Master of Computer Science",
            major: "Computer Science",
            institution: "Memorial University of Newfoundland",
            location: "St. Johns, NL, Canada",
            year: "2021-2023",
            description: "Relevant coursework: Software Design, Machine Learning, Information Theory & Coding, Data Visualization, Image Processing, Computer Graphics ",
            images: [
                {
                    url: "https://www.applyboard.com/wp-content/uploads/2021/02/memorial-university-of-newfoundland.jpg",
                    alt: "Memorial University of Newfoundland",
                    description: "Memorial University of Newfoundland Campus"
                }
            ]
        }
    ],

    courses: [
        {
            title: "Software Developer",
            description: "Intro to web developement, React, Node.js, HTML, CSS, JavaScript, Bootstrap, Angular",
            institution: "Get Building",
            location: "St. Johns, NL, CANADA",
            year: "2025",
            images: [
                {
                    url: "https://framerusercontent.com/images/sTlnSV1drfSEnGWSvvGAvF48o.jpg",
                    alt: "Get Building",
                    // description: "ITI Campus"
                }
            ]
        },
        {
            title: "Digital Marketing Professional Certification",
            description: "The Digital Marketing Management course contains, Digital Marketing Headlines, Website Optimization, Google Analytics, Google Advertising, Digital Marketing Campaign Development, Digital Marketing Strategy Marketing",
            institution: "MTF Institute of Management, Technology and Finance",
            location: "«Lisboa, Portugal",
            year: "2024",
            images: [
                {
                    url: "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/349155959_1269980653914239_1597853967597243041_n.png?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=fATbARBV5n4Q7kNvwG2rcCy&_nc_oc=AdkgebbdhMFnRm-HQ4VSmsK9SdaCrDbL1CUhoHSzXzoTmPR7rc81dLxpq0KUM87UaXQ&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=eHruv0vDE7ELGxGwZ7Snjg&oh=00_AfOz1MM5OEC7Skw_7nSz6l1woAWTErz5GWkAypzWASC9tw&oe=685B4ED7",
                    alt: "MTF Institute of Management, Technology and Finance",
                    // description: "DEPI Logo"
                }
            ]
        }
    ],

    skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Wordpress",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "MongoDB",
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "HTML",
        "Css",
        "Python",
        "Astro Web Framework",
    ],

    // extraCurricularRoles: [
    //     {
    //         role: "Vice President",
    //         institution: "NUICPC",
    //         location: "Nile University",
    //         year: "2023-2024",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/FbSmTsBw/486635391-1079182187577545-400541279663759578-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/1fLrcywC/487093779-1079182100910887-5326561587880729477-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/mVJBpngp/486181151-1075334944628936-2845216629795518112-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/yn7ccHM1/486507182-1075334774628953-7774379668898780058-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/35xMtCDV/486104871-1075333997962364-6362307301859416001-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/fzL5qvvS/486248194-1074582274704203-6554786202979315108-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/VYxSXZF5/483525641-1070070571822040-3631060112169135578-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             }
    //         ]
    //     },
    //     {
    //         role: "Head of SWE Committee",
    //         institution: "GDG Nile University",
    //         location: "Nile University",
    //         year: "2024-2025",
    //         images: [
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487392755_1081523057343458_8188220183188100569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FLS-aCW1uJUQ7kNvwGbXwyf&_nc_oc=AdlFYb4-vwoTMNuaHrlFgSR161QWwnQ7VtWfb-8Y_JyoVI37WuwF6Qwu3I3tjawZM10&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=l69wa6Aj6hbCl-b5xEZigg&oh=00_AfHAACCAl3WKApFTelz0kJWcQbEIeAxPXnHV1WHsRoCEJA&oe=6806DA4B",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             }
    //         ]
    //     },
    //     {
    //         role: "Member and Mentor",
    //         institution: "NUICPC",
    //         location: "Nile University",
    //         year: "2021-2024",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/Y43vdxrV/484501388-1069637098532054-11435862832739630-n.jpg",
    //                 alt: "NUICPC",
    //             },
    //             {
    //                 url: "https://i.ibb.co/WWBPM6GG/484804363-1069556495206781-5476304623000762204-n.jpg",
    //                 alt: "Nile University",
    //                 // description: "Nile University Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg",
    //                 alt: "Nile University",
    //                 // description: "Nile University Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/ZR4dJLyv/482238905-1065269192302178-4747858326277637907-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/ymJN2v00/482246774-1065269122302185-3150232388297078773-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/vxYBzH64/482027750-1063466179149146-4344066305683793822-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/j9K3Smq8/481466571-1061263352702762-7633575959379424468-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/S7R12bRy/484136881-1069556391873458-1395371296655723435-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/zWVHwSPH/484516365-1070411428454621-8390835945290794938-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/27L4bpQY/484381461-1069479998547764-3349306911678016045-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/MyFj8V6s/484140894-1069479545214476-3560564697839847145-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/Sw9psfwX/484640131-1069484585213972-5052989750649951025-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/v6QLXpqg/486627143-1081260057369758-4195012303656403802-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
                    
    //             }

    //         ]
    //     },
    //     {
    //         role: "Member",
    //         institution: "TEDxNU",
    //         location: "Nile University",
    //         year: "2021-2022",
    //         images: [
    //             {
    //                 url: "https://www.nu.edu.eg/sites/default/files/2024-06/whatsapp_image_2024-06-25_at_1.33.17_pm.jpeg",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             }
    //         ]
    //     },

    // ],

    // extraCurricularActivities: [
    //     {
    //         title: "Head of IT & Cheating Control Committee",
    //         description: "NUCPA",
    //         institution: "NUCPA",
    //         location: "Nile University",
    //         year: "2025",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/N6FsYfLW/NP100582-2.jpg",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/355vdbMJ/NP109982-1.jpg",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/Frhbfyq/NP100626-2-1.jpg",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             }
    //         ]
    //     },
    //     {
    //         title: "SWE Sessions",
    //         institution: "GDG Nile University",
    //         location: "Nile University",
    //         year: "2025",
    //         images: [
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             }
    //         ]
    //     },
    //     {
    //         title: "NUICPC Problem Solving Sessions",
    //         description: "Mentored students in problem solving and competitive programming, started as a member and became a mentor, from level 0 to level 2, and helped them to qualify for the ECPC Finals",
    //         institution: "NUICPC",
    //         location: "Nile University",
    //         year: "2022-2025",
    //         images: [
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/486652074_1077701407725623_8749819316280105843_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=925gSLld9YIQ7kNvwH1Tnis&_nc_oc=AdkNGFJJzloJMZ7UyMqzyxpop7LgOAS4wDf37phzksSB9zyg6YYoJn9DvQBkTRCPe3c&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=2jkQxIt1NA2bEK9hDA_sLw&oh=00_AfEFWMQ8TXpm7J7GNg31NTQtj51-xBK0gA96v3e3FXFOXw&oe=6806D41D",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             },
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             },
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/484516365_1070411428454621_8390835945290794938_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eGV6obo35CwQ7kNvwEna_H_&_nc_oc=AdkJaDZSOxHorBC4LMHappVliFJtwF5f7D8dyRSgS9Dn6aLdg1YEnE6taP2Ig3sbyQs&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=mEX3OZGsZeCySB76oTVkRQ&oh=00_AfEuFzuaNHYsYm3DLGnEWPCQYRyyQfVNh64r__8G_DKNaA&oe=6806E9D5",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             }
    //         ]
    //     }
    // ],
    competitions: [
        {
            title: "Second Place - Working IT Immigration Solutions",
            description: "Genesis 25th PitchAndPick winners",
            achievement: "2nd Place at the Genesis 25th PitchAndPick winners! 🎉🏆",
            year: "2022",
            images: [
                {
                    url: "https://media.licdn.com/dms/image/v2/C4D22AQEXb0Q7fLItMg/feedshare-shrink_800/feedshare-shrink_800/0/1649279078035?e=1753315200&v=beta&t=y63u3ZMJ1Oxi4vthy8zbKsvIisnF_A1lir2qtXTyVt0",
                    alt: "Genesis pitch and pick",
                    description: "1st and 2nd teams of the Genesis 25th PitchAndPick winners"
                }
            ]
        },
        
    ],

    // Professional Experience
    experience: [
        {
            title: "Web Developer & Digital Marketing Specialist",
            company: "Historic Sites Association of Newfoundland and Labrador",
            location: "St. Johns, NL, Canada",
            period: "May 2024 - Present",
            description: "Developing and maintaining the association's website using WordPress, HTML, CSS, and JavaScript. Implementing digital marketing strategies to increase online presence and engagement.",
            technologies: ["WordPress", "HTML", "CSS", "JavaScript", "Digital Marketing", "Google Ads", "SEO"],
            images: [
                {
                    url: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/415919589_344937808359127_5656612764170068384_n.png?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Bclq4-caLwoQ7kNvwFM6Ijv&_nc_oc=AdllpuVigtuX1jc8AJCO2LI3XKoCUiouWZZLHrSodNV-HqgNQCGZNw6SBh4fI8ZDbDs&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=ZP0R8Blq9q94MbfqZockfw&oh=00_AfNy8-TZK6pCp3zpcyOlbid30fOmNm2-qoQENk0ZgyNrMw&oe=685B5BCC",
                    alt: "Heritage Shops NL",
                    // description: "Luftborn Logo"
                }
            ]
        },
        {
            title: "Webmaster",
            company: "Graduate Student union of Memorial University of Newfoundland",
            location: "St. Johns, NL, Canada",
            period: "May 2021 - May 2022",
            description: "Managed the Graduate Student Union's website, ensuring it was up-to-date and user-friendly. Developed new features and optimized the site for better performance.",
            technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
            images: [
                {
                    url: "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/308540607_503011631832648_4766869946006526949_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZeJnsgad2ioQ7kNvwHozlno&_nc_oc=AdkmnbT4Fx_wOMoR83_8qXXYweoerJwFxSKvrEQ7TEIQY3DJ1j3Z7She_oHo5_CxhHM&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=tBmIHym0_r58JvvPex2ICg&oh=00_AfPFqb74X94BX0kyY1oHradTHh04UL1eBVqLdYMG2ChZkA&oe=685B5704",
                    alt: "GSU MUN",
                    // description: "Working on .NET projects during the internship"
                }
            ]
        },
        {
            title: "Web Developer & Digital Marketing Specialist",
            company: "VacCoat",
            location: "UK, Remote",
            period: "July 2018 - July 2020",
            description: "Developed and maintained the company's website, implemented SEO strategies, and managed digital marketing campaigns. Worked with a team to enhance online visibility and customer engagement.",
            technologies: ["WordPress", "HTML", "CSS", "JavaScript", "SEO", "Digital Marketing"],
            images: [
                {
                    url: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/232517594_126144226389274_781516961966171378_n.png?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=79LQjz-38ZgQ7kNvwGXQyOf&_nc_oc=AdmuzDV0Dnqz-lOvuWfb39IBPEd_ZSfJQM3-OjYlAQSHWceAINzPkKoSmvjIgocmETc&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=ctO3FCwVPLF0hv_PGiVWaw&oh=00_AfNdYqIT8ulLA_T1RZFuaItciR-lB1MjQIzSCbHL5KP6bg&oe=685B54E5",
                    alt: "VacCoat Ltd.",
                    // description: "Working on .NET projects during the internship"
                }
            ]
        }
    ],

    // SEO Configuration
    seo: {
        title: 'Behnam Farhadi - Software Developer',
        description: 'Software Developer based in St. Johns, NL, CANADA, specializing in React, Node.js, and modern web technologies',
        keywords: ['Software Developer', 'React', 'Node.js', 'Web Development', 'Egypt'],
    },

    // Theme Configuration
    theme: {
        primaryColor: '#1ED760', // Spotify green
        secondaryColor: '#1d1d1f',
        accentColor: '#007AFF',
    },

    // Projects Configuration
    projects: [
        // scheds,
        portfolio,
        // foodies,
        // fadedTextRestoration,
        // nucpaBalloons,
        // nucpaBalloonsApi,
        // neurospeccompanionmerged,
        // clinicalmain,
        // seatReservation,
        
        // Add more projects here
    ]
} as const; 