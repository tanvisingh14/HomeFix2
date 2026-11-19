# HomeFix Premium UI v3

What's new in v3:
- Worker data lives in ONE file (`workers.js`) - 8 workers, 2 per service
- `workers.html` - search, service filter, sort, "available today" filter
- `worker.html?id=3` - one dynamic profile page for every worker (replaces 4 copy-pasted pages)
- Real booking form (name, phone, date, time, address, problem) saved to localStorage
- Fixed the dead "Book Now" button on the electrician page
- Mobile hamburger menu (nav used to disappear on phones)
- Contact form now saves messages; keyboard focus styles; meta descriptions

Run with VS Code Live Server by opening `index.html`.
Next step: replace localStorage with a backend + database (Node/Express or Spring Boot).
