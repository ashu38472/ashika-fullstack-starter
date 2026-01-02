export default function DetailsPage() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-[18px] font-semibold text-[#6C757D]">
        Information
      </h1>

      {/* Top Info Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-[#E3ECFF] px-6 py-4">
        <div className="flex flex-wrap gap-6 text-sm">
          <InfoChip label="Full Name" value="Alok Kumar Choudhary" />
          <InfoChip label="Back Office ID" value="AI2345" />
          <InfoChip label="Terminal ID" value="AI2345" />
          <InfoChip label="Branch Code" value="A004" />
        </div>
      </div>

      {/* Registration Details Card */}
      <div className="bg-white rounded-xl shadow-sm border border-[#E3ECFF] px-6 py-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-[#E3ECFF]" />
          <h2 className="text-[16px] font-semibold text-[#6C757D]">
            Registration Details
          </h2>
          <div className="flex-1 h-px bg-[#E3ECFF]" />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
          {/* Left Column */}
          <DetailField label="Applicant Name" value="Alok Kumar Choudhary" />
          <DetailField label="NSE CM Reg No" value="AP1701073501" />

          <DetailField label="Trade Name" value="Alok Kumar Choudhary" />
          <DetailField label="NSE CM Reg- Date" value="27-03-2019" />

          <DetailField label="PAN No" value="ACAPC1190K" />
          <DetailField label="NSE FNO Reg- No" value="AP170100401" />

          <DetailField label="Constitution" value="Individual" />
          <DetailField label="NSE FNO Reg- Date" value="04-05-2009" />

          <DetailField label="RM Name" value="Santhosh Prasad" />
          <DetailField label="NSE CF Reg- No" value="AP1701073501" />

          <DetailField label="NSE Segment" value="C|F|X" />
          <DetailField label="NSE CF Reg- Date" value="29-06-2015" />

          <DetailField label="NSE CO Reg- No" value="AP1701073501" />
          <DetailField label="NCDEX Reg- No" value="" />

          <DetailField label="NSE CO Reg- Date" value="27-03-2019" />
          <DetailField label="NCDEX Reg- Date" value="" />

          <DetailField label="BSE Segments" value="C" />
          <DetailField label="MSEI Reg- No" value="7057" />

          <DetailField label="BSE Reg- No" value="AP-0109120195425" />
          <DetailField label="MSEI Segment" value="CDX|CM|FO" />

          <DetailField label="BSE Reg- Date" value="19-02-2019" />
          <DetailField label="MSEI Reg- Date" value="09-03-2023" />
        </div>
      </div>
    </div>
  );
}
function InfoChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-[#E3ECFF] rounded-lg px-4 py-2">
      <span className="text-[#6C757D]">{label}</span>
      <span className="text-[#41414E] font-medium">{value}</span>
    </div>
  );
}
function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[180px_1fr] items-center gap-3">
      <span className="text-sm text-[#8A8F98]">{label}</span>
      <input
        value={value}
        readOnly
        className="
          h-[36px]
          px-3
          rounded-md
          border border-gray-300
          bg-white
          text-sm text-[#6C757D]
        "
      />
    </div>
  );
}
