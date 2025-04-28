"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentReports } from "@/components/reports/student-reports"
import { AdvisorReports } from "@/components/reports/advisor-reports"
import { ReviewerReports } from "@/components/reports/reviewer-reports"
import { CoordinatorReports } from "@/components/reports/coordinator-reports"

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("estudiantes")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#002855]">Módulo de Reportes</h1>
        <p className="text-gray-600 mt-1">Visualiza estadísticas y reportes sobre el progreso de las tesis</p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Reportes y Estadísticas</CardTitle>
          <CardDescription>Selecciona el tipo de reporte que deseas visualizar</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="estudiantes">Estudiantes</TabsTrigger>
              <TabsTrigger value="asesores">Asesores</TabsTrigger>
              <TabsTrigger value="revisores">Revisores</TabsTrigger>
              <TabsTrigger value="coordinador">Coordinador</TabsTrigger>
            </TabsList>
            <TabsContent value="estudiantes">
              <StudentReports />
            </TabsContent>
            <TabsContent value="asesores">
              <AdvisorReports />
            </TabsContent>
            <TabsContent value="revisores">
              <ReviewerReports />
            </TabsContent>
            <TabsContent value="coordinador">
              <CoordinatorReports />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
