const HTTPStatus = require('http-status');
const { expect, request, app } = require('../config/helpers');

describe('\nTESTE INTEGRAÇÃO ROTA USER => USER', () => {
  const baseUrl = '/users';

  describe('\nGET - /api/users?since={number}', () => {
    it('This endpoint must return a list of GitHub users and the link for the next page.', (done) => {
      request(app)
        .get(`${baseUrl}/135`)
        .set('Content-Type', 'application/json')
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.success).to.be.equal(true);
          expect(res.body.response).to.be.an('array');
          expect(res.body.response[0]).to.have.property('login');
          expect(res.body.response[0]).to.have.property('id');
          done(error);
        });
    });
  });
  describe('\nGET - /api/users/:username/details', () => {
    it('This endpoint must return the details of a GitHub user.', (done) => {
      request(app)
        .get(`${baseUrl}/mporto00/details`)
        .set('Content-Type', 'application/json')
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.success).to.be.equal(true);
          expect(res.body.response).to.be.an('object');
          expect(res.body.response).to.have.property('login');
          expect(res.body.response).to.have.property('id');
          done(error);
        });
    });

    it('This endpoint must NOT return the details of a GitHub user (non-existent).', (done) => {
      request(app)
        .get(`${baseUrl}/lsdkgfsdjf/details`)
        .set('Content-Type', 'application/json')
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          expect(res.body.success).to.be.equal(false);
          done(error);
        });
    });
  });

  describe('\nGET - /api/users/:username/repos', () => {
    it('This endpoint must return a list with all user repositories.', (done) => {
      request(app)
        .get(`${baseUrl}/mporto00/repos`)
        .set('Content-Type', 'application/json')
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.success).to.be.equal(true);
          expect(res.body.response).to.be.an('array');
          expect(res.body.response[0]).to.have.property('id');
          expect(res.body.response[0]).to.have.property('name');
          expect(res.body.response[0]).to.have.property('full_name');
          expect(res.body.response[0]).to.have.property('private');
          done(error);
        });
    });

    it('This endpoint must NOT return a list with all user repositories (non-existent user).', (done) => {
      request(app)
        .get(`${baseUrl}/lsdkgfsdjf/repos`)
        .set('Content-Type', 'application/json')
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          expect(res.body.success).to.be.equal(false);
          done(error);
        });
    });
  });
});
