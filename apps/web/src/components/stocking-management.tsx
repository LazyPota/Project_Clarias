"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function StockingManagement() {
  const [stockingDate, setStockingDate] = useState("");
  const [totalSeedCount, setTotalSeedCount] = useState("");
  const [initialAverageWeight, setInitialAverageWeight] = useState("");
  const [species, setSpecies] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      stockingDate,
      totalSeedCount: Number(totalSeedCount),
      initialAverageWeight: Number(initialAverageWeight),
      species,
    });
    setStockingDate("");
    setTotalSeedCount("");
    setInitialAverageWeight("");
    setSpecies("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stocking Management</CardTitle>
        <CardDescription>Register a new cultivation cycle.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="stockingDate">Stocking Date</Label>
            <Input
              id="stockingDate"
              type="date"
              value={stockingDate}
              onChange={(e) => setStockingDate(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="totalSeedCount">Total Seed Count</Label>
            <Input
              id="totalSeedCount"
              type="number"
              value={totalSeedCount}
              onChange={(e) => setTotalSeedCount(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="initialAverageWeight">Initial Average Weight (g)</Label>
            <Input
              id="initialAverageWeight"
              type="number"
              value={initialAverageWeight}
              onChange={(e) => setInitialAverageWeight(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="species">Species/Strain</Label>
            <Input
              id="species"
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
