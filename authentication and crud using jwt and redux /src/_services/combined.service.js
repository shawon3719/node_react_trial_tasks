import http from "../http-common";

const getTask = id => {
  return http.get(`tasks/task/${id}`);
};
export default {
  getTask,
};
