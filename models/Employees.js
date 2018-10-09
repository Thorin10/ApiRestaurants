// const db = require('sqlite');
//
// function getEmployees() {
//     return db.all('SELECT * FROM employees');
// }
//
// function getEmployee(id) {
//     return db.get('SELECT * FROM employees WHERE ROWID = ?', id);
// }
//
// function postEmployee(name, restaurantId, position) {
//     return db.run('INSERT INTO employees (name, restaurantId, position) VALUES (?, ?, ?)',
//         name, restaurantId, position);
// }
//
// function putEmployee(name, restaurantId, position, id) {
//     return db.run('UPDATE employees set name = ?, restaurantId = ?, position = ? WHERE ROWID = ?',
//         name, restaurantId, position, id)
// }
//
// function deleteEmployee(id) {
//     return db.run('DELETE FROM employees WHERE ROWID = ?', id);
// }
//
// module.exports = {
//     getEmployees,
//     getEmployee,
//     postEmployee,
//     putEmployee,
//     deleteEmployee
// };

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('employees', {
        name: {
            type: DataTypes.STRING
        },
        restaurantId: {
            type: DataTypes.INTEGER
        },
        position: {
            type: DataTypes.STRING
        },
    });
};