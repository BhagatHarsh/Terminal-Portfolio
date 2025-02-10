const config = {
    help: [
        {
            title: "help",
            description:
                "for a list of commands(add flags '-d' for commands description)",
            info: [
                "help or ls command gives the list of commands",
                "add '-d' flag for description of all commands also",
                "write command after help to get info about that specific command like 'help typing'",
            ],
        },
        {
            title: "clear",
            description: "to clear the terminal",
            info: ["clear or cls command clears the terminal"],
        },
        {
            title: "about",
            description: "to learn more about me",
            info: ["use about command to learn more about me"],
        },
        {
            title: "social",
            description:
                "to see my social links (add flags '-l' for links and '-d' for detailed results)",
            info: [
                "use social command to see my social links",
                "add '-l' flag for links and '-d' flag for detailed results",
            ],
        },
        {
            title: "projects",
            description: "to see my projects",
            info: ["use projects command to see my projects"],
        },
        // {
        //     title: "blogs",
        //     description: "to see my recent blogs",
        //     info: ["use blogs command to see my recent blogs"],
        // },
        {
            title: "contact",
            description: "to enquire about my services",
            info: ["use enquire command to enquire about my services"],
        },
        {
            title: "cheer",
            description: "to appreciate my work",
            info: ["use cheer command to appreciate my work"],
        },
        {
            title: "repos",
            description: "to see my github repositories",
            info: ["use repos command to see my github repositories"],
        },
        {
            title: "ipconfig",
            description: "to see your IP details",
            info: ["use ipconfig command to see your IP details"],
        },
        {
            title: "github",
            description: "to see my github stats",
            info: ["use github command to see my github stats"],
        },
        // {
        //     title: "contributors",
        //     description: "to see all the contributors",
        //     info: ["use contributors command to see all the contributors"],
        // },
        {
            title: "download",
            description: "to download my pdf resume",
            info: ["use download command to download my pdf resume"],
        },
        {
            title: "calc",
            description: "to evaluate an expression, for eg: (2 + 3)",
            info: [
                "use calc command to evaluate an expression",
                "for eg: write 'calc 2+6*5/3'",
            ],
        },
        {
            title: "experience",
            description: "to see my work experience",
            info: ["use experience command to see my work experience"],
        },
        {
            title: "history",
            description:
                "shows the last 10 valid commands performed, use --clear flag to clear the history",
            info: [
                "use history command to show your last 10 commands history",
                "use --clear flag to clear the history",
                "use history {id} command to run command of that id in your history",
            ],
        },
        {
            title: "skills",
            description: "to see my skills",
            info: ["use skills command to see my skills"],
        },
        {
            title: "typing",
            description: "shows typing animation status",
            info: [
                "use typing command to see typing animation status",
                "Turn typing animation on and off by adding -on or -off flags respectively",
                "Also u can write a number(in ms) to set typing custom animation speed",
            ],
        },
        {
            title: "reset",
            description: "to reload site",
            info: ["use reset command to to reload site"],
        },
    ],
    terminal: {
        user: "$Bhagat_Harsh",
        host: "sudo",
        path: "~/guest",
    },
    blogs: [
        {
            site: "Dev Community",
            url: "https://dev.to/bhagatharsh",
        },
    ],
    cheer: {
        responseArray: [
            "Thank you! It makes my day😊😊😊",
            "It is great to hear that way!😁😁😁",
            "I would love to take credit😂😂😂",
            "That's so good to hear! I'm glad😍😍😍",
        ],
    },
    about: "Hey! Myself Harsh Bhagat, I am a final year student at Ahmedabad University doing by Bachelor's degree in computer science and engineering.",
    social: [
        {
            title: "Github",
            link: "https://github.com/BhagatHarsh",
        },
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/harsh-bhagat-376446235/",
        },
        {
            title: "LeetCode",
            username: "habhagat2003",
            link: "https://leetcode.com/u/habhagat2003/",
        },
        {
            title: "Codechef",
            link: "https://www.codechef.com/users/atomus3007",
            rating: "1648",
        },
    ],
    projects: [
        {
            title: "",
            link: "https://github.com/",
            description:
                "",
        },
    ],
    contact: {
        email: "habhagat2003@gmail.com",
    },
    experience: [
        {
            title: "React Developer at EQ Soft Solutions",
            description:
                "▪️ Acquired a strong foundation in ReactJS, including in-depth knowledge of key concepts such as routing, reducer, and Axios. \n ▪️ Demonstrated the ability to effectively apply ReactJS principles and techniques in projects and assignments. \n ▪️ Developed a solid understanding of the ReactJS ecosystem, including popular libraries and tools. \n ▪️ Demonstrated adaptability and a willingness to continuously learn and stay up-to-date with developments in the ReactJS field.",
        },
    ],
    skills: [
        {
            title: "Technical skills are: ",
            description:
                "C++, C, MySQL, Linux, ReactJS, NodeJS, MongoDB, JSON, DSA, Google Cloud Platform, ExpressJS, VueJS, Redux, Material UI, Bootstrap, Tailwind",
        },
        {
            title: "Other Skills are:",
            description:
                "Problem Solving, Team Leadership, Community Management, Team Building",
        },
    ],
    neofetch: {
        name: "Harsh Bhagat",

        title: "MERN Developer",

        skills: "Frontend, Backend, Cloud",

        shell: "zsh",

        languages: "Javascript, C++, HTML/CSS, SQL",

    },

};

export default config;

