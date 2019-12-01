const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 120
  },
  description : {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 120
  },
  taskType : {
    type: String,
    required: true,
    enum : ['Série', 'Filme', 'Livro'],
     
  },
  dueDate : Date
});

const Task = mongoose.model('Task', taskSchema);


exports.taskSchema = taskSchema;
exports.Task = Task; 