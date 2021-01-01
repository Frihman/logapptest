const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const baseUrl = 'http://localhost:3000';

chai.use(chaiHttp);

describe('Server is live test', function(){
    it('server is live', function(done){
        chai.request(baseUrl)
            .get('/')
            .end(function(err, res){
                expect(res).to.have.status(200);
                done();
            })
    });
});

