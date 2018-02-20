// Back End Unit Test for reservation routes.
// View all reservations
// Add new reservations
// Update a single reservation
// Delete a single reservation
// Resource: http: //mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WoxmmainHct
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Reservations', function () {
    it('should list ALL reservations on /api/manager GET', function (done) {
        chai.request(server)
            .get('/api/manager')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            });
    });

    it('should add a SINGLE reservation on /api/reservation POST', function (done) {
        chai.request(server)
            .post('/api/reservation')
            .send({
                'name': 'testname',
                'email': 'test@yahoo.com',
                'phone': '14075551212',
                'beach': 'Cocoa Beach',
                'rentalitem': 'chair',
                'rentaldate': '02-22-2018'
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('SUCCESS');
                res.body.SUCCESS.should.be.a('object');
                res.body.SUCCESS.should.have.property('name');
                res.body.SUCCESS.should.have.property('email');
                res.body.SUCCESS.should.have.property('phone');
                res.body.SUCCESS.should.have.property('beach');
                res.body.SUCCESS.should.have.property('rentalitem');
                res.body.SUCCESS.should.have.property('rentaldate');
                res.body.SUCCESS.should.have.property('_id');
                res.body.SUCCESS.name.should.equal('testname');
                res.body.SUCCESS.email.should.equal('test@yahoo.com');
                res.body.SUCCESS.phone.should.equal('14075551212');
                res.body.SUCCESS.beach.should.equal('Cocoa Beach');
                res.body.SUCCESS.rentalitem.should.equal('chair');
                res.body.SUCCESS.rentaldate.should.equal('02-22-2018');
                done();
            });
    });

    //Add these next...
    it('should update a SINGLE reservation on /api/manager/<id> PUT');
    it('should delete a SINGLE reservation on /api/manager/<id> DELETE');
});