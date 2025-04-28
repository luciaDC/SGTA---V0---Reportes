import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: "Dr. García",
      action: "Comentó tu entrega",
      thesis: "Sistema de reconocimiento facial",
      time: "Hace 2 horas",
    },
    {
      id: 2,
      user: "Coordinador",
      action: "Aprobó tu tema de tesis",
      thesis: "Sistema de reconocimiento facial",
      time: "Hace 1 día",
    },
    {
      id: 3,
      user: "Sistema",
      action: "Recordatorio de entrega",
      thesis: "Sistema de reconocimiento facial",
      time: "Hace 2 días",
    },
    {
      id: 4,
      user: "Dr. Rodríguez",
      action: "Fue asignado como tu asesor",
      thesis: "Sistema de reconocimiento facial",
      time: "Hace 1 semana",
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="rounded-full bg-[#006699] p-2 text-white">
                <span className="text-xs">{activity.user.substring(0, 2)}</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.thesis}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
