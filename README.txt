LEARNING ROOTS ROYAL ACADEMY — v11

Major additions since v10.1:
- Fixed the school portal: Admin, Teacher and Parent dashboards are now fully built out
  with role-based data and permissions (see below), replacing the placeholder pages.
- assets/data.js: 100 sample students across JSS1/JSS2/SS1/SS2 (25 each), 6 sample
  teachers, houses, assignments, scheme of work, lesson plans, calendar, transport
  routes and parent testimonials — all demo data, editable in one place.
- assets/dashboard.js: shared rendering engine (tabs, filters, editable scores,
  per-student comment threads, house badges, rating meters, calendar, transport).
- Admin dashboard: sees everything — all students (with payment status and average
  grade), staff & timetables, curriculum/scheme of work/lesson plans (with VP review
  comments), full finance breakdown by class, and the school calendar.
- Teacher dashboard (demo: Mr. Ibrahim Sule, Mathematics): students they teach with
  live-editable CA1/CA2/exam scores, an assignments tab (view + post new), scheme of
  work, lesson plans with VP feedback, personal timetable and duty status, and the
  calendar. No payment information shown.
- Parent dashboard (demo: viewing one student): academic progress, house, behavioral/
  activity ratings, calendar, a comment thread they can post to, and payment status
  for their own child only. No other students or staff attendance shown.
- House system (Yellow/Black/White/Green) with random assignment, shown on the
  Student Life page and in both admin and teacher dashboards.
- Calendar now includes inter-house Music & Dancing, Games and Debate competitions.
- Illustrative school bus routes (Yola, Girei, within Jimeta) added to Student Life.
- 5 parent testimonials added near the bottom of the About page.
- Removed every remaining "prototype" label and dev-facing placeholder sentence.
- Repositioned copy: no longer reads as Yola/Jimeta-only — open nationwide and
  internationally.
- Fixed a real cross-browser bug in the student-table renderer (a two-root HTML
  fragment meant the table itself silently failed to render in every browser);
  verified fixed by executing the actual JS in a headless engine, not just reading it.
- Replaced a fragile DOM API (Range.createContextualFragment) with plain innerHTML
  templating in three places for maximum compatibility.

Changes from v10 to v10.1 (photos/animations/social icons/etc.) are unchanged — see
previous notes in project history.

For desktop testing: python3 -m http.server 8080, then open http://localhost:8080/index.html
