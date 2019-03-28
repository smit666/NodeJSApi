var expect  = require('chai').expect;
var request = require('request');

it('Get All Users', function(done) {
    request('http://localhost:3000/users' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});


it('Get All Users', function(done) {
    let user = {
        'firstName': 'he',
        'lastName':'th',
        'email':'sgdh@gh.com',
        'mobileNumber':'9865455'
    }
    request.post('http://localhost:3000/users',{json: user} , function(error, response, body) {
        expect(response.statusCode).to.equal(201);
        done();
    });
});
// describe('/POST Create User', () => {
//     it('Create User Testing', (done) => {
//         let user = {
//             'firstName': 'he',
//             'lastName':'th',
//             'email':'sgdh@gh.com',
//             'mobileNumber':'9865455'
//         }
//         chai.request('http://localhost:3000')
//             .post('/users')
//             .send(user)
//             .end((err, res) => {

//             });
//         });
//     });
// });