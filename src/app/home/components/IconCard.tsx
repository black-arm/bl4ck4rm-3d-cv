import Image from 'next/image';
import myMemoji from '@/my_memoji.png';
import Card from '@/components/Card';

const IconCard: React.FC = () => {
    return (
        <Card className='p-8 text-center'>
            <Image src={myMemoji} alt="My Memoji" width={256} height={256} />
        </Card>
    );
};

export default IconCard;