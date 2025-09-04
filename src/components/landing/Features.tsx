import {
  Code,
  Mail,
  Settings,
  Users,
  Zap,
  TicketIcon
} from "lucide-react";
import Image from "next/image";

export default function FeaturesPlanet() {
  return (
    <section
      id="features"
      className="relative before:absolute before:inset-0 before:-z-20 mt-6"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              BlueOS streamlines AI project support with powerful helpdesk
              features
            </h2>
          </div>
          {/* Planet */}
          <div className="hidden lg:block pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src="/images/planet.png"
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src="/images/planet-overlay.svg"
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src="/images/planet-tag-01.png"
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src="/images/planet-tag-02.png"
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src="/images/planet-tag-03.png"
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src="/images/planet-tag-04.png"
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <Code />
                <span>API-First Design</span>
              </h3>
              <p className="text-[15px] text-black">
                Integrate seamlessly with your existing systems using our
                comprehensive REST API. Build custom workflows and automate
                support processes with ready-to-use endpoints.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <Mail />
                <span>Mail-to-Ticket</span>
              </h3>
              <p className="text-[15px] text-black">
                Automatically convert customer emails into organized support
                tickets. Set up custom routing rules and let your team focus
                on solving problems, not managing emails.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <TicketIcon />
                <span>Ready Components</span>
              </h3>
              <p className="text-[15px] text-black">
                Drop-in React components for ticket creation, status tracking,
                and user portals. Customize styling to match your brand and
                integrate in minutes, not weeks.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <Users />
                <span>Multi-Tenant Support</span>
              </h3>
              <p className="text-[15px] text-black">
                Serve multiple clients with complete data isolation. Each
                tenant gets their own dashboard, users, and customization
                options while sharing the same infrastructure.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <Settings />
                <span>Portal Access Control</span>
              </h3>
              <p className="text-[15px] text-black">
                Configure granular access permissions for different user roles.
                Create custom portals with tailored views and functionality
                for admins, agents, and end-users.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <Zap />
                <span>AI-Powered Automation</span>
              </h3>
              <p className="text-[15px] text-black">
                Leverage AI to automatically categorize tickets, suggest
                responses, and route issues to the right team members. Built
                specifically for AI project support workflows.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
