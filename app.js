const meetings = [
  {
    id: "m1",
    title: "Q1 Product Roadmap Review",
    start: "2026-01-07T15:00:00Z",
    end: "2026-01-07T16:00:00Z",
    attendees: ["Alex Johnson", "Priya Shah", "Marcos Lee"],
    topics: ["Roadmap", "Prioritization"],
    attachments: [
      {
        name: "Q1_Roadmap_v4.pptx",
        summary: "Feature sequencing and release windows for Q1",
        url: "#"
      }
    ]
  },
  {
    id: "m2",
    title: "Customer Escalation Standup",
    start: "2026-01-09T14:30:00Z",
    end: "2026-01-09T15:00:00Z",
    attendees: ["Alex Johnson", "Sofia Kim"],
    topics: ["Escalations", "Customer Health"],
    attachments: [
      {
        name: "Escalation_Status.xlsx",
        summary: "Open escalations and ETA by owner",
        url: "#"
      }
    ]
  },
  {
    id: "m3",
    title: "Hiring Panel Debrief",
    start: "2026-01-15T17:00:00Z",
    end: "2026-01-15T17:45:00Z",
    attendees: ["Priya Shah", "Derek Wells", "Yvonne Diaz"],
    topics: ["Hiring", "Team Planning"],
    attachments: []
  },
  {
    id: "m4",
    title: "Architecture Office Hours",
    start: "2026-02-03T16:00:00Z",
    end: "2026-02-03T17:00:00Z",
    attendees: ["Marcos Lee", "Sofia Kim", "Taylor Brooks"],
    topics: ["Architecture", "Tech Debt"],
    attachments: [
      {
        name: "Platform_TechDebt_Register.docx",
        summary: "Prioritized debt list and remediation tracks",
        url: "#"
      }
    ]
  },
  {
    id: "m5",
    title: "Budget Planning FY27",
    start: "2026-02-11T18:00:00Z",
    end: "2026-02-11T19:00:00Z",
    attendees: ["Alex Johnson", "Casey Morgan", "Priya Shah"],
    topics: ["Finance", "Planning"],
    attachments: [
      {
        name: "FY27_Budget_Draft.xlsx",
        summary: "Headcount and operating expense assumptions",
        url: "#"
      }
    ]
  },
  {
    id: "m6",
    title: "Security Review: Vendor Intake",
    start: "2026-02-18T15:00:00Z",
    end: "2026-02-18T15:30:00Z",
    attendees: ["Taylor Brooks", "Derek Wells"],
    topics: ["Security", "Vendors"],
    attachments: [
      {
        name: "Vendor_Risk_Assessment.pdf",
        summary: "Risk controls and remediation requirements",
        url: "#"
      }
    ]
  },
  {
    id: "m7",
    title: "Roadmap Risks and Dependencies",
    start: "2026-03-05T15:00:00Z",
    end: "2026-03-05T16:30:00Z",
    attendees: ["Alex Johnson", "Marcos Lee", "Priya Shah", "Sofia Kim"],
    topics: ["Roadmap", "Dependencies"],
    attachments: [
      {
        name: "Dependency_Map.png",
        summary: "Cross-team dependency map by quarter",
        url: "#"
      },
      {
        name: "Risk_Heatmap.pdf",
        summary: "Top delivery risks and confidence ratings",
        url: "#"
      }
    ]
  },
  {
    id: "m8",
    title: "1:1 with Alex Johnson",
    start: "2026-03-12T16:00:00Z",
    end: "2026-03-12T16:30:00Z",
    attendees: ["Alex Johnson"],
    topics: ["Coaching", "Career"],
    attachments: [
      {
        name: "Growth_Plan_Alex.docx",
        summary: "Development goals and checkpoint dates",
        url: "#"
      }
    ]
  }
];

const filters = {
  startDate: document.getElementById("start-date"),
  endDate: document.getElementById("end-date"),
  personQuery: document.getElementById("person-query"),
  topicQuery: document.getElementById("topic-query"),
  attachmentQuery: document.getElementById("attachment-query")
};

const statsGrid = document.getElementById("stats-grid");
const peopleBreakdown = document.getElementById("people-breakdown");
const topicBreakdown = document.getElementById("topic-breakdown");
const meetingsBody = document.getElementById("meetings-body");
const attachmentsBody = document.getElementById("attachments-body");
const meetingsCount = document.getElementById("meetings-count");
const attachmentsCount = document.getElementById("attachments-count");

function parseDate(value) {
  return new Date(value);
}

function meetingDurationHours(meeting) {
  const start = parseDate(meeting.start);
  const end = parseDate(meeting.end);
  return (end - start) / (1000 * 60 * 60);
}

function sameOrAfter(date, boundary) {
  return !boundary || date >= new Date(`${boundary}T00:00:00Z`);
}

