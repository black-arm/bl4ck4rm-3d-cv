import React from 'react';
import Card from '../../../../shared/components/Card';
import Image from 'next/image';

interface BooksCardProps {
    books: string[];
}

const BooksCard: React.FC<BooksCardProps> = ({ books }) => {
    return (
        <Card>
            <h2 className='text-2xl font-semibold'>Books</h2>
            <p className='text-sm mb-2'>Books I&apos;ve read</p>
            <section className="flex flex-col gap-2 items-center 2xl:h-[35rem] overflow-y-auto">
                { books.map((book, i) => <div key={i}>
                        <Image src={`/images/${book}`} alt={`Cover of ${book}`} width={150} height={175} />
                    </div>
                )}  
            </section>
        </Card>
    );
};

export default BooksCard;