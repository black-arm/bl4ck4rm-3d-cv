import Image from 'next/image';
import myMemoji from '@/my_memoji.png';
import Card from '@/shared/components/Card';

const IconCard: React.FC = () => {
    return (
        <Card className='p-8 text-center'>
            <Image className='m-auto' src={myMemoji} alt="My Memoji" width={256} height={256} />
        </Card>
    );
};

export default IconCard;