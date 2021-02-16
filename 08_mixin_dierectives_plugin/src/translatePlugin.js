export default {
  install(app, options) {
    let defaultLanguage = 'am'
    console.log(options);

    const changeLanguage = language => {
      defaultLanguage = language
    };

    app.config.globalProperties.$alert = text => {
      window.alert(text);
    }

    app.config.globalProperties.$i18n = key => {
      return key.split('.').reduce((words, key) => {
        return words[key] || '++++ UNKNOWN  ++++';
      }, options[defaultLanguage])
    }

    app.provide('changeI18N', changeLanguage)
  }
}
