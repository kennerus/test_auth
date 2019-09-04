export default {
  methods: {
    inputEvents_inputEmit(value) {
      this.$emit('input', value);
    },
    inputEvents_changeEmit(value) {
      this.$emit('change', value);
    },
    inputEvents_focusEmit(value) {
      this.$emit('focus', value);
    },
    inputEvents_blurEmit(value) {
      this.$emit('blur', value);
    }
  }
};
