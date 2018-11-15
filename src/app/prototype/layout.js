export default {
  formWidth(formWidth) {
    return this.__setLayout({ formWidth });
  },
  formHidden(formHidden) {
    return this.__setLayout({ formHidden });
  },
  gridWidth(gridWidth) {
    return this.__setLayout({ gridWidth });
  },
  gridHidden(gridHidden) {
    return this.__setLayout({ gridHidden });
  }
};
