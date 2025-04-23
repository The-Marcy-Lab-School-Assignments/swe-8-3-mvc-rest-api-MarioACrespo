const getId = require("../utils/getId");

class fellow {
  static records = [];

  constructor(name, cohort) {
    this.id = getId();
    this.name = name;
    this.cohort = cohort;
  }

  static create({ name, cohort }) {
    const newFellow = new fellow(name, cohort);
    fellow.records.push(newFellow);
    return newFellow;
  }

  static getAll() {
    return fellow.records;
  }

  static getById(id) {
    return fellow.records.find((record) => record.id === id);
  }

  static update(id, data) {
    const record = fellow.getById(id);
    if (!record) return null;
    record.name = data.name ?? record.name;
    record.cohort = data.cohort ?? record.cohort;
    return record;
  }

  static delete(id) {
    const index = fellow.records.findIndex((record) => record.id === id);
    if (index === -1) return null;
    const removed = fellow.records.splice(index, 1);
    return removed[0];
  }
}

module.exports = fellow;
