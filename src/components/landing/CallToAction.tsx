import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function Cta() {
  return (
    <section>
      <Card className="mx-auto max-w-6xl px-4 sm:px-6 text-center border-none">
        <CardContent>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Manage your next client with BlueOS
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <Button className="bg-blue-400" asChild>
                <Link href="/waitlist">Join the waitlist</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
