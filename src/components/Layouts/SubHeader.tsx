import React from 'react';
import SocialComponent from "../socials/SocialHeader";
import LanguageSwitchingButton from "../languages/LanguageSwitchingButton";
import CartButton from "../cart/CartButton";

export interface SubHeaderProps {
}

const SubHeaderComponent: React.FC<SubHeaderProps> = React.memo(() => {
    return (
        <header className="p-1 px-3 border-b border-gray-200 flex flex-row justify-between">
            <SocialComponent />
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <CartButton/>
                <LanguageSwitchingButton />
            </div>
        </header>
    );
});

export default SubHeaderComponent;
