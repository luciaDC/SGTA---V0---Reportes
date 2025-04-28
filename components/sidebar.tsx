"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  ChevronLeft,
  ClipboardList,
  FileText,
  Home,
  LayoutDashboard,
  PieChart,
  Users,
  UserCheck,
  FileCheck,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Temas",
    href: "/dashboard/temas",
    icon: BookOpen,
  },
  {
    title: "Asesores",
    href: "/dashboard/asesores",
    icon: UserCheck,
  },
  {
    title: "Gestión",
    href: "/dashboard/gestion",
    icon: ClipboardList,
  },
  {
    title: "Revisión",
    href: "/dashboard/revision",
    icon: FileText,
  },
  {
    title: "Jurado",
    href: "/dashboard/jurado",
    icon: Users,
  },
  {
    title: "Autorizaciones",
    href: "/dashboard/autorizaciones",
    icon: FileCheck,
  },
  {
    title: "Reportes",
    href: "/dashboard/reportes",
    icon: PieChart,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen, toggle } = useSidebar()

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#002855] text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-[#003366]">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Home className="h-6 w-6" />
          <span className="font-bold">SGTA - PUCP</span>
        </Link>
        <button onClick={toggle} className="rounded-md p-1 hover:bg-[#003366] md:hidden">
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-[#003366]",
                  pathname === item.href ? "bg-[#006699] text-white" : "text-gray-300",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-[#003366] p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#006699] flex items-center justify-center">
            <span className="text-sm font-medium">JP</span>
          </div>
          <div>
            <p className="text-sm font-medium">Juan Pérez</p>
            <p className="text-xs text-gray-300">Estudiante</p>
          </div>
        </div>
      </div>
    </div>
  )
}
