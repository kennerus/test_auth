<template>
  <div class="base-input-wrap" :class="fieldData.classNameWrap">
    <label :for="fieldData.id"
           class="base-label"
           :class="fieldData.classNameLabel"
    >
      {{fieldData.label}}
    </label>
    <the-mask :id="fieldData.id"
              :tokens="customTokens"
              :mask="['+7 (Y##) ###-##-##']"
              v-model="tel"
              :masked="true"
              :placeholder="fieldData.placeholder"
              :name="fieldData.name"
              class="base-input"
              :class="fieldData.className"
    >
    </the-mask>
  </div>
</template>

<script>
  import MixinInputMethods from '../../mixins/MixinInputMethods';
  import MixinInputData from '../../mixins/MixinInputData';

  export default {
    name: 'InputPhone',
    mixins: [MixinInputData, MixinInputMethods],
    watch: {
      tel(value) {
        if (value[1] && value[1] === '8') {
          const result = value.replace("+8", "+7");
          this.$nextTick(() => this.tel = result);
        }

        this.inputEvents_inputEmit(value);
      }
    },
    data() {
      return {
        customTokens: {
          'Y': {pattern: /[12345690]/},
          '#': {pattern: /\d/},
          'X': {pattern: /[0-9a-zA-Z]/},
          'S': {pattern: /[a-zA-Z]/},
          'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},
          'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},
          '!': {escape: true}
        },
        tel: ''
      }
    },
  }
</script>

<style scoped>

</style>