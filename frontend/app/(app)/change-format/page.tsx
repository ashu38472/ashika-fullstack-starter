export default function ChangeFormatPage() {
  return (
    <div className="space-y-4">
      {/* Page Title */}
      <h1 className="text-[20px] font-semibold text-[#6C757D]">
        Change Format
      </h1>

      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
        {/* Intro */}
        <div>
          <p className="text-[16px] font-medium text-[#6C757D] mb-3">
            Changes in type can be made:
          </p>

          <ol className="list-decimal pl-5 space-y-1 text-[14px] text-[#6C757D]">
            <li>Address</li>
            <li>Email</li>
            <li>Mobile</li>
          </ol>
        </div>

        {/* Download Button */}
        <div>
          <button
            className="
              bg-[#E3ECFF]
              text-[#0047FF]
              font-semibold
              text-[14px]
              px-10 py-3
              rounded-xl
              border border-[#0047FF]
              hover:bg-[#D6E6FF]
              transition
            "
          >
            Download PDF
          </button>
        </div>

        {/* Note Section */}
        <div
          className="
                border border-dashed border-gray-300
                rounded-xl
                h-[500px]
                flex flex-col
                items-center
                justify-center
                space-y-3
                text-center
            "
        >
          <p className="text-[16px] font-medium text-[#023E7A]">– Note –</p>

          <p className="text-[14px] text-[#6C757D]">
            Please Fill In The Information In The Download File &amp; send It to
          </p>

          <p className="text-[14px] font-semibold text-[#0047FF]">
            abhijit@ashikagroup.com
          </p>
        </div>
      </div>
    </div>
  );
}
