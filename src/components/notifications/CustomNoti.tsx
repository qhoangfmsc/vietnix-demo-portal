"use client"

import { toast, Toaster } from "sonner";
import { Info, XCircle, Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";
import React from "react";

const variantConfig = {
    info: {
        bg: "bg-blue-100",
        color: "text-blue-800",
        icon: <Info className="text-blue-500" />,
    },
    error: {
        bg: "bg-red-100",
        color: "text-red-800",
        icon: <XCircle className="text-red-500" />,
    },
    loading: {
        bg: "bg-gray-100",
        color: "text-gray-800",
        icon: <Loader2 className="animate-spin text-gray-500" />,
    },
    warn: {
        bg: "bg-yellow-100",
        color: "text-yellow-800",
        icon: <AlertTriangle className="text-yellow-500" />,
    },
    success: {
        bg: "bg-green-100",
        color: "text-green-800",
        icon: <CheckCircle2 className="text-green-500" />,
    },
};

type Variant = keyof typeof variantConfig;

type NotiOptions = {
    description?: string;
    duration?: number;
};

function showNoti(
    variant: Variant,
    message: string,
    options?: NotiOptions
) {
    const config = variantConfig[variant];
    toast.custom(
        (toastId) => (
            <div
                className={`flex items-center gap-3 rounded-lg pl-4 pr-10 py-3 shadow-md border ${config.bg} ${config.color} relative`}
            >
                {config.icon}
                <div>
                    <div className="text-lg font-semibold">{message}</div>
                    {options?.description && (
                        <div className="text-md opacity-80">{options.description}</div>
                    )}
                </div>
                {variant !== "loading" &&
                    <button
                        className="absolute top-2 right-2 p-1 rounded hover:bg-black/10 focus:outline-none"
                        onClick={() => toast.dismiss(toastId)}
                        aria-label="Đóng thông báo"
                    >
                        <XCircle className="w-4 h-4" />
                    </button>
                }
            </div>
        ),
        { duration: options?.duration ?? 8000 }
    );
}

export const notify = {
    info: (msg: string, options?: NotiOptions) => showNoti("info", msg, options),
    error: (msg: string, options?: NotiOptions) => showNoti("error", msg, options),
    loading: (msg: string, options?: NotiOptions) => showNoti("loading", msg, options),
    warn: (msg: string, options?: NotiOptions) => showNoti("warn", msg, options),
    success: (msg: string, options?: NotiOptions) => showNoti("success", msg, options),
};

export function NotiProvider() {
    return <Toaster richColors position="top-right" />;
} 