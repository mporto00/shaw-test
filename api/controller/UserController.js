const GithubController = require('../controller/GithubController');
const Handler = require('../handler/handler');

async function getAllUsers(req, res) {
  try {
    const users = await GithubController.getAllUsers(req.params.number);
    return Handler.onSuccess(res, users);
  } catch (err) {
    return Handler.onError(res, err, 'Erro ao exibir todos os usuários.');
  }
}

async function getUserDetails(req, res) {
  try {
    const user = await GithubController.getUserDetails(req.params.username);
    return Handler.onSuccess(res, user);
  } catch (err) {
    return Handler.onError(res, err, 'Erro ao exibir detalhes do usuário.');
  }
}

async function getUserRepositories(req, res) {
  try {
    const user = await GithubController.getUserRepos(req.params.username);
    return Handler.onSuccess(res, user);
  } catch (err) {
    return Handler.onError(res, err, 'Erro ao exibir repositórios do usuário.');
  }
}

module.exports = {
  getAllUsers,
  getUserDetails,
  getUserRepositories,
};
