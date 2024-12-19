import Card from '@/shared/components/Card';
import { Educations } from '@/shared/model';
import React from 'react';


interface EducationCardProps {
    educations: Educations
    icon?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ educations }) => {
    return (
        <Card className='h-1/3' icon="graduation-cap">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <ul className="overflow-y-auto h-32">
                {educations.map((education, index) => (
                <Card key={index} className="mb-4">
                    <h4 className="text-base font-bold">{education.title}</h4>
                    <p className="text-sm font-semibold">{education.institution}</p>
                    <p className="text-xs">{education.period}</p>
                    <p className="text-xs">{education.vote}</p>
                </Card>
                ))}
            </ul>
        </Card>
    );
};

export default EducationCard;