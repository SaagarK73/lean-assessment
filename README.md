# lean-assessment

## Requirements:
### Test Coverage: Your test suite should cover the scenario of a user completing a successful checkout. You do not need to cover any negative scenarios.
- Added one testcase for complete workflow from login to checkout

### Test Framework: The framework must be designed using Javascript/Typescript using any popular automation tool (Playwright, Cypress, Webdriverio, etc).
- Framework is designed in Playwright/Typescript using POM. It includes seperate files for all pages and custom fixture to use them in tests. Type of locators used are commented inline in some files.

### Assertions: Include appropriate assertions to verify the correctness of the user's actions.
- What assertions are done are commented inline in tests.

### Reporting: Implement reporting mechanisms to provide clear feedback on test results.
- Reporting is configured in config file for html & junit, you can check the reports generated in Actions tab.
