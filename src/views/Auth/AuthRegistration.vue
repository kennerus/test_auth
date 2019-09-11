<template>
  <div class="container">
    <BaseForm :fields="fieldsRegistration"
              v-model="formData"
    />
  </div>
</template>

<script>
  import BaseForm from '../../components/BaseForm';
  import fieldsRegistration from '../../forms/fieldsRegistration';

  export default {
    name: 'AuthRegistration',
    components: {BaseForm},
    data() {
      return {
        fieldsRegistration,
        formData: {
          email: '',
          password: '',
          password_confirmation: '',
          name: '',
          surname: '',
          phone: '',
        },
      }
    },
  }
</script>

<style scoped>

</style>