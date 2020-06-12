interface JobExperience {
    role : string, 
    company: string,
    timespan : string,
    desc : string, 
}

interface Education {
    school: string,
    degree : string, 
    program : string,
    timespan : string, 
}

export interface Award {
    name : string,
    date : string, 
}

export const JobExperienceData : JobExperience[] = [
    {
        role: "PhD Student Researcher",
        company: "Carnegie Mellon University",
        timespan: "August 2019 - Present",
        desc: "My core research surrounded online harassment and potential mitigations for it. " +
            "I also researched a variety of topics in the domain of usable privacy and security, digital colonialism, " +
            "and how society interacts with the online commons. I used a combination of survey, interview, large scale social media analysis, and machine learning " +
            "to achieve my research goals"
    },
    {
        role: "Sofware Development Engineer II",
        company: "Twitch",
        timespan : "January 2017 - August 2019",
        desc: "Worked on a variety of backend, ML, and infrastructure projects including a spam classification engine for Twitch's" +
        "private message system, a high-throughput moderation logic server, Twitch’s automatic text moderation tooling " + 
        "several user safety tools, and a variety of performance improvements."
    },
    {
        role: "Software Engineer",
        company: "Snowflake Computing",
        timespan: "July 2015 - December 2016",
        desc: "Worked on a large array of projects including implementing new SQL compiler optimizations, improving user ETL " + 
        "via performance and improvements (such as implementing SQL transformations during loading process), and general system architecture improvements."
        + " I also was involved in recruiting.",
    }   
];

export const EducationData : Education[] = [
    {
        school : "Harvard University",
        program : "Computer Science",
        degree : "A.B.",
        timespan : "September 2011 - May 2015",
    },
    {
        school : "Harvard University",
        program : "Computer Science",
        degree : "S.M.",
        timespan : "September 2013 - May 2015"
    },
    {
        school : "Carnegie Mellon University",
        program : "Engineering and Public Policy",
        degree : "Ph.D. ",
        timespan : "August 2019 - Present",
    }
];

export const AwardsData : Award[] = [
    { 
        name : "National Graduate Education for Minority Students Fellowship",
        date : "2019"
    }
]