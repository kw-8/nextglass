const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateWineInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.country)) {
    errors.country = "Country is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (Validator.isEmpty(data.points)) {
    errors.points = "Points are required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price is required";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.variety)) {
    errors.variety = "Variety is required";
  }

  if (Validator.isEmpty(data.winery)) {
    errors.winery = "Winery is required";
  }

  if (Validator.isEmpty(data.tags)) {
    errors.tags = "Tags are required";
  }

  if (Validator.isEmpty(data.tagIndex)) {
    errors.tags = "Tag indices are required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}