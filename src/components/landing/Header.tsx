import { Eclipse } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-lg bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Eclipse />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <Button variant="ghost" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button>
              <a href="/signup">Register</a>
            </Button>
          </ul>
        </div>
      </div>
    </header>
  );
}
