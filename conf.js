// conf.js
exports.config = {
    framework: 'jasmine',
    capabilities: {
        'browserName': 'chrome'
    },
    //defined Selenium Server ·Ó Action
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    //directConnect: true,
    specs: ['spec.js'],//Name of the file containing test cases

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    }

}
