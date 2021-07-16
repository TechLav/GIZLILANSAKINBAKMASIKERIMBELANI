const config = require("./config");
const Dashboard = require("./dashboard/dashboard");
let client = {
  config
}
Dashboard(client);