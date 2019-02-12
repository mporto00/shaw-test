const axios = require('axios');
const config = require('../../config/env/config')();

// GitHub API
const GITHUB_URL = config.github_url;

async function getAllUsers(number) {
  try {
    const fetch = await axios({
      url: `${GITHUB_URL}/users?since=${number}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      }
    });
    return fetch.data;
  } catch (err) {
    throw err;
  }
}

async function getUserDetails(username) {
  try {
    const fetch = await axios({
      url: `${GITHUB_URL}/users/${username}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      },
    });
    return fetch.data;
  } catch (err) {
    throw err;
  }
}

async function getUserRepos(username) {
  try {
    const fetch = await axios({
      url: `${GITHUB_URL}/users/${username}/repos`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      },
    });
    return fetch.data;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllUsers,
  getUserDetails,
  getUserRepos,
};
