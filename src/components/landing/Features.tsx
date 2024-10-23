import {
  Files,
  Folders,
  FolderTree,
  FormInput,
  Globe,
  MessagesSquare
} from "lucide-react";
import Image from "next/image";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 mt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Blue helps you manage projects & clients around the world
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
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
                <FormInput />
                <span>Forms</span>
              </h3>
              <p className="text-[15px] text-black">
                Easilly create custom forms to get feedback, store client
                analytics or let your clients ask for special requests and
                automatically convert then into tasks.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <Folders />
                <span>Projects</span>
              </h3>
              <p className="text-[15px] text-black">
                Create projects just once. Copy paste the project structure you
                like and assign it to a new client. Optionally transfer files,
                requests, and documents.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <MessagesSquare />
                <span>Chats</span>
              </h3>
              <p className="text-[15px] text-black">
                Create chats with your within clients portals or at workspace
                level to coordinate with your mates. You will get our
                recomendated by default but you can create as many as you need
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <Globe />
                <span>Client portals</span>
              </h3>
              <p className="text-[15px] text-black">
                Create portals and hide them until your project is ready. Hide
                and show portals as your clients come and go without loosing
                data.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <FolderTree />
                <span>Documents</span>
              </h3>
              <p className="text-[15px] text-black">
                Create documentation and have a unique collaboration flow by
                sharing it with your clients and allowing them to comment, and
                collaborate.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-foreground">
                <Files />
                <span>Files</span>
              </h3>
              <p className="text-[15px] text-black">
                Forget about third party tools and centralise and share your
                invoces, certifications, signed contracts, and more in a single
                place.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
