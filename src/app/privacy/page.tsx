import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BlueOS",
  description:
    "Privacy Policy for BlueOS - Effortless helpdesk system for AI projects"
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to BlueOS (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). We are committed to protecting your personal
                information and your right to privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website useblueos.com and use our
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name and contact information (email address)</li>
                <li>Account credentials and profile information</li>
                <li>Communication records and support tickets</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Essential cookies for website functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and maintain our helpdesk services</li>
                <li>Process your transactions and manage your account</li>
                <li>Communicate with you about our services</li>
                <li>Improve our platform and user experience</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Service providers:</strong> Third-party vendors who
                  assist in operating our platform
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with
                  mergers or acquisitions
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100%
                secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required by
                law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access and obtain a copy of your personal information</li>
                <li>Rectify inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                We only use essential cookies that are necessary for the proper
                functioning of our website and services. We do not use tracking
                cookies or cookies for advertising purposes. These essential
                cookies cannot be disabled as they are required for basic website
                functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Third-Party Services
              </h2>
              <p className="text-gray-700 mb-4">
                Our platform may integrate with third-party services. This
                Privacy Policy does not cover the practices of third-party
                services, and we encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Children's Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@useblueos.com
                </p>
                <p className="text-gray-700">
                  <strong>Website:</strong> https://useblueos.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
