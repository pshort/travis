var should = require('should');
var express = require('express');
var request = require('supertest');

var app = require('../index');

describe("The api", function() {
	it("should return 200 hello world", function(done) {
		// do the testa
		request(app)
		  .get('/')
		  .expect(200)
		  .end(function(err, res) {
	            if(err) throw err;
		    done();
		  });
	});
});
