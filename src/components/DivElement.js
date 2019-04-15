const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super();
    this.tag = 'div';
    this.content = content;
  }
}

// Export class here
module.exports = DivElement;
