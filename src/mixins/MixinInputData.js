import InputField from '../models/FormField';

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    fieldData: {
      type: Object,
      default: () => InputField
    }
  },
  data() {
    return {

    }
  }
}