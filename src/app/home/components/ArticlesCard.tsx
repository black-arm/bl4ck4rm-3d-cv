import React from 'react';
import Card from '@/shared/components/Card';
import { DevToArticles } from '@/app/home/model';

interface ArticlesCardProps {
    articles: DevToArticles;
}

const ArticlesCard: React.FC<ArticlesCardProps> = ({ articles }) => {
    return (
        <Card icon='newspaper' className='h-full'>
            <h3 className="text-xl font-bold mb-2">Articles</h3>
            <ul className="overflow-y-auto mr-4 xl:h-56 lg:h-40">
                {articles.map((article, index) => (
                    <Card key={index} className="mb-4 hover:bg-gray-500/30 mr-4">
                        <a href={article.url} target="_blank" rel="noreferrer">
                            <h4 className="text-base font-bold">{article.title}</h4>
                            <p className="text-sm">{article.description}</p>
                            <p className="text-xs">Reactions: {article.public_reactions_count}</p>
                        </a>
                    </Card>
                ))}
            </ul>
        </Card>
    );
};

export default ArticlesCard;