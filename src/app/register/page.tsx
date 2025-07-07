"use client"

import React from "react";
import RegisterForm from "@/components/auths/RegisterForm";
import RegisterRedirect from "@/components/auths/RegisterRedirect";

const RegisterPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-card rounded-xl shadow-lg flex overflow-hidden">
      <RegisterRedirect />
      <RegisterForm />
    </div>
  </div>
);

export default React.memo(RegisterPage); 