"use client"

import { toast, Toaster } from "sonner";
import { Info, XCircle, Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";
import React from "react";

const variantConfig = {
    info: {
        bg: "bg-primary",
        color: "text-primary",
        icon: <Info className="text-primary" />,
    },
    error: {
        bg: "bg-destructive",
        color: "text-destructive",
        icon: <XCircle className="text-destructive" />,
    },
    loading: {
        bg: "bg-muted",
        color: "text-muted-foreground",
        icon: <Loader2 className="animate-spin text-muted-foreground" />,
    },
    warn: {
        bg: "bg-warning",
        color: "text-warning",
        icon: <AlertTriangle className="text-warning" />,
    },
    success: {
        bg: "bg-success",
        color: "text-success",
        icon: <CheckCircle2 className="text-success" />,
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