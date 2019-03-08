module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Button',
      externals: {
        react: 'React'
      }
    }
  }
}
