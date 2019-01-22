export default class Asserts {
  static all(asserts = [], safe = false) {
    if(!safe) {
      return asserts.every(assert => !!assert);
    }

    try {
      return asserts.every(assert => !!assert);
    } catch(e) {
      return false;
    }
  }

  static one(asserts = [], safe = false) {
    if(!safe) {
      return asserts.some(assert => !!assert);
    }

    try {
      return asserts.some(assert => !!assert);
    } catch(e) {
      return false;
    }
  }
}
