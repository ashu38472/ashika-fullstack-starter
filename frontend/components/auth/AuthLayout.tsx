import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Illustration Section */}
      <div className="w-1/2 bg-[#E2EAFF]">
        <div className="w-full h-full bg-white flex flex-col justify-center items-center px-16 py-12 rounded-br-[100px]">
          <div className="max-w-[520px] w-full">
            <h1 className="text-[2.5rem] font-semibold text-[#57585A] mb-16 leading-tight">
              One Click To go All Digital
            </h1>

            <div className="relative w-full h-[465px]">
              <Image
                src="/login-illustration.png"
                alt="Digital Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Authentication Panel */}
      <div className="w-1/2 bg-[#E2EAFF] flex items-center justify-center rounded-tl-[100px]">
        <div className="w-full max-w-[580px] px-12">
          {/* Illustration above the card */}
          <div className="relative flex justify-center w-full h-[320px]">
            <Image
              src="/auth-header-illustration.png"
              alt="Education Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
