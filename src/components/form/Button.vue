<template>
  <v-btn
    :variant="variant"
    :class="customClass"
    color="primary"
    @click="handleClick"
    :disabled="isDisabled || isLoading"
  >
    {{ buttonText }}

    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="white"
      :width="2"
      size="20"
      class="ml-3"
    ></v-progress-circular>
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
    },
    handleClick: {
      type: Function,
      required: true
    },
    isLoading: {
      type: Boolean
    },
    isDisabled: {
      type: Boolean
    }
  }
};
</script>

<style scoped></style>
