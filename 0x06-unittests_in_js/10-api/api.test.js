const { expect } = require('chai');
const request = require('request');

const url = 'http://localhost:7865';

describe('Index page', () => { 
  it('correct response payload', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('correct response header', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
});

describe('Cart page', () => {
  it('correct response payload', (done) => {
    request(`${url}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
  it('correct response payload when id is not a number', (done) => {
    request(`${url}/cart/cgr`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Payment methods', () => { 
  it('correct response payload', (done) => {
    request(`${url}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
      done();
    });
  });
});

describe('Login page', () => {
  it('correct response payload', (done) => {
    const fullLoad = {
      url: `${url}/login`,
      method: 'POST',
      json: {
        userName: 'Betty',
      },
    };
    request(fullLoad, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
