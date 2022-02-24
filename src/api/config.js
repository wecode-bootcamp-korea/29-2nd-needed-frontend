const BASE_URL = 'http://15.165.203.121:8080';

export const api = {
  fetchLogin: BASE_URL + '/users/signin/kakao/callback',
  fetchProfile: BASE_URL + '/users/profile',
  fetchCategory: BASE_URL + '/recruitments/category',
  fetchRecruitments: BASE_URL + '/recruitments',
  fetchCompanies: BASE_URL + '/companies',
  fetchNeededPlus: BASE_URL + '/neededplus',
  fetchResume: BASE_URL + '/resumes',
  fetchApplication: BASE_URL + '/recruitments/applications',
  fetchSalary: BASE_URL + '/users/salary',
};