function sameOrBefore(date, boundary) {
  return !boundary || date <= new Date(`${boundary}T23:59:59Z`);
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function matchesPerson(meeting, query) {
  if (!query) {
    return true;
  }

  return meeting.attendees.some((name) => name.toLowerCase().includes(query));
}

function matchesTopic(meeting, query) {
  if (!query) {
    return true;
  }

  const haystack = `${meeting.title} ${meeting.topics.join(" ")}`.toLowerCase();
  return haystack.includes(query);
}

function matchesAttachment(meeting, query) {
  if (!query) {
    return true;
  }

  const inMeeting = `${meeting.title} ${meeting.topics.join(" ")}`.toLowerCase().includes(query);
  const inAttachment = meeting.attachments.some((file) => {
    const text = `${file.name} ${file.summary}`.toLowerCase();
    return text.includes(query);
  });

  return inMeeting || inAttachment;
}

function getFilteredMeetings() {
  const startBoundary = filters.startDate.value;
  const endBoundary = filters.endDate.value;
  const personQuery = normalize(filters.personQuery.value);
  const topicQuery = normalize(filters.topicQuery.value);
  const attachmentQuery = normalize(filters.attachmentQuery.value);

  return meetings.filter((meeting) => {
    const start = parseDate(meeting.start);
    return (
      sameOrAfter(start, startBoundary) &&
      sameOrBefore(start, endBoundary) &&
      matchesPerson(meeting, personQuery) &&
      matchesTopic(meeting, topicQuery) &&
      matchesAttachment(meeting, attachmentQuery)
    );
  });
}

function summarizeByDimension(filteredMeetings, dimension) {
  const rows = new Map();

  filteredMeetings.forEach((meeting) => {
    const hours = meetingDurationHours(meeting);
    meeting[dimension].forEach((item) => {
      const key = item;
      const current = rows.get(key) || { key, meetings: 0, hours: 0 };
      current.meetings += 1;
      current.hours += hours;
      rows.set(key, current);
    });
  });

  return [...rows.values()].sort((a, b) => b.hours - a.hours).slice(0, 8);
}

function getAttachmentRows(filteredMeetings) {
  const query = normalize(filters.attachmentQuery.value);

  return filteredMeetings.flatMap((meeting) => {
    return meeting.attachments
      .filter((file) => {
        if (!query) {
          return true;
        }

        const haystack = `${file.name} ${file.summary} ${meeting.title} ${meeting.topics.join(" ")}`.toLowerCase();
        return haystack.includes(query);
      })
      .map((file) => ({
        file,
        meeting
      }));
  });
}

function formatHours(value) {
  return `${value.toFixed(2)}h`;
}

function formatDate(iso) {
  return new Date(iso).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function renderStats(filteredMeetings, peopleSummary, topicSummary, attachmentRows) {
  const totalHours = filteredMeetings.reduce((sum, meeting) => sum + meetingDurationHours(meeting), 0);
  const topPerson = peopleSummary[0]?.key || "—";
  const topTopic = topicSummary[0]?.key || "—";

  const cards = [
    ["Meetings", filteredMeetings.length],
    ["Total meeting time", formatHours(totalHours)],
    ["Top person", topPerson],
    ["Top topic", topTopic],
    ["Attachments", attachmentRows.length]
  ];

  statsGrid.innerHTML = cards
    .map(
      ([label, value]) => `
        <article class="stat-card">
          <p class="stat-label">${label}</p>
          <p class="stat-value">${value}</p>
        </article>
      `
    )
    .join("");
}

function renderBreakdown(tbody, rows, emptyMessage) {
  tbody.innerHTML = rows.length
    ? rows
        .map(
          (row) => `
            <tr>
              <td>${row.key}</td>
              <td>${row.meetings}</td>
              <td>${formatHours(row.hours)}</td>
            </tr>
          `
        )
        .join("")
    : `<tr><td colspan="3">${emptyMessage}</td></tr>`;
}

function renderMeetingsTable(filteredMeetings) {
  meetingsBody.innerHTML = filteredMeetings.length
    ? filteredMeetings
        .map(
          (meeting) => `
            <tr>
              <td>${formatDate(meeting.start)}</td>
              <td>${meeting.title}</td>
              <td>${meeting.attendees.join(", ")}</td>
              <td>${meeting.topics.join(", ")}</td>
              <td>${formatHours(meetingDurationHours(meeting))}</td>
            </tr>
          `
        )
        .join("")
    : `<tr><td colspan="5">No meetings found for the current filters.</td></tr>`;

  meetingsCount.textContent = `${filteredMeetings.length} meeting(s) shown`;
}

function renderAttachmentsTable(rows) {
  attachmentsBody.innerHTML = rows.length
    ? rows
        .map(
          ({ file, meeting }) => `
            <tr>
              <td><a href="${file.url}">${file.name}</a><br /><span class="hint">${file.summary}</span></td>
              <td>${meeting.title}</td>
              <td>${formatDate(meeting.start)}</td>
              <td>${meeting.topics.join(", ")}</td>
            </tr>
          `
        )
        .join("")
    : `<tr><td colspan="4">No attachments matched.</td></tr>`;

  attachmentsCount.textContent = `${rows.length} attachment(s) shown`;
}

function render() {
  const filteredMeetings = getFilteredMeetings();
  const peopleSummary = summarizeByDimension(filteredMeetings, "attendees");
  const topicSummary = summarizeByDimension(filteredMeetings, "topics");
  const attachmentRows = getAttachmentRows(filteredMeetings);

  renderStats(filteredMeetings, peopleSummary, topicSummary, attachmentRows);
  renderBreakdown(peopleBreakdown, peopleSummary, "No attendees for this filter set.");
  renderBreakdown(topicBreakdown, topicSummary, "No topics for this filter set.");
  renderMeetingsTable(filteredMeetings);
  renderAttachmentsTable(attachmentRows);
}

Object.values(filters).forEach((input) => {
  input.addEventListener("input", render);
  input.addEventListener("change", render);
});

document.getElementById("clear-filters").addEventListener("click", () => {
  Object.values(filters).forEach((input) => {
    input.value = "";
  });
  render();
});

render();
