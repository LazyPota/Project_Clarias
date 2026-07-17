"use client";

import { Fish, Utensils, Gauge, Clock } from "lucide-react";
import { useFeedingData } from "@/hooks/use-feeding-data";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeedingManagementPage() {
  const { events: dailyLogs, loading: isLoading, totalFeedKg: totalConsumption } = useFeedingData();
  const feedEfficiency = 85;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="flex items-center gap-3 font-bold font-montreal text-3xl tracking-tight text-foreground">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 shadow-sm">
            <Fish className="h-5 w-5" />
          </div>
          Feeding Management
        </h1>
        <p className="font-mono text-muted-foreground text-sm max-w-2xl">
          Track daily feed consumption, monitor efficiency ratios, and review historical feeding logs across all active ponds.
        </p>
      </div>

      <section>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-separator/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  <Utensils className="h-3.5 w-3.5" />
                  Total Feed Consumption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-montreal tracking-tight">{totalConsumption} <span className="text-lg text-muted-foreground">kg</span></div>
              </CardContent>
            </Card>
            <Card className="border-separator/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  <Gauge className="h-3.5 w-3.5" />
                  Feed Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-montreal tracking-tight text-emerald-600">{feedEfficiency}<span className="text-lg">%</span></div>
              </CardContent>
            </Card>
            <Card className="border-separator/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  <Clock className="h-3.5 w-3.5" />
                  Next Scheduled Feeding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-montreal tracking-tight">08:00 <span className="text-lg text-muted-foreground">AM</span></div>
              </CardContent>
            </Card>
          </div>
        )}
      </section>

      <section className="relative overflow-hidden rounded-xl border border-separator/10 bg-background p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between border-separator/10 border-b pb-4">
          <div>
            <h2 className="font-bold font-montreal text-xl text-foreground">Daily Feeding Logs</h2>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Chronological Record</p>
          </div>
        </div>
        {isLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-14 rounded-lg" />
            <Skeleton className="h-14 rounded-lg" />
            <Skeleton className="h-14 rounded-lg" />
          </div>
        ) : dailyLogs.length > 0 ? (
          <div className="flex flex-col gap-3">
            {dailyLogs.map((log, index) => {
              const dateObj = new Date(log.date);
              const dateStr = dateObj.toLocaleDateString();
              const timeStr = dateObj.toLocaleTimeString();

              return (
                <div key={index} className="flex items-center justify-between rounded-lg border border-separator/10 bg-muted/20 px-4 py-3 transition-colors hover:bg-muted/40">
                  <div>
                    <div className="font-montreal font-semibold text-sm text-foreground">{dateStr}</div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{timeStr}</div>
                  </div>
                  <div className="font-bold font-montreal text-lg tracking-tight">{log.amountKg} <span className="text-sm text-muted-foreground">kg</span></div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">No feeding logs available.</p>
          </div>
        )}
      </section>
    </div>
  );
}
