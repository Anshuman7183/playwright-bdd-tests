const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',

  metadata: {
    browser: {
      name: 'chromen',
      version: 'latest'
    },

    device: 'Local test machine',

    platform: {
      name: 'windows',
      version: '10'
    }
  },

  customData: {
    title: 'Execution Info',
    data: [
      { label: 'Project', value: 'TCS Automation Framework' },
      { label: 'Tester', value: 'Anshuman Nayak' }
    ]
  }
});