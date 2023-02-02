const boom = require('@hapi/boom');
const { getConection } = require('../libs/postgres.js');
const { pool } = require('../libs/postgrespool.js');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const rta = await pool.query('SELECT * FROM tareas');
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
