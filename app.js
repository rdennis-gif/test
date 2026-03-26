const CHAPTERS = [
  {
    id: 1,
    slug: "procurement-foundations",
    title: "S2P Foundations for Modern Procurement",
    subtitle:
      "Build a shared understanding of Source-to-Pay architecture, operating models, and transformation priorities.",
    foundation:
      "Source-to-Pay unifies sourcing, contracting, supplier collaboration, purchasing, and invoice control into one governance model.",
    businessCase: [
      { metric: "22%", label: "Average reduction in cycle time" },
      { metric: "18%", label: "Increase in compliant spend" },
      { metric: "3.1x", label: "ROI from process digitization" }
    ],
    challenges: [
      "Disconnected tools create handoff delays between sourcing and purchasing.",
      "Contract terms are not consistently reflected in transactional buying.",
      "Low visibility into tail spend limits savings execution."
    ],
    comparison: {
      direct: "Production-critical categories with predictable demand and supplier concentration.",
      indirect: "Service and operational categories with fragmented demand and broad stakeholder input."
    },
    battlefield: [
      ["Dimension", "Traditional ERP-centric", "S2P platform model"],
      ["Source visibility", "Siloed by module", "Unified across pipeline and contract"],
      ["Supplier experience", "Transactional", "Collaborative and guided"],
      ["Value tracking", "Post-event reporting", "In-process KPI and benefit traceability"]
    ],
    resources: [
      {
        title: "Operating Model Blueprint",
        description: "Reference model for category, sourcing, and AP process ownership.",
        url: "https://www.jaggaer.com/"
      },
      {
        title: "S2P Capability Checklist",
        description: "Maturity checklist for governance, process, and platform capability.",
        url: "https://www.cips.org"
      }
    ],
    quiz: {
      question: "Which statement best defines an S2P operating model?",
      options: [
        "A point solution for requisitions only",
        "An integrated model spanning source, contract, buy, and pay",
        "A reporting dashboard disconnected from execution"
      ],
      answer: 1,
      feedback:
        "Correct. S2P links upstream strategic sourcing with downstream transactional control and supplier performance."
    }
  },
  {
    id: 2,
    slug: "category-strategy",
    title: "Category Strategy and Spend Intelligence",
    subtitle: "Use data-led category segmentation to prioritize savings and resilience initiatives.",
    foundation: "High-performing procurement teams align category waves to business risk, savings potential, and change readiness.",
    businessCase: [
      { metric: "9-14%", label: "Addressable savings opportunity" },
      { metric: "35%", label: "Improvement in sourcing throughput" },
      { metric: "2.4x", label: "Faster opportunity qualification" }
    ],
    challenges: [
      "Spend taxonomy is inconsistent across ERP and P2P systems.",
      "Category plans are created yearly but not operationalized monthly.",
      "Business stakeholders challenge assumptions due to low transparency."
    ],
    comparison: {
      direct: "Uses should-cost drivers, BOM dependencies, and supplier capacity signals.",
      indirect: "Uses demand management, policy controls, and service-level normalization."
    },
    battlefield: [
      ["Dimension", "Manual analysis", "Intelligence-led strategy"],
      ["Data refresh", "Quarterly", "Near real-time"],
      ["Scenario testing", "Spreadsheet intensive", "Model-assisted"],
      ["Stakeholder view", "Static decks", "Interactive dashboards"]
    ],
    resources: [
      { title: "Spend Cube Primer", description: "Guide to cleansing, classifying, and enriching spend data.", url: "https://www.gartner.com" },
      { title: "Category Governance Playbook", description: "Cadence and decision rights for category boards.", url: "https://www.mckinsey.com" }
    ],
    quiz: {
      question: "What is the first requirement for high-confidence category strategy?",
      options: ["A complete data foundation", "A supplier portal", "A yearly RFP calendar"],
      answer: 0,
      feedback: "Correct. Reliable taxonomy and spend attribution are prerequisites for prioritization."
    }
  },
  {
    id: 3,
    slug: "strategic-sourcing",
    title: "Strategic Sourcing Execution",
    subtitle: "Convert sourcing strategy into repeatable event execution with measurable outcomes.",
    foundation: "Disciplined sourcing combines event design, stakeholder alignment, and supplier competition with governance at each gate.",
    businessCase: [
      { metric: "27%", label: "Reduction in event cycle time" },
      { metric: "41%", label: "Increase in qualified bids" },
      { metric: "12%", label: "Higher negotiated savings capture" }
    ],
    challenges: [
      "Sourcing events vary by team, creating inconsistent outcomes.",
      "Evaluation criteria are changed late without traceability.",
      "Award rationale is difficult to audit."
    ],
    comparison: {
      direct: "Supplier qualification prioritizes manufacturing capability and continuity risk.",
      indirect: "Supplier qualification prioritizes service quality, SLA adherence, and outcome-based pricing."
    },
    battlefield: [
      ["Dimension", "Ad-hoc events", "Standardized sourcing pipeline"],
      ["Bid evaluation", "Email + spreadsheet", "Structured scorecards"],
      ["Audit trail", "Fragmented", "End-to-end traceability"],
      ["Scenario analysis", "Limited", "Multi-round optimization"]
    ],
    resources: [
      { title: "RFP Template Kit", description: "Enterprise template set for RFx structure and scoring guidance.", url: "https://www.worldcc.com" },
      { title: "Sourcing Governance Checklist", description: "Readiness criteria for launch, negotiation, and award gates.", url: "https://www.apqc.org" }
    ],
    quiz: {
      question: "Which practice improves sourcing event consistency the most?",
      options: ["Using a standard governance gate model", "Running more events in parallel", "Skipping stakeholder workshops"],
      answer: 0,
      feedback: "Correct. Standard governance controls quality, transparency, and pace across teams."
    }
  },
  {
    id: 4,
    slug: "contract-lifecycle",
    title: "Contract Lifecycle Alignment",
    subtitle: "Ensure negotiated terms are executable, monitorable, and linked to procurement controls.",
    foundation: "Contract value is realized when obligations, pricing logic, and milestones are visible inside daily buying behavior.",
    businessCase: [
      { metric: "31%", label: "Lower contract leakage" },
      { metric: "45%", label: "Faster legal turnaround" },
      { metric: "19%", label: "Increase in on-contract purchasing" }
    ],
    challenges: [
      "Signed contracts are stored but rarely operationalized.",
      "Clause deviations are not tracked centrally.",
      "Renewal deadlines are missed due to weak alerts."
    ],
    comparison: {
      direct: "Contracts emphasize delivery windows, quality thresholds, and commodity indexing.",
      indirect: "Contracts emphasize service outcomes, governance meetings, and variable fee structures."
    },
    battlefield: [
      ["Dimension", "Repository-only CLM", "Operational CLM"],
      ["Obligation tracking", "Manual reminders", "Policy-driven alerts"],
      ["Buying controls", "Loosely linked", "Integrated with catalogs and workflows"],
      ["Renewal decisions", "Late and reactive", "Structured and proactive"]
    ],
    resources: [
      { title: "Clause Library Model", description: "Standard clause taxonomy and fallback language controls.", url: "https://www.acc.com" },
      { title: "Renewal Calendar Framework", description: "Playbook for risk-tiered renewal governance.", url: "https://www2.deloitte.com" }
    ],
    quiz: {
      question: "What is the primary risk of repository-only contract management?",
      options: ["Too much legal oversight", "Poor translation of terms into purchasing behavior", "Excess supplier competition"],
      answer: 1,
      feedback: "Correct. Without operational integration, negotiated value often erodes during execution."
    }
  },
  {
    id: 5,
    slug: "supplier-management",
    title: "Supplier Lifecycle and Risk Management",
    subtitle: "Strengthen supplier onboarding, performance governance, and risk responsiveness.",
    foundation: "Supplier lifecycle excellence combines qualification rigor, continuous monitoring, and collaborative performance improvement.",
    businessCase: [
      { metric: "38%", label: "Reduction in onboarding effort" },
      { metric: "26%", label: "Improvement in supplier SLA adherence" },
      { metric: "52%", label: "Faster risk issue triage" }
    ],
    challenges: [
      "Duplicate supplier records create control issues.",
      "Risk and performance data are held in separate systems.",
      "Corrective actions are not consistently closed."
    ],
    comparison: {
      direct: "Risk focus includes continuity, quality incidents, and geopolitical exposure.",
      indirect: "Risk focus includes data privacy, labor model dependency, and service continuity."
    },
    battlefield: [
      ["Dimension", "Periodic supplier reviews", "Continuous lifecycle governance"],
      ["Risk intake", "Manual questionnaires", "Tiered digital workflows"],
      ["Performance management", "Reactive escalations", "KPI + action plans"],
      ["Issue closure", "Email threads", "System-tracked remediation"]
    ],
    resources: [
      { title: "Supplier Tiering Guide", description: "Approach for risk-based segmentation and governance depth.", url: "https://www.iso.org" },
      { title: "Corrective Action Workflow", description: "Template lifecycle for incident response and closure proof.", url: "https://www.bsigroup.com" }
    ],
    quiz: {
      question: "Which capability most improves supplier risk response time?",
      options: ["Quarterly scorecard PDFs", "Always-on risk signals with workflow triggers", "Longer supplier contracts"],
      answer: 1,
      feedback: "Correct. Continuous signals plus predefined playbooks shorten response cycles."
    }
  },
  {
    id: 6,
    slug: "guided-buying",
    title: "Guided Buying and Policy Compliance",
    subtitle: "Drive compliant demand through intuitive buying experiences and policy controls.",
    foundation: "Guided buying aligns user convenience with policy guardrails to reduce maverick spend and improve user adoption.",
    businessCase: [
      { metric: "29%", label: "Increase in touchless requisitions" },
      { metric: "17%", label: "Reduction in maverick spend" },
      { metric: "1.8x", label: "Faster requester cycle time" }
    ],
    challenges: [
      "Users bypass tools due to poor catalog relevance.",
      "Approval paths are over-engineered.",
      "Exception handling is inconsistent across business units."
    ],
    comparison: {
      direct: "Catalog and policy controls map to plant-specific sourcing constraints.",
      indirect: "Catalog and policy controls map to role-based buying channels and thresholds."
    },
    battlefield: [
      ["Dimension", "Basic requisition form", "Experience-led guided buying"],
      ["Policy handling", "After-the-fact checks", "In-line prevention and guidance"],
      ["Catalog quality", "Stale", "Continuously curated"],
      ["User adoption", "Mandated", "Value-led"]
    ],
    resources: [
      { title: "Catalog Health Scorecard", description: "Measures relevance, freshness, and conversion effectiveness.", url: "https://www.forrester.com" },
      { title: "Approval Matrix Design", description: "Principles for streamlined, risk-based approval architecture.", url: "https://www.pwc.com" }
    ],
    quiz: {
      question: "What is the most effective way to reduce maverick spend?",
      options: ["Add more policies", "Improve guided buying usability and relevance", "Remove all thresholds"],
      answer: 1,
      feedback: "Correct. Usable policy-compliant pathways outperform punitive controls alone."
    }
  },
  {
    id: 7,
    slug: "invoice-automation",
    title: "Invoice Automation and AP Control",
    subtitle: "Improve invoice quality, touchless processing, and payment accuracy through automation.",
    foundation: "Invoice automation requires aligned PO quality, matching rules, exception routing, and supplier enablement.",
    businessCase: [
      { metric: "61%", label: "Touchless invoice processing rate" },
      { metric: "24%", label: "Reduction in exception backlog" },
      { metric: "11 days", label: "Average faster cycle to payment approval" }
    ],
    challenges: [
      "Mismatch handling lacks clear accountability.",
      "Suppliers submit inconsistent invoice formats.",
      "Three-way match rules are outdated for category realities."
    ],
    comparison: {
      direct: "Matching emphasizes receipt integrity, quantity tolerance, and quality holds.",
      indirect: "Matching emphasizes milestone validation, service acceptance, and contract rate tables."
    },
    battlefield: [
      ["Dimension", "Manual AP review", "Rules-driven AP automation"],
      ["Supplier submissions", "Email/PDF heavy", "Portal and EDI enabled"],
      ["Exception ownership", "Ambiguous", "Workflow-routed and tracked"],
      ["Payment confidence", "Variable", "Predictable and auditable"]
    ],
    resources: [
      { title: "Exception Playbook", description: "Escalation design for mismatch types and ownership.", url: "https://www.ifac.org" },
      { title: "Supplier Enablement Kit", description: "Template communication and milestones for digital invoicing.", url: "https://www.sharedserviceslink.com" }
    ],
    quiz: {
      question: "What drives the highest sustainable touchless invoice rate?",
      options: ["More AP headcount", "Aligned PO quality and matching policies", "Longer payment terms"],
      answer: 1,
      feedback: "Correct. Upstream purchase quality and clear matching rules are foundational."
    }
  },
  {
    id: 8,
    slug: "analytics-kpis",
    title: "Analytics, KPIs, and Value Realization",
    subtitle: "Establish a measurable procurement performance system tied to strategic outcomes.",
    foundation: "KPI systems should connect operational process indicators to financial and risk outcomes with executive-ready reporting.",
    businessCase: [
      { metric: "47%", label: "Improvement in KPI trust" },
      { metric: "33%", label: "Faster executive decision cycles" },
      { metric: "2.1x", label: "Gain in realized vs. negotiated savings confidence" }
    ],
    challenges: [
      "Definitions differ across finance and procurement teams.",
      "Dashboards show activity, not value realization.",
      "Target ownership is unclear by metric."
    ],
    comparison: {
      direct: "KPIs include material cost variance, supplier OTIF, and cost-to-serve sensitivity.",
      indirect: "KPIs include policy compliance, service quality, and budget adherence."
    },
    battlefield: [
      ["Dimension", "Report-centric", "Decision-centric analytics"],
      ["Metric governance", "Local definitions", "Enterprise KPI dictionary"],
      ["Savings tracking", "One-time capture", "Lifecycle realization"],
      ["Executive confidence", "Moderate", "High"]
    ],
    resources: [
      { title: "KPI Dictionary Template", description: "Standardized definition model for S2P and finance metrics.", url: "https://www.apqc.org" },
      { title: "Value Realization Framework", description: "Controls for validated and auditable benefit tracking.", url: "https://www.kearney.com" }
    ],
    quiz: {
      question: "Which KPI design principle is most important for leadership trust?",
      options: ["High visual complexity", "Cross-functional definition ownership", "Weekly manual data edits"],
      answer: 1,
      feedback: "Correct. Shared ownership and agreed definitions prevent conflicting interpretations."
    }
  },
  {
    id: 9,
    slug: "adoption-roadmap",
    title: "Transformation Roadmap and Adoption",
    subtitle: "Sequence capability deployment and change adoption to sustain procurement transformation outcomes.",
    foundation: "Transformation succeeds when capability rollout, operating model change, and user adoption are managed as one program.",
    businessCase: [
      { metric: "89%", label: "Program milestone adherence" },
      { metric: "4.3/5", label: "Stakeholder adoption score" },
      { metric: "30%", label: "Faster time to value realization" }
    ],
    challenges: [
      "Workstreams are planned independently with weak dependency control.",
      "Training is delivered once, not reinforced by role.",
      "Hypercare exits before behavior stabilizes."
    ],
    comparison: {
      direct: "Rollout sequencing prioritizes production continuity and supplier readiness.",
      indirect: "Rollout sequencing prioritizes requester behavior and policy adoption."
    },
    battlefield: [
      ["Dimension", "Big-bang rollout", "Wave-based transformation"],
      ["Change strategy", "Comms only", "Role-based enablement"],
      ["Hypercare", "Time boxed", "Outcome based"],
      ["Program control", "Milestone reporting", "Benefit and risk governance"]
    ],
    resources: [
      { title: "Adoption Heatmap", description: "Track role-level adoption depth and reinforcement priorities.", url: "https://www.prosci.com" },
      { title: "Wave Planning Toolkit", description: "Templates for dependency mapping and release readiness.", url: "https://www.bain.com" }
    ],
    quiz: {
      question: "What is the best indicator that transformation adoption is real?",
      options: ["Project closure memo", "Sustained behavioral KPI movement", "A single training completion report"],
      answer: 1,
      feedback: "Correct. Persistent KPI changes confirm that new processes are embedded in daily operations."
    }
  }
];

