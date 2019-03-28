var express = require('express');
var router = express.Router();
var model = require('../models/index');


/* GET users listing. */
router.get('/', function(req, res, next) {
  model.User.findAll()
  .then(users => res.json({
      error: false,
      data: users
  }))
  .catch(error => res.json({
      error: true,
      data: [],
      error: error
  }));
});

router.post('/', function (req, res, next) {
  const {
    firstName,
    lastName,
    email,
    mobileNumber
  } = req.body;
//define base object
// const base = Joi.object().keys({
//   a: Joi.number(),
//   b: Joi.string()
// });

const Joi = require('joi');

// fetch the request data
const data = req.body;

// define the validation schema
const schema = Joi.object().keys({

    // email is required
    // email must be a valid email string
   // email: Joi.string().email().required(),

    // phone is required
    // and must be a string of the format XXX-XXX-XXXX
    // where X is a digit (0-9)
   // phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),

    // birthday is not required
    // birthday must be a valid ISO-8601 date
    // dates before Jan 1, 2014 are not allowed
   // birthday: Joi.date().max('1-1-2004').iso(),
   mobileNumber:Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required()

});

// validate the request data against the schema
Joi.validate(data, schema, (err, value) => {

  if (err) {
    res.status(422).json({
      status: 'error',
      message: 'Invalid request data',
      data: data
  });
  }else{

    model.User.create({
      firstName: firstName,
      lastName: lastName,
      email:  email,
      mobileNumber:  mobileNumber
        })
        .then(todo => res.status(201).json({
            error: false,
            data: todo,
            message: 'New record has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));

  }

});
});

router.put('/:id', function (req, res, next) {
 
  const user_id = req.params.id;

  const { firstName, lastName } = req.body;

  model.User.update({
          firstName: firstName,
          lastName: lastName
      }, {
          where: {
              id: user_id
          }
      })
      .then(user => res.json({
          error: false,
          message: 'todo has been updated.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


/* Delete todo. */
router.delete('/:id', function (req, res, next) {
  const todo_id = req.params.id;

  model.User.destroy({ where: {
      id: todo_id
  }})
      .then(status => res.json({
          error: false,
          message: 'todo has been delete.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;
