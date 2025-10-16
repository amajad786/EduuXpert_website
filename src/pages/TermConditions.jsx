import React from "react";

const TermConditions = () => {
  return (
    <>
      {/* Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-4 text-[#24214b]">
            Terms and Conditions
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to EduuXpert! These Terms and Conditions outline the rules
            and regulations for using our platform. By accessing or using
            EduuXpert, you agree to comply with these terms. If you do not
            agree, please discontinue use immediately.
          </p>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-[#e15601]">
              1. Acceptance of Terms
            </h3>
            <p className="text-gray-700">
              By accessing this platform, you confirm that you are at least 18
              years of age or have obtained parental/guardian consent. You agree
              to use EduuXpert only for lawful purposes.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-[#e15601]">
              2. User Accounts
            </h3>
            <p className="text-gray-700">
              You are responsible for maintaining the confidentiality of your
              login credentials. Any activities conducted using your account
              will be your responsibility.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-[#e15601]">
              3. Intellectual Property
            </h3>
            <p className="text-gray-700">
              All content, branding, and materials available on EduuXpert are
              the property of EduuXpert and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-[#e15601]">
              4. Limitation of Liability
            </h3>
            <p className="text-gray-700">
              EduuXpert will not be held liable for any damages arising from the
              use or inability to use our platform, including but not limited to
              data loss or service interruptions.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-[#e15601]">
              5. Termination
            </h3>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate accounts that violate
              these terms or engage in unauthorized use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-[#e15601]">
              6. Changes to Terms
            </h3>
            <p className="text-gray-700">
              EduuXpert may update these Terms and Conditions periodically. We
              encourage users to review this page regularly to stay informed of
              any changes.
            </p>
          </section>

          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please
            contact us at{" "}
            <a
              href="mailto:info@acstechconsulting.com"
              className="text-blue-600 underline"
            >
              info@acstechconsulting.com
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
};

export default TermConditions;
