let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  //"http://localhost:8080";
  backendHost = "http://prod-todo-backend.us-west-2.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;
