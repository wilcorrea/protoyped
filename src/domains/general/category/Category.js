/* eslint-disable no-alert,func-names, import/extensions, import/no-unresolved */
import Prototype from 'src/app/Prototype';

/**
 * @typedef {Category}
 */
export default class Category extends Prototype {
  // static driver = "rest";

  construct() {
    /** @fields */

    this.field('name', 'Personagem');

    this.field('age', 'Idade')
      .type('number')
      .default(1)
      .formWidth(50)
      .on('input', function () {
        this.fields.email.$layout.formHidden = this.record.age < 12;
      });

    this.field('email', 'E-mail')
      .email()
      .formWidth(50)
      .gridHidden(true)
      .on('input', function () {
        this.record.description = this.record.email;
      });

    this.field('description', 'Descrição')
      .text()
      .gridHidden(true)
      .on('blur', () => window.alert('Ha!'));

    this.hook('mounted', () => {
      // window.alert("Mounted!");
    });
  }
}
