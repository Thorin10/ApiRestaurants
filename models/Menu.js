// const db = require('sqlite');
//
// function getMenus() {
//     return db.all('SELECT * FROM menu');
// }
//
// function getMenu(id) {
//     return db.get('SELECT * FROM menu WHERE ROWID = ?', id);
// }
//
// function postMenu(name, restaurantId) {
//     return db.run('INSERT INTO menu (name, restaurantId) VALUES (?, ?)',
//         name, restaurantId);
// }
//
// function putMenu(name, restaurantId, id) {
//     return db.run('UPDATE menu set name = ?, restaurantId = ? WHERE ROWID = ?',
//         name, restaurantId, id)
// }
//
// function deleteMenu(id) {
//     return db.run('DELETE FROM menu WHERE ROWID = ?', id);
// }
//
// module.exports = {
//     getMenus,
//     getMenu,
//     postMenu,
//     putMenu,
//     deleteMenu
// };

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('menu', {
        name: {
            type: DataTypes.STRING
        },
        restaurantId: {
            type: DataTypes.INTEGER
        }
    });
};