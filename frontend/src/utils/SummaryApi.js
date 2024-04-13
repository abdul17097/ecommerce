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
  logout: {
    url: `/api/logout`,
    method: "GET",
  },
  userDetails: {
    url: `/api/user-details`,
    method: "GET",
  },
  allUsers: {
    url: `/api/all-users`,
    method: "GET",
  },
};

export default SummaryApi;
