<template>
  <Modal
    modal-title="Add new Employee"
    :dialog="dialog"
    :disable-submitting="requestStatus === 'loading'"
    proceedBtnType="submit"
    @close-modal="$emit('close-modal')"
    @proceed="handleProceed"
  >
    <v-form v-model="formValid" ref="newEmployeeForm" lazy-validation>
      <v-row dense>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.name"
            id="name"
            required
            class="form-field mb-3"
            label="Name"
            variant="outlined"
            validate-on="blur"
            :rules="nameRules"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.phone"
            id="phone"
            class="form-field mb-3"
            required
            label="Phone No."
            variant="outlined"
            validate-on="blur"
            :rules="phoneRules"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.email"
            class="form-field mb-3"
            required
            label="Email"
            variant="outlined"
            validate-on="blur"
            :rules="emailRules"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-switch
            v-model="formData.isManager"
            id="email"
            label="Is Manager?"
            color="primary"
          ></v-switch>
        </v-col>
      </v-row>
    </v-form>

    <p v-if="showError" class="text-center text-red font-weight-bold mt-2">
      {{ `Error ${errorDetails.status} - ${errorDetails.message}` }}
    </p>
  </Modal>
</template>
<script>
import Modal from '../../../components/modal/Modal.vue';
import { validateEmail } from '../../../helpers/validations';

export default {
  name: 'NewEmployeeModal',
  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Modal
  },
  computed: {
    nameRules() {
      return [(v) => !!v || 'Name is required'];
    },
    phoneRules() {
      return [
        (v) => !!v || 'Phone No. is required',
        (v) => (v && v.trim().length === 10) || 'Phone No. must have 10 characters!'
      ];
    },
    emailRules() {
      return [
        (v) => !!v || 'Email is required',
        (v) => (v && validateEmail(v)) || 'Email must be valid!'
      ];
    },
    requestStatus() {
      const userGetter = this.$store.getters['employee/newEmployee'];
      return userGetter.status;
    },
    errorDetails() {
      const userGetter = this.$store.getters['employee/newEmployee'];
      return userGetter.error;
    },
    showError() {
      return this.requestStatus === 'error' && this.errorDetails !== null;
    }
  },
  data() {
    return {
      formValid: false,
      formData: {
        name: '',
        phone: '',
        email: '',
        isManager: false
      }
    };
  },
  watch: {
    requestStatus(newVal) {
      if (newVal === 'success') {
        this.$emit('close-modal');
        this.$store.dispatch('employee/fetchAllEmployees');
      }
    }
  },
  methods: {
    handleProceed() {
      this.$refs.newEmployeeForm.validate();

      if (this.formValid) {
        const payload = { ...this.formData };
        this.$store.dispatch('employee/addNewEmployee', payload);
      }
    }
  }
};
</script>
<style scoped></style>
