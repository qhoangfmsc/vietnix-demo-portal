import SocialComponent from "../Socials/SocialHeader";
import LanguageSwitchingButton from "../Languages/LanguageSwitchingButton";
import CartButton from "../Services/CartButton";

export interface SubHeaderProps {
}

const SubHeaderComponent: React.FC<SubHeaderProps> = () => {
    return (
        <header className="w-full p-1 px-3 border-b border-gray-200
            flex flex-row justify-between">
            <SocialComponent />
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <CartButton/>
                <LanguageSwitchingButton />
            </div>
        </header>
    );
};

export default SubHeaderComponent;
