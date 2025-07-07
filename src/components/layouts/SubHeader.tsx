import React from 'react';
import SocialComponent from "@/components/socials/SocialHeader";
import LanguageSwitchingButton from "@/components/languages/LanguageSwitchingButton";
import CartButton from "@/components/cart/CartButton";

const SubHeaderComponent: React.FC = React.memo(function SubHeaderComponent(){
    return (
        <header className="p-1 px-3 border-b border-border flex flex-row justify-between">
            <SocialComponent />
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <CartButton/>
                <LanguageSwitchingButton />
            </div>
        </header>
    );
});

export default SubHeaderComponent;
