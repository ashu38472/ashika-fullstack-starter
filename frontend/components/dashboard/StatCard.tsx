export default function StatCard({ label, value }: any) {
  return (
    <div className="bg-white rounded shadow p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
