"use client";

export default function ResetPasswordForm({
  onBack,
}: {
  onBack: () => void;
}) {
  return (
    <form className="space-y-5 ">
      {/* Description */}
      <p className="text-sm font-semibold text-[#28272D] leading-relaxed pt-5">
        Enter Your Email Address And We Will Send You A link To reset Password
      </p>

      {/* Email Field */}
      <div>
        <label className="block text-lg font-semibold text-[#28272D] mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Your email address"
          className="w-full h-[48px] rounded-[13px] border border-gray-200 bg-white
            px-4 text-sm text-[#57585A] placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all"
        />
      </div>

      {/* Footer Row */}
      <div className="flex justify-between items-center">
        {/* Back to Sign In */}
        <p className="text-base text-[#57585A]">
          Already Have An account?{" "}
          <button
            type="button"
            onClick={onBack}
            className="text-[#2760EB] font-medium hover:underline transition-all"
          >
            Sign in
          </button>
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#0D6EFD] hover:bg-[#0B5ED7] px-10 py-2
            text-white rounded-[13px] font-semibold text-base
            shadow-md hover:shadow-lg transition-all duration-200"
        >
          Send To Email
        </button>
      </div>
    </form>
  );
}