const app = document.getElementById("app");
const state = {
  activePathIndex: 0,
  quizSelection: {}
};

function getCurrentChapterId() {
  const raw = window.location.hash.replace("#", "").trim();
  const id = Number(raw);
  return Number.isInteger(id) && id >= 1 && id <= CHAPTERS.length ? id : 1;
}

function chapterHref(id) {
  return `#${id}`;
}

function render() {
  const chapterId = getCurrentChapterId();
  const chapter = CHAPTERS.find((item) => item.id === chapterId) || CHAPTERS[0];

  app.innerHTML = `
    <header class="site-header">
      <div class="container top-row">
        <div class="brand">JAGGAER S2P Masterclass</div>
        <div aria-label="Internal enablement">Internal Enablement Program</div>
      </div>
      <nav class="container chapter-nav" aria-label="Chapter navigation">
        ${CHAPTERS.map(
          (item) => `
            <a class="chapter-link" href="${chapterHref(item.id)}" aria-current="${item.id === chapter.id ? "page" : "false"}">
              Chapter ${item.id}
            </a>
          `
        ).join("")}
      </nav>
    </header>

    <main class="container">
      <section class="hero">
        <p class="eyebrow">Chapter ${chapter.id} of ${CHAPTERS.length}</p>
        <h1>${chapter.title}</h1>
        <p class="subtitle">${chapter.subtitle}</p>
        <div class="cta-row">
          <a class="button button-primary" href="#foundation">Begin Learning</a>
          <a class="button button-secondary" href="#knowledge-check">Go to Knowledge Check</a>
        </div>
      </section>

      <section class="section" id="learning-path">
        <h2>Your Learning Path</h2>
        <p class="section-intro">Progress through the complete 9-chapter enablement journey. Select any chapter to review its learning outcomes.</p>
        <div class="grid grid-3">
          ${CHAPTERS.map(
            (item, index) => `
              <button class="card path-item ${index === state.activePathIndex ? "active" : ""}" data-path-index="${index}">
                <h3>Chapter ${item.id}</h3>
                <p>${item.title}</p>
                <small>${item.subtitle}</small>
              </button>
            `
          ).join("")}
        </div>
      </section>

      <section class="section" id="foundation">
        <h2>Foundation</h2>
        <p class="section-intro">${chapter.foundation}</p>
        <details class="details">
          <summary>Core concept detail</summary>
          <p>Every chapter translates strategic procurement concepts into repeatable operating practices for enterprise execution.</p>
        </details>
        <details class="details">
          <summary>Why this matters now</summary>
          <p>Market volatility, margin pressure, and supply continuity risks require procurement teams to connect upstream strategy with transactional discipline.</p>
        </details>
      </section>

      <section class="section">
        <h2>Business Case</h2>
        <p class="section-intro">Representative outcomes from high-performing S2P organizations.</p>
        <div class="grid grid-3">
          ${chapter.businessCase
            .map(
              (item) => `
                <article class="card">
                  <p class="metric">${item.metric}</p>
                  <p class="metric-label">${item.label}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <h2>Customer Challenges</h2>
        <p class="section-intro">Common execution barriers observed across enterprise procurement teams.</p>
        <div class="grid grid-3">
          ${chapter.challenges
            .map(
              (challenge) => `
                <article class="card">
                  <h3>Pain Point</h3>
                  <p>${challenge}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <h2>Know the Difference</h2>
        <p class="section-intro">Direct and indirect spend require distinct procurement mechanics and controls.</p>
        <div class="grid grid-2">
          <article class="card">
            <h3>Direct Spend</h3>
            <p>${chapter.comparison.direct}</p>
          </article>
          <article class="card">
            <h3>Indirect Spend</h3>
            <p>${chapter.comparison.indirect}</p>
          </article>
        </div>
      </section>

      <section class="section">
        <h2>Know Your Battlefield</h2>
        <p class="section-intro">Competitive positioning across operating model dimensions.</p>
        <div style="overflow-x:auto;">
          <table class="table">
            <thead>
              <tr>
                ${chapter.battlefield[0].map((head) => `<th>${head}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${chapter.battlefield
                .slice(1)
                .map(
                  (row) => `
                    <tr>
                      ${row.map((cell) => `<td>${cell}</td>`).join("")}
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="section">
        <h2>Go Deeper</h2>
        <p class="section-intro">Curated references to support implementation planning.</p>
        <div class="grid grid-2">
          ${chapter.resources
            .map(
              (resource) => `
                <article class="card">
                  <h3>${resource.title}</h3>
                  <p>${resource.description}</p>
                  <a class="resource-link" href="${resource.url}" target="_blank" rel="noreferrer noopener">Open resource →</a>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section" id="knowledge-check">
        <h2>Test Your Knowledge</h2>
        <p class="section-intro">${chapter.quiz.question}</p>
        ${chapter.quiz.options
          .map(
            (option, index) => `
              <button class="quiz-option" data-quiz-index="${index}">${option}</button>
            `
          )
          .join("")}
        <div class="quiz-feedback" id="quiz-feedback" role="status" aria-live="polite">Select an answer to view feedback.</div>
      </section>

      <section class="section">
        <div class="chapter-pager">
          <a class="button button-secondary" href="${chapterHref(Math.max(1, chapter.id - 1))}">← Previous Chapter</a>
          <a class="button button-primary" href="${chapterHref(Math.min(CHAPTERS.length, chapter.id + 1))}">Next Chapter →</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <strong>JAGGAER S2P Masterclass</strong> · Chapter ${chapter.id} of ${CHAPTERS.length} · Internal training and enablement use only.
      </div>
    </footer>
  `;

  wireInteractiveHandlers(chapter);
}

function wireInteractiveHandlers(chapter) {
  document.querySelectorAll("[data-path-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activePathIndex = Number(button.dataset.pathIndex);
      const targetChapter = CHAPTERS[state.activePathIndex];
      if (targetChapter) {
        window.location.hash = chapterHref(targetChapter.id);
      }
    });
  });

  const feedback = document.getElementById("quiz-feedback");
  document.querySelectorAll("[data-quiz-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.quizIndex);
      state.quizSelection[chapter.id] = selected;
      const correct = selected === chapter.quiz.answer;
      feedback.textContent = correct
        ? chapter.quiz.feedback
        : "Not quite. Re-check the foundation and business case sections, then try again.";
      feedback.style.borderColor = correct ? "#86efac" : "#fde68a";
      feedback.style.background = correct ? "#f0fdf4" : "#fffbeb";
    });
  });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    window.location.hash = "#1";
  }
  render();
});
