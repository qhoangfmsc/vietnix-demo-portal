import React from "react";

const FooterComponent: React.FC = React.memo(function FooterComponent() {
    return (
        <footer className="p-2 border-t text-center bg-white">
            Copyright © 2025 VIETNIX.VN. All Rights Reserved.
        </footer>
    );
});

export default FooterComponent;

