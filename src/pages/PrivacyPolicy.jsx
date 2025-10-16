import { useEffect, useMemo, useState } from "react";

/**
 * Responsive Privacy Policy for EduuXpert
 * ------------------------------------------------------
 * - Built with React + TailwindCSS (no external deps)
 * - Clean, print-friendly, a11y-friendly
 * - Sticky in-page Table of Contents (TOC) on large screens
 * - Mobile-first layout
 *
 * How to use:
 *  <PrivacyPolicy
 *    appName="EduuXpert"
 *    companyName="EduuXpert Technologies Pvt. Ltd."
 *    contactEmail="privacy@eduuxpert.com"
 *    addressLine1="Somewhere Road"
 *    addressLine2="City, State, PIN, India"
 *    lastUpdated="September 3, 2025"
 *  />
 *
 * Notes:
 * - This is a general template. Consult your counsel to tailor it to your exact data practices.
 */
export default function PrivacyPolicy({
  appName = "EduuXpert",
  companyName = "Asv Consulting Services Pvt. Ltd.",
  contactEmail = "info@acstechconsulting.com",
  addressLine1 = "B-06, H-169, Sector 63 Noida, U.P. 201301, India",
  addressLine2 = "243-C, Kapilpuri, Behind Union Bank of India, Bashratpur, Medical College Road, Gorakhpur, U.P. 273004, India",
  lastUpdated = "September 3, 2025",
}) {
  const sections = useMemo(
    () => [
      { id: "introduction", title: `Introduction` },
      { id: "scope", title: `Scope` },
      { id: "data-we-collect", title: `Data We Collect` },
      { id: "how-we-use-data", title: `How We Use Data` },
      { id: "lawful-bases", title: `Lawful Bases (GDPR)` },
      { id: "cookies", title: `Cookies & Similar Tech` },
      { id: "analytics", title: `Analytics & Advertising` },
      { id: "sharing", title: `Sharing & Disclosures` },
      { id: "storage-security", title: `Storage, Security & Retention` },
      { id: "international", title: `International Transfers` },
      { id: "your-rights", title: `Your Rights` },
      { id: "childrens-privacy", title: `Children’s Privacy` },
      { id: "third-parties", title: `Third-Party Services` },
      { id: "changes", title: `Changes to This Policy` },
      { id: "contact", title: `Contact Us` },
    ],
    []
  );

  // Track the active section for the TOC highlight
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    const observers = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(s.id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <p className="text-sm text-gray-500">Privacy Policy</p>
          <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {appName} Privacy Policy
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-gray-100">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              Effective: {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-gray-100">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500" aria-hidden />
              Region: Global
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* TOC */}
        <nav className="lg:col-span-4 xl:col-span-3">
          <div className="hidden lg:block sticky top-6 space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              On this page
            </h2>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-gray-100 focus:bg-gray-100 outline-none ${
                      active === s.id
                        ? "bg-gray-100 font-medium text-slate-900"
                        : "text-gray-700"
                    }`}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main sections */}
        <article className="lg:col-span-8 xl:col-span-9 space-y-10">
          <Section id="introduction" title="Introduction">
            <p>
              This Privacy Policy explains how <strong>{companyName}</strong> ("we",
              "us", or "our") collects, uses, discloses, and safeguards your
              information when you use {appName} (the "Service"). By accessing
              or using the Service, you agree to the practices described here.
              If you disagree, please discontinue use.
            </p>
            <Callout>
              This document is a general template and does not constitute legal
              advice. Your actual practices should be reviewed by legal counsel.
            </Callout>
          </Section>

          <Section id="scope" title="Scope">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Applies to our websites, web apps, mobile apps, and related
                services that link to this policy.
              </li>
              <li>
                Does not cover third-party websites, services, or content that
                we do not control, even if linked from the Service.
              </li>
            </ul>
          </Section>

          <Section id="data-we-collect" title="Data We Collect">
            <h4 className="font-semibold text-slate-900">Information you provide</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Account details (name, email, phone, role, institution).</li>
              <li>Profile and preferences (class, subjects, language, time zone).</li>
              <li>Content you create or upload (assignments, grades, resources, messages).</li>
              <li>Support requests and feedback.</li>
            </ul>
            <h4 className="mt-5 font-semibold text-slate-900">Information we collect automatically</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Usage data (features used, clicks, pages, time on page).</li>
              <li>Device & log data (IP address, browser, OS, device identifiers).</li>
              <li>Approximate location (derived from IP for security & analytics).</li>
              <li>Cookies and similar technologies (see Cookies section).</li>
            </ul>
            <h4 className="mt-5 font-semibold text-slate-900">Information from third parties</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Single sign-on providers (e.g., Google/Microsoft) with your consent.</li>
              <li>Payment processors (limited billing metadata, no full card details).</li>
              <li>Institutional partners (rosters, classes) as instructed by schools.</li>
            </ul>
          </Section>

          <Section id="how-we-use-data" title="How We Use Data">
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the Service and features.</li>
              <li>Create and manage accounts; authenticate users.</li>
              <li>Personalize content and experiences.</li>
              <li>Provide customer support and respond to requests.</li>
              <li>Monitor usage, troubleshoot issues, and ensure security.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
              <li>Communicate updates, security alerts, and administrative messages.</li>
              <li>With consent, send product tips, surveys, and marketing.</li>
            </ul>
          </Section>

          <Section id="lawful-bases" title="Lawful Bases (GDPR)">
            <p>Where the GDPR or similar laws apply, we rely on:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Contract</strong> – to provide the Service you request.</li>
              <li><strong>Legitimate interests</strong> – to operate, secure, and improve {appName}.</li>
              <li><strong>Consent</strong> – for certain analytics/marketing where required.</li>
              <li><strong>Legal obligation</strong> – to comply with applicable laws.</li>
            </ul>
          </Section>

          <Section id="cookies" title="Cookies & Similar Technologies">
            <p>
              We use cookies, local storage, and similar technologies to remember
              preferences, maintain sessions, analyze usage, and enhance
              security. You can usually control cookies via your browser settings
              and other tools. Disabling cookies may affect certain features.
            </p>
          </Section>

          <Section id="analytics" title="Analytics & Advertising">
            <p>
              We may use privacy-focused analytics to understand feature
              adoption and performance. Where we use third-party analytics or
              advertising tools, data is shared as necessary to operate those
              tools. Where legally required, we seek your consent before
              activating non-essential analytics/advertising cookies.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Aggregate reporting and trend analysis.</li>
              <li>IP masking or truncation where feasible.</li>
              <li>Opt-out options via in-product controls or browser settings.</li>
            </ul>
          </Section>

          <Section id="sharing" title="Sharing & Disclosures">
            <p>
              We do not sell personal information. We share information only as
              described below and as required by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Service providers</strong> who process data on our behalf (hosting,
                email, analytics, error monitoring, payments) under contracts
                with confidentiality and security obligations.
              </li>
              <li>
                <strong>Institutional administrators</strong> (for school-managed accounts)
                with access based on the institution’s configuration.
              </li>
              <li>
                <strong>Legal & safety</strong> – to comply with lawful requests, enforce
                policies, or protect rights, property, or safety.
              </li>
              <li>
                <strong>Business transfers</strong> – in connection with mergers, financing,
                or acquisition, subject to this Policy or successor safeguards.
              </li>
            </ul>
          </Section>

          <Section id="storage-security" title="Storage, Security & Retention">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We implement technical and organizational measures appropriate to
                the risk, including encryption in transit, access controls, and
                regular monitoring.
              </li>
              <li>
                We retain personal information only as long as necessary for the
                purposes outlined or as required by law. We also honor
                institution-directed deletion requests.
              </li>
              <li>
                No method of transmission or storage is 100% secure; we strive to
                protect your information but cannot guarantee absolute security.
              </li>
            </ul>
          </Section>

          <Section id="international" title="International Transfers">
            <p>
              Your information may be processed in countries other than your own.
              Where required, we implement appropriate safeguards such as
              standard contractual clauses or comparable transfer mechanisms.
            </p>
          </Section>

          <Section id="your-rights" title="Your Rights">
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access, correct, or delete your personal information.</li>
              <li>Port your data in a machine-readable format.</li>
              <li>Object to or restrict certain processing.</li>
              <li>
                Withdraw consent where processing is based on consent (does not
                affect processing prior to withdrawal).
              </li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="mt-3">
              To exercise rights, contact us at <InlineCode>{contactEmail}</InlineCode>.
              We may need to verify your identity and jurisdiction before
              responding.
            </p>
          </Section>

          <Section id="childrens-privacy" title="Children’s Privacy">
            <p>
              {appName} can be used by schools for students, including minors,
              under the direction and control of the institution and applicable
              law. We do not knowingly collect personal information directly from
              children without appropriate consent or institutional oversight. If
              you believe a child provided us information without proper consent,
              contact us to request deletion.
            </p>
          </Section>

          <Section id="third-parties" title="Third-Party Services">
            <p>
              The Service may link to third-party sites or integrate with
              third-party tools. Your use of such services is governed by their
              own policies, not this one. We encourage you to review their
              privacy practices.
            </p>
          </Section>

          <Section id="changes" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The “Effective”
              date above indicates when this Policy was last revised. Material
              changes will be communicated via the Service or by contacting you
              using the email on your account.
            </p>
          </Section>

          <Section id="contact" title="Contact Us">
            <div className="space-y-3">
              <p>
                If you have questions about this Policy or our privacy practices,
                contact us at <InlineCode>{contactEmail}</InlineCode>.
              </p>
              <address className="not-italic text-gray-700">
                <div className="font-medium">{companyName}</div>
                <div>{addressLine1}</div>
                <div>{addressLine2}</div>
              </address>
            </div>
          </Section>
        </article>
      </div>
    </main>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h3>
      <div className="mt-3 space-y-3 leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

function Callout({ children }) {
  return (
    <div className="mt-4 rounded-xl border bg-amber-50 text-amber-900 px-4 py-3">
      {children}
    </div>
  );
}

function InlineCode({ children }) {
  return (
    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.9em] font-mono">
      {children}
    </code>
  );
}
