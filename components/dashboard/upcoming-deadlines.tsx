import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function UpcomingDeadlines() {
  const deadlines = [
    {
      id: 1,
      title: "Entrega de avance de marco teórico",
      date: "15 de Abril, 2023",
      progress: 75,
    },
    {
      id: 2,
      title: "Revisión de metodología",
      date: "28 de Abril, 2023",
      progress: 40,
    },
    {
      id: 3,
      title: "Entrega de resultados preliminares",
      date: "10 de Mayo, 2023",
      progress: 20,
    },
    {
      id: 4,
      title: "Reunión con asesor",
      date: "15 de Mayo, 2023",
      progress: 0,
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Próximas Entregas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{deadline.title}</span>
                <span className="text-xs text-gray-500">{deadline.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={deadline.progress} className="h-2" />
                <span className="text-xs font-medium">{deadline.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
