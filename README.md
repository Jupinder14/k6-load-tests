# Performance testing using K6

This repository contains load tests for a public api project.

### To run tests

In order to run tests locally, first install K6 and then run the command from the project root

`k6 run script.js -e DURATION=5m`

To run tests in cloud, run

`k6 cloud script.js -e DURATION=5m`

The duration can be changes as per the requirements

It is a good idea to run tests locally first and when everything seems ok we can run the tests in cloud

### Reporting

Reports can be seen on the K6 app here https://app.k6.io/projects/3637554
You will need to have access to the project in order to view results.

![Alt text](screenshots/result.jpeg?raw=true "Title")