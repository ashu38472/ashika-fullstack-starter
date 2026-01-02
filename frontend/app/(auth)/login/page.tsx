"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import SignInForm from "@/components/auth/SignInForm";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "reset">("login");
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <span className="text-sm text-[#6C757D]">Loading...</span>
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

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
