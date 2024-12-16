import Card from '@/shared/components/Card';
import { Educations } from '@/shared/model';
import React from 'react';


interface EducationCardProps {
    educations: Educations
}

const EducationCard: React.FC<EducationCardProps> = ({ educations }) => {
    return (
        <Card className="education-card">
            <ul className="overflow-y-auto h-60">
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