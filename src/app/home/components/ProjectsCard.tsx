import React from 'react';
import Card from '@/shared/components/Card';
import { UserRepositories } from '@/shared/model/repository-node.model';

interface ProjectsCardProps {
    userRepositories: UserRepositories;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ userRepositories }) => {
    return (
        <Card className='h-full' link='/projects'>
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            <ul className="overflow-auto h-[35rem]">
                {userRepositories.user?.repositories.nodes.map((repo, index) => (
                    <Card key={index} className="mb-4">
                        <h4 className="text-base font-bold">{repo.nameWithOwner}</h4>
                        <p className="text-sm">{repo.description}</p>
                        <p className="text-xs">Stars: {repo.stargazerCount}</p>
                    </Card> 
                ))}
            </ul>
        </Card>
    );
};

export default ProjectsCard;