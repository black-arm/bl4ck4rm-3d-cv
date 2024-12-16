
export interface UserInfo {
    aboutMe: {
        description: string;
    },
    technologies: string[];
    experiences: Experiences;
}

export interface Experience {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
}

export type Experiences = Experience[];

export interface Education {
    title: string;
    institution: string;
    period: string;
    vote: string;
}

export type Educations = Education[];