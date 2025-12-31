"use client";

import { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import SignInForm from "@/components/auth/SignInForm";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "reset">("login");

  return (
    <AuthLayout>
      <AuthCard title={mode === "login" ? "Sign In" : "Reset Password"}>
        {mode === "login" ? (
          <SignInForm onForgot={() => setMode("reset")} />
        ) : (
          <ResetPasswordForm onBack={() => setMode("login")} />
        )}
      </AuthCard>
    </AuthLayout>
  );
}