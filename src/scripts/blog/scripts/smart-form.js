(function(){
  const { tRow, tCol, tForm, tField, tInput, tButton } = taslonicVue;

  const app = new Vue({
    el: '[data-root]',
    components: {
      tRow,
      tCol,
      tForm,
      tField,
      tInput,
      tButton
    },
    data(){
      return {
        data: {},
        validEmailRegex: new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/, 'i'),
        emailValidations: [{
          isValid: value => this.validEmailRegex.test(value),
          errorMessage: 'Please, enter a valid email.'
        }]
      };
    },
    methods: {
      onSubmit(){
        return new Promise(resolve => {
          setTimeout(resolve, 1000);
        });
      },
      onSubmitSuccess(){
        this.data = { email: '' }
      }
    }
  });
}());
