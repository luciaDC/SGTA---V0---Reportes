export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-[#002855]">Dashboard</h1>
        <p className="text-gray-600">Bienvenido al Sistema de Gestión de Tesis Académicas</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-md bg-white px-3 py-2 text-sm shadow-sm">
          <span className="font-medium text-[#002855]">Semestre:</span> 2023-2
        </div>
      </div>
    </div>
  )
}
