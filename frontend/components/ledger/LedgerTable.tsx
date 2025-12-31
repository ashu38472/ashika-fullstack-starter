export default function LedgerTable({ rows }: any) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th>Date</th>
          <th>Document</th>
          <th>Particular</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r: any, i: number) => (
          <tr key={i} className="border-t text-center">
            <td>{r.date}</td>
            <td>{r.document}</td>
            <td>{r.particular}</td>
            <td>{r.debit}</td>
            <td>{r.credit}</td>
            <td>{r.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
