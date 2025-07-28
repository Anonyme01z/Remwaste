# Remwaste QA Automation Suite

This repository contains UI and API automated tests for Remwaste's application workflows.

---

## 📂 Structure

remwaste-tests/
├── postman/ # Postman API test files
│ ├── Remwaste.postman_collection.json
│ └── Remwaste.postman_environment.json
├── tests/ # Playwright test scripts
│ ├── login.spec.js
│ └── ...
├── playwright.config.js
├── .github/workflows/test.yml # GitHub Actions workflow for CI
├── package.json
├── README.md



---

## 🧪 Test Coverage

### UI Automation (Playwright)
- Login flow
- Product creation, editing, deletion
- Bank account addition/deletion
- UI assertions (form values, visibility, etc.)

### API Automation (Postman + Newman)
- `POST /login`
- `GET /items`, `GET /items/:id`
- `POST /items`, `PUT /items/:id`, `DELETE /items/:id`
- Positive and negative test scenarios

---

## ▶️ Running Tests Locally

### 1. Install dependencies:

```bash
npm install -g newman newman-reporter-html
npm install

### 2. Run UI Tests:
npx playwright test --headed --debug


### Run API Tests:

newman run postman/Remwaste.postman_collection.json \
  -e postman/Remwaste.postman_environment.json \
  -r cli,html \
  --reporter-html-export remwaste-api-report.html

## Then open the HTML report:

open remwaste-api-report.html
