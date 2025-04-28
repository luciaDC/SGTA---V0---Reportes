import { LoginForm } from "@/components/auth/login-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#002855] to-[#006699]">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center text-center">
          <img src="/placeholder.svg?height=80&width=80" alt="PUCP Logo" className="h-20 w-20 mb-4" />
          <h1 className="text-2xl font-bold text-[#002855]">Sistema de Gestión de Tesis Académicas</h1>
          <p className="text-sm text-gray-600 mt-2">Facultad de Ciencias e Ingeniería - PUCP</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
