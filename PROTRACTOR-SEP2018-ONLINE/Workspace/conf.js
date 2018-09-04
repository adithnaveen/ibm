exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/action-spec.js', './tests/before-each-spec.js']
  };