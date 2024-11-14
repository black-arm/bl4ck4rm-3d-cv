// src/components/FixedBackground.tsx
import React from 'react';

const FixedBackground: React.FC = () => {
return (
    <div className="bg-zinc-900 flex flex-col items-center -space-y-60 justify-center fixed h-full w-full z-0">
        <div className="bg-purple-400 h-80 w-96 rounded-full blur-3xl"></div>
        <div className="bg-indigo-400 h-80 w-80 rounded-full blur-3xl mb-4"></div>
    </div>
);
};

export default FixedBackground;