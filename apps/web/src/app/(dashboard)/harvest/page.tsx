"use client";

import { Warehouse, Weight, CalendarRange, TrendingUp } from "lucide-react";
import { useHarvestPrediction } from "@/hooks/use-harvest-prediction";
import { SamplingForm } from "@/components/sampling-form";
import { ActivityTimeline, ActivityItem } from "@/components/activity-timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function HarvestPage() {
  const {
    loading: isLoading,
    nextHarvestEstimate: estimatedYield,
    averageYieldPercent: readinessPercentage
  } = useHarvestPrediction();

  const harvestWindow = "Nov 12 – Nov 18";

  const mockedActivities: ActivityItem[] = [
    {
      id: "1",
      date: new Date(Date.now() - 3600000).toISOString(),
      type: "SAMPLING",
      description: "Routine weight sampling (50 fish)",
    },
    {
      id: "2",
      date: new Date(Date.now() - 86400000 * 2).toISOString(),
      type: "SYSTEM",
      description: "Harvest prediction model recalculated",
    },
    {
      id: "3",
      date: new Date(Date.now() - 86400000 * 5).toISOString(),
      type: "SAMPLING",
      description: "Initial baseline weight check",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="flex items-center gap-3 font-bold font-montreal text-3xl tracking-tight text-foreground">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 border border-violet-500/20 shadow-sm">
            <Warehouse className="h-5 w-5" />
          </div>
          Harvest Prediction & Planning
        </h1>
        <p className="font-mono text-muted-foreground text-sm max-w-2xl">
          Predictive yield analysis powered by biomass sampling data. Record new samples to continuously improve forecast accuracy.
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
                  <Weight className="h-3.5 w-3.5" />
                  Estimated Yield
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold font-montreal tracking-tight">{estimatedYield} <span className="text-lg text-muted-foreground">kg</span></div>
              </CardContent>
            </Card>
            <Card className="border-separator/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  <CalendarRange className="h-3.5 w-3.5" />
                  Harvest Window
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold font-montreal tracking-tight">{harvestWindow}</div>
              </CardContent>
            </Card>
            <Card className="border-separator/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Harvest Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold font-montreal tracking-tight text-emerald-600">{readinessPercentage}<span className="text-lg">%</span></div>
              </CardContent>
            </Card>
          </div>
        )}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <SamplingForm />
        </div>
        <div>
          <ActivityTimeline activities={mockedActivities} />
        </div>
      </section>
    </div>
  );
}
