const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: String,
  desc: String,
  img:
    {
      data: Buffer,
      contentType: String
    }
});

//Image is a model which has a schema imageSchema

module.exports = new model('Image', schema);
