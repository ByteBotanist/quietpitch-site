export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-white/80 leading-7 text-sm">
          <p>
            Quiet Pitch collects information voluntarily submitted through advisor contact forms,
            including name, email address, phone number, country, state, and optional messages.
          </p>

          <p>
            Submitted lead information is securely stored and delivered only to the advisor
            associated with the selected page.
          </p>

          <p>
            Quiet Pitch does not sell prospect information to third parties.
          </p>

          <p>
            Platform data may be processed for analytics, fraud prevention, lead delivery,
            and service reliability.
          </p>

          <p>
            Advisors remain responsible for their own privacy obligations regarding client data.
          </p>
        </div>
      </div>
    </main>
  );
}