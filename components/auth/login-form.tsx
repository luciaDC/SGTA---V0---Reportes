"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Inicio de sesión exitoso",
        description: "Bienvenido al Sistema de Gestión de Tesis Académicas",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          placeholder="usuario@pucp.edu.pe"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Contraseña</Label>
          <a href="#" className="text-sm text-[#006699] hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <Input id="password" type="password" autoCapitalize="none" autoComplete="current-password" required />
      </div>
      <Button type="submit" className="w-full bg-[#002855] hover:bg-[#006699]" disabled={isLoading}>
        {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
      </Button>
      <div className="text-center text-sm">
        <span className="text-gray-600">¿No tienes una cuenta? </span>
        <a href="#" className="text-[#006699] hover:underline">
          Regístrate
        </a>
      </div>
    </form>
  )
}
