The AI Meeting Agent – "Minutes to Action" is different from other tools
because it doesn't just summarize meetings — it also finds action points,
assigns tasks, and helps teams follow up.

It works with any meeting transcript, not just Zoom or Teams, and uses IBM
watsonx.ai to do each step in a smart way. The agent is built using a step-by-
step method (like summarizing first, then finding tasks), which makes it more
accurate and useful.

This project helps teams save time and turn meetings into real results, making
it a powerful and practical solution for today’s workplaces.

1. Problem Statement
Meetings are essential for collaboration, decision-making, and strategic
planning — but today, they are increasingly inefficient, repetitive, and mentally
exhausting.
According to a Microsoft Work Trend Index (2024) and Harvard Business
Review, the average employee spends over 30% of their time in meetings, but:
•Action items often get forgotten.
•Meeting notes are not shared consistently.
•Key decisions are lost.
•Follow-up is delayed.
This results in productivity loss, employee burnout, and project delays.

2. Solution Overview – "Minutes to Action"
We propose an AI Meeting Agent that:
•Accepts meeting transcripts (or recordings, in future versions).
•Uses IBM watsonx.ai Granite models to:
•
oSummarize key points.
oExtract actionable items, with optional assignees and deadlines.
Optionally sends follow-up reminders or exports action items to tools
like Trello, Slack, or email.
This is a plug-and-play agent, suitable for:
•Agile teams
•Remote/hybrid companies•Executives who need quick meeting digests
•Cross-functional departments with frequent syncs

3. Why This Solution Matters in 2025
1. Rise of Remote & Hybrid Work
•Hybrid teams have more meetings than ever, across time zones.
•"Zoom fatigue" is real — but action-tracking is worse.
•Organizations now seek asynchronous productivity and automated
decision-capture.
2. Explosion of Unstructured Data
•Meeting transcripts, notes, recordings = unstructured mess.
•Companies are desperate to convert this into structured, usable data
(summaries, tasks).
3. AI Adoption in Workflow Automation
•AI agents are replacing manual note-taking and follow-up tasks.
•This use-case has immediate business value and high ROI.
•Companies using Microsoft Copilot, Slack GPT, etc., are looking for
similar custom solutions.

How Our Agent Works

Step Function
1️User inputs meeting transcript (text)
2️watsonx.ai Granite model summarizes the meeting
3️Agent uses a second prompt to extract action items
4️Actions are displayed in a task format (name, task, due date)
5️Optional: Send action list to team members via email or Trello (Node-
RED workflow)

5. 🛠 Technology Stack
Component To& ols Used
AI Agent -> IBM watsonx.ai + Granite-3-8b-instruct
Prompt Design -> Prompt Lab (chat + structured modes)
Backend Logic -> Node.js (API access to watsonx)
Workflow Automation -> Node-RED (optional email/task integration)
Frontend -> React.js (for user-friendly input/output)
Dataset -> Synthetic transcripts + public data (AMI Corpus)

6. Conclusion
"Minutes to Action" is more than just a summary tool — it's an AI-powered
productivity booster that saves time, clarifies ownership, and helps teams get
things done. With watsonx.ai's capabilities and real-world usability, it’s a
scalable, impactful solution perfectly aligned with the hackathon goals and the
future of work.