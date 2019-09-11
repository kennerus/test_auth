<template>
  <form class="base-form" :class="className">
    <component v-for="(field, index) in fields"
               :key="field.id"
               :is="field.component"
               :fieldData="field"
               v-model="value[index]"
    ></component>
  </form>
</template>

<script>
  export default {
    name: 'BaseForm',
    props: {
      fields: {
        type: Object,
        required: true,
      },
      value: {
        type: Object,
      },
      className: {
        type: String,
        required: false
      },
    }
  }
</script>

<style scoped>

</style>