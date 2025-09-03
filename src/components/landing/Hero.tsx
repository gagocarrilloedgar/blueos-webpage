import { ArrowRightIcon } from "@radix-ui/react-icons";

import BlurFade from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import Safari from "@/components/ui/safari";
import WordRotate from "@/components/ui/word-rotate";

export function Hero() {
  return (
    <section className="flex flex-col gap-2 text-center px-2 md:px-0">
      <BlurFade delay={0.3} inView>
        <span className="text-black bg-clip-text text-center text-5xl md:text-6xl font-semibold leading-none text-transparent dark:text-white py-2">
          <span className="relative inline-block text-white">
            <span className="absolute -inset-2 bg-blue-400 transform -skew-y-2 -translate-y-2"></span>
            <span className="relative z-10">BlueDesk</span>
          </span>
        </span>
      </BlurFade>
      <BlurFade delay={0.3 * 2} inView>
        <span className="text-black text-4xl md:text-6xl">
          Effortless
          <strong>
            <WordRotate
              duration={2000}
              words={["helpdesk", "support", "ticket", "customer"]}
            />
          </strong>
          system for AI projects
        </span>
      </BlurFade>

      <BlurFade delay={0.3 * 3} inView>
        <p className="text-xs px-20 md:text-xl md:px-0">
          API-first helpdesk with ready-to-use components, mail-to-ticket conversion,
          and multi-tenant support.
          <br />
          Built for AI projects with configurable portal access and role management.
          <br />
          <span className="text-blue-500 font-semibold">Open source & self-hostable</span>
        </p>
        <section className="flex flex-col items-center pt-12">
          <Button className="bg-blue-400 hover:bg-blue-500" asChild>
            <a href="/signup">
              Join the waitlist
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Demo />
        </section>
      </BlurFade>
    </section>
  );
}

export function Demo() {
  return (
    <div className="w-[400px] lg:flex relative mt-10  md:w-[800px] flex-col items-center justify-center overflow-hidden bg-transparent rounded-[9px] md:shadow-xl">
      <Safari
        url="https://app.useBlueDesk.com"
        className="h-full w-full object-contain"
        src="/homepage.png"
      />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
