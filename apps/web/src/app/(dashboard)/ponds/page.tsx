"use client";

import { useState } from "react";
import { Waves, MapPin, Dna, Activity } from "lucide-react";
import { StockingManagement } from "@/components/stocking-management";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Pond {
  id: string;
  name: string;
  location: string;
  species: string;
  status: "Active" | "Preparation" | "Maintenance";
  capacity: string;
}

export default function PondsPage() {
  const [ponds] = useState<Pond[]>([
    {
      id: "p1",
      name: "Alpha Pond",
      location: "North Sector",
      species: "Clarias gariepinus",
      status: "Active",
      capacity: "5000 individuals",
    },
    {
      id: "p2",
      name: "Beta Pond",
      location: "East Sector",
      species: "Clarias gariepinus",
      status: "Preparation",
      capacity: "4500 individuals",
    },
  ]);

  const statusColor: Record<string, string> = {
    Active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    Preparation: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    Maintenance: "bg-red-500/10 text-red-600 border-red-500/20",
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="flex items-center gap-3 font-bold font-montreal text-3xl tracking-tight text-foreground">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 border border-teal-500/20 shadow-sm">
            <Waves className="h-5 w-5" />
          </div>
          Pond Management
        </h1>
        <p className="font-mono text-muted-foreground text-sm max-w-2xl">
          Overview of all pond infrastructure. Monitor pond status, species allocation, and register new cultivation cycles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {ponds.length === 0 ? (
            <div className="relative overflow-hidden rounded-xl border border-separator/10 bg-background p-12 shadow-sm text-center">
              <p className="font-mono text-sm text-muted-foreground">No ponds available.</p>
            </div>
          ) : (
            ponds.map((pond) => (
              <Card key={pond.id} className="border-separator/10">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-montreal text-lg tracking-tight">{pond.name}</CardTitle>
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusColor[pond.status] || ""}`}>
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
                      </span>
                      {pond.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-muted-foreground" />
                      <div>
                        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Location</div>
                        <div className="text-sm font-medium text-foreground">{pond.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Dna className="h-3.5 w-3.5 mt-0.5 shrink-0 text-muted-foreground" />
                      <div>
                        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Species</div>
                        <div className="text-sm font-medium text-foreground">{pond.species}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Activity className="h-3.5 w-3.5 mt-0.5 shrink-0 text-muted-foreground" />
                      <div>
                        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Capacity</div>
                        <div className="text-sm font-medium text-foreground">{pond.capacity}</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-separator/10">
                    <Button variant="outline" size="sm" className="font-mono text-xs tracking-wider">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="lg:col-span-1">
          <StockingManagement />
        </div>
      </div>
    </div>
  );
}
