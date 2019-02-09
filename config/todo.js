const todo = sequelize.define('todos', {
    text: {
      type: Sequelize.STRING
    },
    complete: {
      type: Sequelize.BOOLEAN
    }
});

todo.sync({force: true}).then(() => {
    return todo.create({
      text: 'kill myself',
      complete: false
    });
});



todo.sequelize.sync();

module.exports = todo;