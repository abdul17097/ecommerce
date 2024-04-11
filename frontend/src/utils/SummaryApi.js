const commonUrl = "http://localhost:3000/api";
const SummaryApi = {
  signup: {
    url: `/api/signup`,
    method: "POST",
  },
  signin: {
    url: `/api/signin`,
    method: "POST",
  },
  userDetails: {
    url: `/api/user-details`,
    method: "GET",
  },
};

export default SummaryApi;
