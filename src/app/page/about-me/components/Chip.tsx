import React from 'react';
import Image from 'next/image';
import { ChipProps } from '../models';

const Chip: React.FC<ChipProps> = ({ label, icon, color, className }) => {
    return (
        <div className={`flex items-center px-3 py-2 rounded-full ${className ?? ''}`}
            style={{ backgroundColor: color }}>
            {icon && <Image src={icon} alt="icon" width={16} height={16} 
                className=" w-4 h-4 mr-2" />}
            <span className="text-sm font-medium text-white">{label}</span>
        </div>
    );
};

export default Chip;