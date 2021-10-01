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
        return axios.post('https://app.fakejson.com/q', {
          token: '_WbOFuL1TtNQ5LEm0ot-nQ',
          data: this.data,
        });
      },
      onSubmitSuccess(){
        this.data = { email: '' }
      }
    }
  });
}());
