"use client";

export default function ResetPasswordForm({
  onBack,
}: {
  onBack: () => void;
}) {
  return (
    <form className="space-y-6">
      {/* Description Text */}
      <p className="text-sm text-[#57585A] leading-relaxed">
        Enter Your Email Address And We Will Send You A link To reset Password
      </p>

      {/* Email Input */}
      <div>
        <input
          type="email"
          placeholder="Enter Your email address"
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#57585A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Sign In Link */}
      <div className="text-left">
        <p className="text-sm text-[#57585A]">
          Already Have An account?{" "}
          <button
            type="button"
            onClick={onBack}
            className="text-[#0D6EFD] font-medium hover:underline transition-all"
          >
            Sign in
          </button>
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#0D6EFD] hover:bg-[#0B5ED7] text-white py-3.5 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200"
      >
        Send To Email
      </button>
    </form>
  );
}