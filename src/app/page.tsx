export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#000', color: '#FFD700', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>VIPA Fast 30 - Onboarding Tracker</h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '1px solid #FFD700' }}>New Agents - 4 Week Plan</h2>
        <ul>
          <li><strong>Week 1:</strong> Kickoff Call, Contracting, Licensing, CRM Setup</li>
          <li><strong>Week 2:</strong> Product Training, CRM Practice, Quote Engine</li>
          <li><strong>Week 3:</strong> Lead Generation, Scripting, Appointment Setting</li>
          <li><strong>Week 4:</strong> Submit First Policy, Celebrate Win, Month 2 Planning</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '1px solid #FFD700' }}>Experienced Agents - 4 Week Plan</h2>
        <ul>
          <li><strong>Week 1:</strong> Fast-Track Contracting, CRM Refresher, Product Positioning</li>
          <li><strong>Week 2:</strong> Advanced Product Training, Case Design, Underwriting Tips</li>
          <li><strong>Week 3:</strong> Lead Program, Calendar Setup, Appointments</li>
          <li><strong>Week 4:</strong> Submit Policies, Referral Strategy, Scaling Plan</li>
        </ul>
      </section>
    </div>
  );
}
