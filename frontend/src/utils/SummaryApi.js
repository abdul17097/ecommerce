const commonUrl = "http://localhost:3000/api";
const SummaryApi = {
  signup: {
    url: `${commonUrl}/signup`,
    method: "POST",
  },
  signin: {
    url: `${commonUrl}/signin`,
    method: "POST",
  },
};

export default SummaryApi;
