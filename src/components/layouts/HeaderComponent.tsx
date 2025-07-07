import React from 'react';
import CoreHeader from "@/components/layouts/CoreHeader";
import SubHeaderComponent from "@/components/layouts/SubHeader";

const HeaderComponent: React.FC = React.memo(function HeaderComponent() {
    return (
        <header className="border-border bg-card shadow-sm" role="banner">
            <SubHeaderComponent />
            <CoreHeader />
        </header>
    );
});

export default HeaderComponent;
