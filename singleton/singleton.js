const Config = (function () {
  let instance;

  function createInstance() {
    const config = { apiUrl: 'https://api.example.com', mode: 'production' };
    return config;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const config1 = Config.getInstance();
const config2 = Config.getInstance();

console.log(config1 === config2);  // Output: true
