const model = {
  automotive: {
    summary:
      "Automotive teams prioritize supplier resilience and rapid sourcing response to absorb EV transition and regional localization shifts.",
    kpis: [
      { label: "Addressable direct spend", value: "$1.26B", context: "Across plants in benchmark peer set" },
      { label: "Cycle-time improvement", value: "-24%", context: "After sourcing + approval automation" },
      { label: "On-time supplier recovery", value: "92%", context: "After incident escalation playbooks" },
      { label: "Contract compliance", value: "88%", context: "After guided buying rollout" }
    ],
    stages: [
      "Source: RFQ bursts for components, index commodity risk weekly.",
      "Contract: lock alternates and dual-source clauses by region.",
      "Procure: enforce approved BOM suppliers in guided catalogs.",
      "Pay/Analyze: track PPV variance and supplier corrective actions."
    ],
    cycleTrend: [74, 71, 66, 61, 58, 56],
    valueRealization: [38, 46, 55, 62]
  },
  aerospace: {
    summary:
      "Aerospace procurement is compliance-heavy with long qualification windows, making supplier risk intelligence and auditability the dominant message.",
    kpis: [
      { label: "Addressable direct spend", value: "$980M", context: "Programs with multi-year commitments" },
      { label: "Qualification lead-time", value: "-19%", context: "With digital sourcing workbenches" },
      { label: "Audit readiness", value: "96%", context: "Policy-controlled approval routing" },
      { label: "Savings captured", value: "7.4%", context: "First 18 months after deployment" }
    ],
    stages: [
      "Source: include traceability and ESG criteria in supplier scoring.",
      "Contract: attach milestone obligations and quality hold points.",
      "Procure: automate exceptions for controlled materials.",
      "Pay/Analyze: reconcile invoice exceptions to contract obligations."
    ],
    cycleTrend: [96, 92, 88, 84, 81, 78],
    valueRealization: [31, 40, 48, 57]
  },
  electronics: {
    summary:
      "Electronics buyers manage demand volatility and short component lifecycles, so speed-to-award and alternate supplier coverage matter most.",
    kpis: [
      { label: "Addressable direct spend", value: "$1.08B", context: "High-mix component footprint" },
      { label: "Award turnaround", value: "-29%", context: "With automated bid analytics" },
      { label: "Alternate source coverage", value: "2.6x", context: "Critical part multi-sourcing rate" },
      { label: "Invoice touchless rate", value: "79%", context: "3-way match automation" }
    ],
    stages: [
      "Source: run scenario bids for supply and price shock events.",
      "Contract: codify lead-time and allocation protections.",
      "Procure: push guided buying for approved alternates.",
      "Pay/Analyze: monitor PPV and supplier OTIF by commodity lane."
    ],
    cycleTrend: [63, 60, 55, 51, 49, 46],
    valueRealization: [41, 50, 60, 67]
  },
  industrial: {
    summary:
      "Industrial machinery organizations emphasize margin defense and procurement standardization across decentralized plants.",
    kpis: [
      { label: "Addressable direct spend", value: "$1.14B", context: "Multi-plant operating model" },
      { label: "PO processing cost", value: "-34%", context: "After AP and workflow automation" },
      { label: "Preferred supplier mix", value: "+22 pts", context: "Post governance reset" },
      { label: "Savings realization", value: "8.1%", context: "Measured against category baselines" }
    ],
    stages: [
      "Source: baseline spend by plant and category family.",
      "Contract: harmonize terms and rebate obligations globally.",
      "Procure: standardize approvals and budget controls.",
      "Pay/Analyze: tie supplier scorecards to plant performance."
    ],
    cycleTrend: [82, 79, 74, 69, 66, 63],
    valueRealization: [35, 44, 53, 61]
  }
};

const competitionByPriority = {
  resilience: [
    ["Jaggaer", 9.2, "Risk-led manufacturers", "Strong supplier risk depth and sourcing orchestration for direct materials."],
    ["SAP Ariba", 8.6, "SAP-centric enterprises", "Broad governance coverage, strongest where SAP backbone already exists."],
    ["Ivalua", 8.3, "Process-customizing teams", "Flexible workflows, but success depends on disciplined operating model."],
    ["Coupa", 8.1, "Indirect-heavy programs", "Great UX and spend visibility; direct material depth may require extensions."]
  ],
  speed: [
    ["Coupa", 9.0, "Distributed buying organizations", "Fast user adoption and guided buying acceleration."],
    ["Jaggaer", 8.8, "Complex sourcing events", "Strong category and sourcing workbench capabilities."],
    ["Ivalua", 8.2, "Process-driven transformations", "Configurable automation with longer governance setup."],
    ["SAP Ariba", 8.0, "ERP-first rollouts", "High control with longer time-to-value in complex landscapes."]
  ],
  savings: [
    ["Jaggaer", 9.1, "Strategic sourcing programs", "Strong bid analytics and sourcing pipeline execution."],
    ["Coupa", 8.7, "Spend visibility initiatives", "Excellent savings identification tied to spend insights."],
    ["SAP Ariba", 8.5, "Large global sourcing teams", "Mature suite breadth with significant implementation effort."],
    ["Ivalua", 8.2, "Governed process innovation", "Can deliver outcomes with higher ownership burden."]
  ],
  compliance: [
    ["SAP Ariba", 9.1, "Highly controlled environments", "Comprehensive controls and ERP-connected governance."],
    ["Jaggaer", 8.7, "Risk-sensitive industries", "Strong supplier lifecycle control and audit support."],
    ["Ivalua", 8.5, "Policy-heavy transformations", "High configurability for nuanced approval governance."],
    ["Coupa", 8.2, "Adoption-focused programs", "Solid controls with strongest value in speed and usability."]
  ]
};

