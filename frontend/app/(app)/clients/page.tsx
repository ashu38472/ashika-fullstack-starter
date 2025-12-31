import { clients } from "../../../data/clients";

export default function ClientsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Clients</h1>
      <ul className="bg-white rounded shadow">
        {clients.map(c => (
          <li key={c.id} className="p-4 border-b">
            {c.name} — {c.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
