// components/Wrapper.tsx
import React, { ReactNode } from "react";

type WrapperProps = {
    children: ReactNode;
};

const WidthLayoutWrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className="px-1 md:px-3 lg:px-5 xl:px-8 2xl:px-12">
            {children}
        </div>
    );
};

export default WidthLayoutWrapper;
