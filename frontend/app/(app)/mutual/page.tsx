import LedgerTable from "../../../components/ledger/LedgerTable";
import { ledgerRows } from "../../../data/ledger";

export default function MutualLedgerPage() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Mutual Fund Commission Ledger</h1>
      <LedgerTable rows={ledgerRows} />
    </>
  );
}
