import AdminLayout from "./layout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-display font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="card p-6">Total Files</div>
        <div className="card p-6">Total Downloads</div>
        <div className="card p-6">Downloads Today</div>
        <div className="card p-6">Downloads This Week</div>
      </div>
    </AdminLayout>
  );
}
