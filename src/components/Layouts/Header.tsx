import React from 'react';
import CoreHeader from "./CoreHeader";
import SubHeaderComponent from "./SubHeader";

export interface HeaderProps {}

const HeaderComponent: React.FC<HeaderProps> = React.memo(() => {
    return (
        <header className="border-gray-200 bg-white">
            <SubHeaderComponent />
            <CoreHeader/>
        </header>
    );
});

export default HeaderComponent;
