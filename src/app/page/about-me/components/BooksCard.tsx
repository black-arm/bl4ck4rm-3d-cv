import React from 'react';
import Card from '../../../../shared/components/Card';

interface BooksCardProps {
    books: string[];
}

const BooksCard: React.FC<BooksCardProps> = ({ books }) => {
    return (
        <Card>
            <h2>Books List</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>
        </Card>
    );
};

export default BooksCard;