import React from 'react';
import Card from '@/shared/components/Card';
import { Experiences } from '@/shared/model';

interface ExperienceCardProps {
    experiences: Experiences;
}

const ExperienceCard: React.FC<ExperienceCardProps> = 
    ({ experiences }) => {

    return (
        <Card className='h-2/3' icon='computer'>
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <ul className="overflow-auto xl:h-[21rem] md:h-48">
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