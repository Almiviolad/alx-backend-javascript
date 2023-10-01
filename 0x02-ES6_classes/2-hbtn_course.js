/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._verify_name(name);
    this._length = this._verify_length(length);
    this._students = this._verify_students(students);
  }

  _verify_name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      return value;
    }
  }

  _verify_length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      return value;
    }
  }

  _verify_students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array of strings');
    } else {
      return value;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this._verify_name(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this._verify_length(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this._verify_students(students);
  }
}
