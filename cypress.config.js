const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // retries: 2,
  e2e: {
    experimentalSessionAndOrigin: true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || "local";
      const environmentFilename = `./${environmentName}.settings.json`;
      console.log("loading %s", environmentFilename);
      const settings = require(environmentFilename);
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        };
      }
      console.log("loaded settings for environment %s", environmentName);

      return config;
    },

    viewportHeight: 900,
    viewportWidth: 1440,
    defaultCommandTimeout: 6000,
  },
});
