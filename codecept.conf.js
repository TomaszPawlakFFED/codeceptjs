exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
  Puppeteer: 
  {
      url: 'http://localhost:3000',
      show: true,
      waitForAction: 500
  },
  },
  //   multiple: {
  //     basic: {
  //       // run all tests in chrome and firefox
  //      browsers: ["chrome", "firefox"]
  //     },
  // },  
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'firsttest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure:{
      enabled:true
    },
    stepByStepReport:{
      enabled: true,
      screenshotsForAllureReport:true
    }
  }
}