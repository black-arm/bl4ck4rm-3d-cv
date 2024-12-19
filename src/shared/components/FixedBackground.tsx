import React from 'react';

const FixedBackground: React.FC = () => {
return (
    <div className="bg-zinc-900 flex flex-col items-center -space-y-32 justify-center fixed h-full w-full z-0">
        <div className="bg-red-600 h-80 w-96 rounded-3xl blur-3xl move-left"></div>
        <div className="bg-blue-500 h-80 w-96 rounded-2xl blur-3xl mb-4 move-right"></div>
    </div>
);
};

export default FixedBackground;