const playbookByPriority = {
  resilience: [
    "Lead with board-level risk narrative and production continuity economics.",
    "Publish supplier tiering framework and disruption response benchmarks.",
    "Activate proof: early-warning alerts and dual-source conversion wins.",
    "Close with quantified uptime and margin-defense outcomes."
  ],
  speed: [
    "Frame cost of delay across NPI and capex initiatives.",
    "Show digital sourcing-to-PO timeline compression by stage.",
    "Promote guided buying adoption plays for plant and category teams.",
    "Close with launch acceleration and working-capital impact."
  ],
  savings: [
    "Anchor on leakage and missed-savings baseline.",
    "Demonstrate sourcing wave design and negotiation analytics.",
    "Use customer stories with realized vs. projected savings transparency.",
    "Close with margin bridge tied to procurement transformation."
  ],
  compliance: [
    "Open with regulatory, ESG, and audit exposure stakes.",
    "Show policy-by-design approvals and clause governance workflows.",
    "Publish role-based control maps for procurement and finance.",
    "Close with audit readiness and exception-rate improvements."
  ]
};

const chapterOrder = ["overview", "workflow", "benchmarks", "competition", "playbook"];
const chapterButtons = [...document.querySelectorAll(".chapter-link")];
const chapters = [...document.querySelectorAll(".chapter")];

const segmentSelect = document.getElementById("segment-select");
const prioritySelect = document.getElementById("priority-select");
const progressBar = document.getElementById("progress-bar");
const segmentSummary = document.getElementById("segment-summary");
const kpiGrid = document.getElementById("kpi-grid");
const workflowGrid = document.getElementById("workflow-grid");
const competitionBody = document.getElementById("competition-body");
const playbookList = document.getElementById("playbook-list");
const summaryOutput = document.getElementById("summary-output");

function showChapter(name) {
  chapterButtons.forEach((button) => button.classList.toggle("active", button.dataset.chapter === name));
  chapters.forEach((section) => section.classList.toggle("active", section.dataset.name === name));

  const current = chapterOrder.indexOf(name);
  const pct = ((current + 1) / chapterOrder.length) * 100;
  progressBar.style.width = `${pct}%`;
}

chapterButtons.forEach((button) => {
  button.addEventListener("click", () => showChapter(button.dataset.chapter));
});

function drawLineChart(canvasId, points, color) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  const min = Math.min(...points) - 4;
  const max = Math.max(...points) + 4;
  const stepX = (w - 70) / (points.length - 1);

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fbfdff";
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "#d7e3f8";
  ctx.beginPath();
  for (let y = 0; y < 5; y += 1) {
    const gy = 25 + (y * (h - 60)) / 4;
    ctx.moveTo(45, gy);
    ctx.lineTo(w - 15, gy);
  }
  ctx.stroke();

  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();

  points.forEach((point, index) => {
    const x = 45 + index * stepX;
    const y = h - 35 - ((point - min) / (max - min)) * (h - 60);
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.stroke();

  ctx.fillStyle = color;
  points.forEach((point, index) => {
    const x = 45 + index * stepX;
    const y = h - 35 - ((point - min) / (max - min)) * (h - 60);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawBarChart(canvasId, bars, color) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fbfdff";
  ctx.fillRect(0, 0, w, h);

  const barWidth = 70;
  const gap = 42;
  const baseX = 52;

  bars.forEach((value, index) => {
    const height = (value / 100) * (h - 65);
    const x = baseX + index * (barWidth + gap);
    const y = h - 35 - height;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, barWidth, height);

    ctx.fillStyle = "#183866";
    ctx.font = "600 14px Inter";
    ctx.fillText(`${value}%`, x + 14, y - 8);
  });
}

function renderData() {
  const segment = segmentSelect.value;
  const priority = prioritySelect.value;
  const data = model[segment];

  segmentSummary.textContent = data.summary;

  kpiGrid.innerHTML = data.kpis
    .map(
      (kpi) => `
        <article class="card">
          <p class="kpi-value">${kpi.value}</p>
          <p class="kpi-label">${kpi.label}</p>
          <p class="kpi-context">${kpi.context}</p>
        </article>
      `
    )
    .join("");

  workflowGrid.innerHTML = data.stages
    .map(
      (item, index) => `
        <article class="card">
          <h3>Stage ${index + 1}</h3>
          <p>${item}</p>
        </article>
      `
    )
    .join("");

  drawLineChart("cycle-chart", data.cycleTrend, "#1b63d6");
  drawBarChart("value-chart", data.valueRealization, "#0f4ea7");

  competitionBody.innerHTML = competitionByPriority[priority]
    .map(
      (row) => `
        <tr>
          <td>${row[0]}</td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
          <td>${row[3]}</td>
        </tr>
      `
    )
    .join("");

  playbookList.innerHTML = playbookByPriority[priority].map((step) => `<li>${step}</li>`).join("");

  summaryOutput.textContent = [
    `Segment: ${segmentSelect.options[segmentSelect.selectedIndex].text}`,
    `Priority: ${prioritySelect.options[prioritySelect.selectedIndex].text}`,
    `Top benchmark signal: ${data.kpis[1].label} (${data.kpis[1].value})`,
    `Recommended lead narrative: ${playbookByPriority[priority][0]}`
  ].join("\n");
}

segmentSelect.addEventListener("change", renderData);
prioritySelect.addEventListener("change", renderData);
document.getElementById("open-summary").addEventListener("click", () => showChapter("playbook"));

showChapter("overview");
renderData();
