import React from 'react';
import Card from '@/shared/components/Card';
import { Experiences } from '@/shared/model';

interface ExperienceCardProps {
    
    experiences: Experiences;
    link?: string;
    icon?: string;
    className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = 
    ({ experiences, link }) => {

    return (
        <Card link={link} icon='computer'>
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <ul className="overflow-y-auto h-60">
                {experiences.map((experience, index) => (
                    <Card key={index} className="mb-4">
                        <h4 className="text-base font-bold">{experience.title}</h4>
                        <p className="text-xs">{experience.startDate} - {experience.endDate}</p>
                        <p className="text-xs">{experience.description}</p>
                    </Card>
                ))}
            </ul>
        </Card>
    );
};

export default ExperienceCard;