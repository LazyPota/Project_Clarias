import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, AlertCircle, Beaker, Fish } from "lucide-react";

export interface ActivityItem {
  id: string;
  date: string;
  type: "FEEDING" | "SAMPLING" | "ALERT" | "SYSTEM";
  description: string;
}

export function ActivityTimeline({ activities }: { activities: ActivityItem[] }) {
  const getIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "FEEDING":
        return <Fish className="h-4 w-4 text-blue-500" />;
      case "SAMPLING":
        return <Beaker className="h-4 w-4 text-green-500" />;
      case "ALERT":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "SYSTEM":
        return <Activity className="h-4 w-4 text-neutral-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        {activities.length === 0 ? (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">No recent activities.</p>
        ) : (
          <div className="space-y-0">
            {activities.map((activity, index) => (
              <div key={activity.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 shrink-0">
                    {getIcon(activity.type)}
                  </div>
                  {index !== activities.length - 1 && (
                    <div className="flex-1 w-px border-l-2 border-neutral-200 dark:border-neutral-800 my-1 min-h-[1.5rem]" />
                  )}
                </div>
                <div className="flex flex-col pb-6">
                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {activity.description}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {new Date(activity.date).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
