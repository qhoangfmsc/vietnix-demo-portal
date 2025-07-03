import CoreHeader from "./CoreHeader";
import SubHeaderComponent from "./SubHeader";

export interface HeaderProps {
}

const HeaderComponent: React.FC<HeaderProps> = () => {
    return (
        <header className="w-full border-gray-200 justify-between bg-white">
            <SubHeaderComponent />
            <CoreHeader/>
        </header>
    );
};

export default HeaderComponent;
