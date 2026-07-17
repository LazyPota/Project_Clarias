"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function SamplingForm() {
  const [samplingDate, setSamplingDate] = useState("");
  const [sampleSize, setSampleSize] = useState("");
  const [totalWeight, setTotalWeight] = useState("");
  const [averageWeight, setAverageWeight] = useState("");

  useEffect(() => {
    const size = Number(sampleSize);
    const weight = Number(totalWeight);
    if (size > 0 && weight >= 0) {
      setAverageWeight((weight / size).toFixed(2));
    } else {
      setAverageWeight("");
    }
  }, [sampleSize, totalWeight]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      samplingDate,
      sampleSize: Number(sampleSize),
      totalWeight: Number(totalWeight),
      averageWeight: Number(averageWeight),
    });
    setSamplingDate("");
    setSampleSize("");
    setTotalWeight("");
    setAverageWeight("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sampling Management</CardTitle>
        <CardDescription>Record manual fish weight sampling.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="samplingDate">Sampling Date</Label>
            <Input
              id="samplingDate"
              type="date"
              value={samplingDate}
              onChange={(e) => setSamplingDate(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="sampleSize">Sample Size (Number of Fish)</Label>
            <Input
              id="sampleSize"
              type="number"
              min="1"
              value={sampleSize}
              onChange={(e) => setSampleSize(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="totalWeight">Total Weight (g)</Label>
            <Input
              id="totalWeight"
              type="number"
              min="0"
              value={totalWeight}
              onChange={(e) => setTotalWeight(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="averageWeight">Calculated Average Weight (g)</Label>
            <Input
              id="averageWeight"
              type="text"
              value={averageWeight}
              disabled
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
