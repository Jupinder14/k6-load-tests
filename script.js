import { low_response_time, medium_response_time, zero_error_rate, projectId, high_response_time } from './utils.js';

import GET_users_list_test from './scripts/load_test_scripts/endpoints/GET_users_list.js';
import POST_user_test from './scripts/load_test_scripts/endpoints/POST_user.js';

// Define the rate and threshold
export const options = {
  discardResponseBodies: false,
  ext: {
    loadimpact: {
      projectID: projectId,
      name: 'Load Test',
    },
  },
  scenarios: {
    GET_users_list_scenario: {
      // Assume Frequency: 60 requests/min
      executor: 'constant-arrival-rate',
      exec: 'GET_users_list_load_test',
      preAllocatedVUs: 1,
      timeUnit: '1s',
      rate: 1,
      duration: `${__ENV.DURATION}`,
    },
    POST_user_scenario: {
        // Assume Frequency: 6 requests/min
        executor: 'constant-arrival-rate',
        exec: 'POST_user_load_test',
        preAllocatedVUs: 1,
        timeUnit: '10s',
        rate: 1,
        duration: `${__ENV.DURATION}`,
      }
  },
  thresholds: {
    'http_req_failed{scenario:GET_users_list_scenario}': zero_error_rate,
    'http_req_duration{scenario:GET_users_list_scenario}': high_response_time,

    'http_req_failed{scenario:POST_user_scenario}': zero_error_rate,
    'http_req_duration{scenario:POST_user_scenario}': high_response_time,
  }
};

export const GET_users_list_load_test = () => {
    GET_users_list_test()
}

export const POST_user_load_test = () => {
    POST_user_test()
}
