module.exports = {
  default: {
    require: ['tests/step-definitions/*.ts'],
    requireModule: ['ts-node/register'],
    paths: ['tests/features/*.feature'],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ]
  }
};