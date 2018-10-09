// const db = require('sqlite');
//
// function getRestaurants() {
//     return db.all('SELECT * FROM restaurants');
// }
//
// function getRestaurant(id) {
//     return db.get('SELECT * FROM restaurants WHERE ROWID = ?', id);
// }
//
// function postRestaurant(address, name, capacity) {
//     return db.run('INSERT INTO restaurants (address, name, capacity, timestamp) VALUES (?, ?, ?, ?)',
//         address, name, capacity, new Date())
// }
//
// function putRestaurant(address, name, capacity, id) {
//     return db.run('UPDATE restaurants set address = ?, name = ?, capacity = ?, timestamp = ? WHERE ROWID = ?',
//         address, name, capacity, new Date(), id)
// }
//
// function deleteRestaurant(id) {
//     return db.run('DELETE FROM restaurants WHERE ROWID = ?', id);
// }
//
// function getEmployeeFromRestaurant(restaurantId) {
//     return db.all('SELECT * FROM employees WHERE restaurantId = ?', restaurantId)
// }
//
// function getMenusFromRestaurant(restaurantId) {
//     return db.all('SELECT * FROM menu WHERE restaurantId = ?', restaurantId)
// }
//
// module.exports = {
//     getRestaurants,
//     getRestaurant,
//     postRestaurant,
//     putRestaurant,
//     deleteRestaurant,
//     getEmployeeFromRestaurant,
//     getMenusFromRestaurant
// };

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('restaurants', {
        address: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        capacity: {
            type: DataTypes.STRING
        }
    });
};