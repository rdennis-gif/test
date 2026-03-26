# Work Calendar Usage App

A static web app for analyzing calendar usage, designed for Outlook workflows.

## What it shows

- Who you meet with most frequently and for the most time.
- How many meetings you have and total meeting hours in a filtered period.
- What topics consume the most time.
- Meetings filtered by person, topic, and date range.
- Meeting attachments with keyword search against file name/summary and meeting topic/title.

## Local run

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Open:

- `http://127.0.0.1:8000/`

## Notes about Outlook integration

This version is a front-end prototype using seeded meeting data in `app.js`.
To use real Outlook data, replace the sample data source with Graph API-backed meeting + attachment data.
