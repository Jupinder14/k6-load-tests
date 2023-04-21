# Performance testing using K6

This repository contains load tests for a public api project.

### To run tests

In order to run tests locally, first install K6 and then run the command from the project root

`k6 run script.js -e BASE_URL=https://reqres.in -e DURATION=5m`

To run tests in cloud, run

`k6 cloud script.js -e BASE_URL=https://reqres.in -e DURATION=5m`

The duration can be changes as per the requirements

It is a good idea to run tests locally first and when everything seems ok we can run the tests in cloud

### Running tests in pipeline

If you want to run load tests inside any CI/CD pipeline, you will first need to build the docker image and push it to AWS ECR.
To build the image from Dockerfile, run

`docker build -t load-test --build-arg BASE_URL=${{ vars.BASE_URL }} --build-arg DURATION=${{ vars.DURATION }} .`

This will build a image with name `load-test`

Then pull the latest image from AWS ECR and run

`docker run --name load-test -e BASE_URL=https://reqres.in -e DURATION=5m load-test`

Following parameters are provided at the run time

`BASE_URL`: Base url against which tests are run. This can be as per the requirements. For ex. if we want to run tests in test environment, BASE_URL might be something like this `https://reqres-test.in`, or if we want to run tests against staging it can be `https://reqres-staging.in`.
`DURATION`: This is the duration for which we want to run tests.

### Reporting

Reports can be seen on the K6 app here https://app.k6.io/projects/3637554
You will need to have access to the project in order to view results.

![Alt text](screenshots/result.jpeg?raw=true "Title")