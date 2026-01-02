export default function DoAndDontPage() {
  const items = [
    "The Notice Board is to be displayed on the outside premises or place of the seat.",
    "The certificate of registration / the letter of recognition to be displayed on your office premises.",
    "The trading terminals provided are located at the registered location only and are strictly operated by approved and Certified Users.",
    "Do not execute KYC directly with clients in your name.",
    "Do not deal in cash with clients.",
    "Do not issue bills/contract notes to the clients in your name.",
    "Do not be involved in any fund-based activities of collecting money from investors/public and promising them high periodic returns.",
    "Do not involve in illegal trades or dabba trades i.e. trades executed outside the exchange mechanism.",
    "Do not deal with any other trading member of the same exchange for proprietary trading except with the prior permission from the stock exchange/Main Broker.",
    "Do not issue any advertisement soliciting business in newspapers/pamphlets/journals/magazines etc. without obtaining requisite approval from stock exchanges. The application for the same shall be routed through the main broker.",
    "Do surrender/deactivate inactive terminals where no trading has been done during the last 6 months.",
    "Do intimate any change in the address to stock exchanges through the main broker immediately.",
    "Do maintain the IG register for the complaints received from clients.",
    "Do ensure that as a registered intermediary will not deal with the funds and securities of the client registered with us i.e. to give or take loans from clients or to transfer to and from shares to respective client accounts.",
    "Do ensure not to undertake any fund-based scheme promising clients high returns for the funds invested by them.",
    "Do ensure to intimate any change in affiliation, change in address, change in directorship in companies, change in partnership, or change in type of company to the concerned stock exchange.",
    "Do maintain the records pertaining to receipt of cheque/DIS from the clients and preserve the same to be shown during inspection.",
  ];

  const proofItems = [
    "Physical record written & signed by client",
    "Telephone recording",
    "Email from authorized email ID",
    "Log for internet transactions",
    "Record of SMS messages",
    "Any other legally verifiable record",
  ];

  return (
    <div className="space-y-4">
      {/* Page Title */}
      <h1 className="text-[20px] font-semibold text-[#6C757D]">
        Adherence of Do’s & Don’t
      </h1>

      {/* Content Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <ol className="space-y-4 text-[14px] text-[#6C757D] leading-relaxed">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="min-w-[22px] text-[#41414E] font-medium">
                {index + 1})
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>

        {/* Evidence Section */}
        <div className="mt-6 text-[14px] text-[#6C757D]">
          <p className="mb-3">
            Do ensure to maintain evidence of the client placing the order for
            execution of trades, it could be, inter alia, in the form of:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            {proofItems.map((proof, index) => (
              <li key={index}>{proof}</li>
            ))}
          </ul>

          <p className="mt-4">
            When a dispute arises, the burden of proof will be on you to produce
            the above records for the disputed trades.
          </p>
        </div>
      </div>
    </div>
  );
}
