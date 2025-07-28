🧪 Remwaste Automated Testing

This repo contains automated UI and API tests for validating core features as requested in the assesment

📁 Project Structure

Remwaste/
├── tests/                          # UI Test files (Playwright)
├── postman/                        # API test collection & environment
│   ├── Remwaste.postman_collection.json
│   └── Remwaste.postman_environment.json
├── .github/workflows/             # GitHub Actions workflow
│   └── tests.yml
├── remwaste-api-report.html       # Generated API test reports
└── README.md

✅ Prerequisites

Before you begin, ensure the following are installed:

- **Node.js (v18 or later)**  
- **npm**  
- **Git**

📦 Installation & Setup

1. Clone the repo:

git clone https://github.com/your-username/remwaste.git
cd remwaste

2. Install Playwright (UI Testing):

npm install -D playwright
npx playwright install

3. Install Newman (API Testing):

npm install -g newman
npm install -g newman-reporter-html

🚀 Running the Tests

4. 🖥️ UI Tests (Playwright)

npx playwright test -  (Runs the test)
npx playwright test --headed --debug (run the ui test in debug mode- this helps to see every step)

 🌐 API Tests (Postman + Newman)

5. Run this from the root of the repo:

newman run postman/Remwaste.postman_collection.json \
  -e postman/Remwaste.postman_environment.json \
  -r cli,html \
  --reporter-html-export postman/remwaste-api-report.html


6. 📄 View API Test Report

Open the HTML report in your browser:

open postman/remwaste-api-report.html


7. 🧪 Running Tests in CI (GitHub Actions)

Make an edit to the code and push to GitHub:

1. Go to the **Actions** tab of your repo.
2. Look for `API Tests - Postman + Newman`.
3. After a successful run, download `remwaste-api-report` from the artifacts section.

 ⚙️ Dependencies Summary

| Tool                  | Purpose                    |
|-----------------------|----------------------------|
| Playwright            | UI automation              |
| Newman                | API automation             |
| newman-reporter-html  | HTML reports for Newman    |
| Postman               | Create/test API collections|

📝 Notes

- API tests use [https://fakestoreapi.com](https://fakestoreapi.com) as a sample backend.
- Ensure your environment file (`Remwaste.postman_environment.json`) is located inside the `postman/` folder.
- UI tests may require tweaking depending on changes to the Remwaste app’s DOM.
