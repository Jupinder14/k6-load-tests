import { baseUrl } from "../utils.js";
import { check, sleep } from 'k6'
import http from 'k6/http'

export function getUsersList() {
  let response = http.get(baseUrl + '/api/users?page=2')

  check(response, {
    "successful operation": (r) => r.status === 200
  });

  sleep(0.1)
}

export function postUser(params) {
  let body = {
    "name": "morpheus",
    "job": "leader"
  }
  let response = http.post(baseUrl + '/api/users', JSON.stringify(body), params)

  check(response, {
    "successful operation": (r) => r.status === 201
  });

  sleep(0.1)
}