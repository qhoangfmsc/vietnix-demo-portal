import React from "react";

const FooterComponent: React.FC = React.memo(function FooterComponent() {
    return (
        <footer className="p-4 border-t text-center bg-card shadow-sm" role="contentinfo">
            <p className="text-sm text-muted-foreground">
                Copyright © 2025 VIETNIX.VN. All Rights Reserved.
            </p>
        </footer>
    );
});

export default FooterComponent;

