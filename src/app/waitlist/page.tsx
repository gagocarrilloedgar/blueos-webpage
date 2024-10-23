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

export default function Login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="z-10 mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Hey there 👋</CardTitle>
          <CardDescription>
            We are getting ready to launch our private beta. Join now and we
            will let you know once we start.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Join BlueOS
            </Button>
          </div>
        </CardContent>
      </Card>
      <DotBackground />
    </div>
  );
}
