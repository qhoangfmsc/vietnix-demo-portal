import React from "react";

export interface HeaderProps {
}

const FooterComponent: React.FC<HeaderProps> = () => {
    return (
        <footer className="w-full p-2 border-t text-center bg-white">
            Copyright © 2025 VIETNIX.VN. All Rights Reserved.
        </footer>
    );
};

export default FooterComponent;
