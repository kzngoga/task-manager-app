<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialogValue" width="600">
      <v-card>
        <v-card-title class="font-weight-bold uppercase">{{ modalTitle }}</v-card-title>

        <!-- Content -->
        <v-card-text>
          <slot></slot>
        </v-card-text>

        <!-- Actions -->
        <v-card-actions class="me-3 mb-2">
          <v-spacer></v-spacer>
          {{ disableSubmitting }}
          <FormButton
            :buttonText="proceedBtnText"
            variant="elevated"
            class="me-2"
            :disabled="disableSubmitting"
            @click="handleProceed"
          />
          <FormButton
            :buttonText="cancelBtnText"
            :type="proceedBtnType"
            variant="text"
            color="red"
            :disabled="disableSubmitting"
            @click="$emit('close-modal')"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import FormButton from '../form/Button.vue';

export default {
  name: 'ModalComponent',
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    disableSubmitting: {
      type: Boolean
    },
    modalTitle: {
      type: String,
      required: true,
      default: ''
    },
    width: {
      type: String,
      default: '600'
    },
    proceedBtnText: {
      type: String,
      default: 'Save'
    },
    proceedBtnType: {
      type: String,
      default: 'button'
    },
    cancelBtnText: {
      type: String,
      default: 'Cancel'
    }
  },
  components: { FormButton },
  watch: {
    dialog(newVal) {
      this.dialogValue = newVal;
    }
  },
  data() {
    return {
      dialogValue: false
    };
  },
  methods: {
    handleProceed(e) {
      e.preventDefault();

      this.$emit('proceed');
    }
  }
};
</script>
<style scoped></style>
