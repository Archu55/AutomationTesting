# WebdriverIO + Cucumber Automation Framework

This repository contains an enterprise-ready WebdriverIO (WDIO) automation testing framework built using JavaScript and Cucumber (BDD). The framework is optimized for CI/CD pipelines (Jenkins), supports parallel execution, and follows industry best practices suitable for large-scale QA teams.

---

## Tech Stack

- **Node.js**
- **WebdriverIO**
- **Cucumber (BDD)**
- **JavaScript (ES6+)**
- **Allure Report**
- **ESLint & Prettier**
- **dotenv** (.env configuration)

---

## Project Structure

```text
WDIOPRACTICE
│
├── .husky/                    # Git hooks (pre-commit checks)
├── .vscode/                   # VS Code workspace settings
│
├── features/                  # All BDD-related assets
│   ├── featureFiles/          # Gherkin feature files
│   │   └── **/*.feature
│   │
│   ├── pageobjects/           # Page Object classes (POM)
│   │   ├── page.js            # Base page
│   │   └── login.page.js
│   │
│   └── step-definitions/      # Glue code for features
│       └── steps.js
│
├── support/                   # Step definitions, hooks & utilities
│   ├── cucumber-globals.js     # Global hooks & configuration
│   └── step-definitions/
│       └── steps.js
│
├── reports/                   # Generated reports
│   └── allure-results/        # Allure raw results
│
├── results/                   # Execution artifacts (cleaned before run)
│
├── .env                       # Environment variables
├── wdio.conf.js               # WebdriverIO main configuration
├── package.json               # NPM scripts & dependencies
├── eslint.config.js            # ESLint rules
├── prettier.config.js         # Prettier formatting rules
├── Jenkinsfile                # Jenkins pipeline definition
└── README.md                  # Project documentation
```

## Environment Configuration (.env)

The framework uses environment variables to make executions CI-friendly and configurable.

```env
# execution
CI=false
HEADLESS=false
BROWSER=chrome
MAX_INSTANCES=3
TAGS='@smoke'

# retries
SPEC_RETRIES=1

# timeouts
WAIT_TIMEOUT=10000

```

# 🔑 Variable Description

| Variable        | Description                     |
| --------------- | ------------------------------- |
| `CI`            | Enables CI-specific behavior    |
| `HEADLESS`      | Runs browser in headless mode   |
| `BROWSER`       | Browser name (chrome / firefox) |
| `MAX_INSTANCES` | Parallel execution limit        |
| `TAGS`          | Cucumber tags to execute        |
| `SPEC_RETRIES`  | Retry count for failed specs    |
| `WAIT_TIMEOUT`  | Default wait timeout (ms)       |

---

## Test Execution

### Install dependencies

```bash
npm install
```

### Run tests locally

```bash
npx wdio run wdio.conf.js
```

### Run tagged tests

```bash
TAGS='@smoke' npx wdio run wdio.conf.js
```

---

## 🔧 NPM Scripts (Recommended)

Add or use the following scripts in `package.json` for standardized execution:

```json
"scripts": {
  "test": "wdio run ./wdio.conf.js",
  "test:smoke": "set TAGS=@smoke&& wdio run wdio.conf.js",
}
```

### Run via:

```bash
npm run test
npm run test:smoke
```

---

## 📊 Reporting

### ✔️ Configured Reporters

- **Spec Reporter** – Console execution logs
- **Allure Reporter** – Advanced report with screenshots

### 📁 Report Locations

| Report         | Path                        |
| -------------- | --------------------------- |
| Allure Results | `./reports/allure-results/` |

### 📸 Failure Evidence

- Screenshots are captured after every failed step
- Automatically attached to Allure reports

---

## 🔄 Hooks Lifecycle

| Hook         | Responsibility                    |
| ------------ | --------------------------------- |
| `onPrepare`  | Cleans previous reports & results |
| `afterStep`  | Captures screenshots on failure   |
| `onComplete` | Generates HTML & final reports    |

---

## 🚀 Jenkins / CI Pipeline Integration

This framework is **CI/CD ready** and integrates seamlessly with Jenkins.

### Jenkins Execution Flow

1. Checkout source code
2. Install dependencies (`npm install`)
3. Execute tests via WDIO
4. Generate reports
5. Archive artifacts

### Sample Jenkinsfile Step

```groovy
stage('Run Automation Tests') {
  steps {
    sh 'npm install'
    sh 'npm run test'
  }
}
```

OR

```groovy
stage('Run Automation Tests') {
  steps {
    bat 'npm install'
    bat 'npm run test'
  }
}
```

### Jenkins Best Practices

- ✅ Run tests in headless mode
- ✅ Use tag-based execution
- ✅ Archive `reports/` directory
- ✅ Publish HTML reports

---

## Code Quality & Standards

- **ESLint** enforces coding standards
- **Prettier** ensures consistent formatting
- **Pre-commit hooks** via Husky

---

## 📌 Enterprise Best Practices Followed

✔️ BDD using Gherkin syntax  
✔️ Environment-driven execution  
✔️ Centralized hooks & utilities  
✔️ Retry strategy for flaky tests  
✔️ CI-first design  
✔️ Clean, scalable architecture

---

## 📦 Badges

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?style=flat&logo=webdriverio&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=flat&logo=cucumber&logoColor=white)
![CI](https://img.shields.io/badge/CI-Ready-brightgreen?style=flat)

---

## 👤 Author

**Archana Kumari**

---

## 📄 License

This project is intended for **internal, learning, and enterprise automation purposes**.
