module.exports = {
  name: 'invoice-importing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/invoice-importing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
