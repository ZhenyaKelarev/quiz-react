import axios from "axios";

export default axios.create({
  baseURL: "http://react-quiz-6646a-default-rtdb.firebaseio.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
