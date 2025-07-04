import * as React from "react";

export default function TickBannerIcon() {
    return (
        <div className="absolute top-0 right-0 transform -translate-x-[2px] -translate-y-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
}
