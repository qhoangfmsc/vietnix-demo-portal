import React from 'react';
import CoreHeader from "@/components/layouts/CoreHeader";
import SubHeaderComponent from "@/components/layouts/SubHeader";

const HeaderComponent: React.FC = React.memo(function HeaderComponent() {
    return (
        <header className="border-gray-200 bg-white">
            <SubHeaderComponent />
            <CoreHeader/>
        </header>
    );
});

export default HeaderComponent;
