const Chai = require('chai');
const td = require('testdouble');
const supertest = require('supertest');
const api = require('../../../api/app');

const app = api;
const request = supertest;
const expect = Chai.expect;
const testDouble = td;

module.exports = {
  app,
  request,
  expect,
  testDouble,
};
