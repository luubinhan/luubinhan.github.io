exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  const config = getConfig();
  
  // Remove ESLint plugin
  if (config.plugins) {
    config.plugins = config.plugins.filter(
      plugin => plugin.constructor.name !== 'ESLintWebpackPlugin'
    );
  }
  
  actions.replaceWebpackConfig(config);
};
