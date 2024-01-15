<template>
  <v-btn :variant="variant" :class="customClass" color="primary">
    {{ buttonText }}
  </v-btn>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    variant: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'outlined', 'tonal', 'text', 'plain', 'elevated'].includes(value);
      }
    },
    buttonText: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped></style>
