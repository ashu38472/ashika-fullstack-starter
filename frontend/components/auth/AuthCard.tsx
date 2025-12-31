export default function AuthCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-transparent w-[496px] min-h-[278px] rounded-[31px] border border-white px-5 py-5">
      <h2 className="text-3xl font-semibold text-[#57585A] text-center">
        {title}
      </h2>
      {children}
    </div>
  );
}
