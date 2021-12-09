const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCollectionInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.title)) { errors.title = "Title is required"; };
  if (Validator.isEmpty(data.description)) { errors.description = "Description is required"; };
  // if (Validator.isEmpty(data.wines)) { errors.description = "Must add at least 1 wine"; };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}