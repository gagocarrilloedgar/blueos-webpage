"use client";

import { DotBackground } from "@/components/DotBackground";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="z-10 mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Hey there 👋</CardTitle>
          <CardDescription>
            We are getting ready to launch our private beta. Join the waitlist
            to enjoy a <strong>35% discount</strong> after during the first year
            the launch
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
      <DotBackground />
    </div>
  );
}
