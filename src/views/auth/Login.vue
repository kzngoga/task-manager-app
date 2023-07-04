<template>
  <v-main class="login-wrapper">
    <v-card max-width="30%" class="mx-auto pa-12 login-wrapper__content" elevation="5" rounded>
      <h3 class="text-center font-weight-bold mb-6">Login Form</h3>
      <v-form v-model="formValid" ref="loginForm" lazy-validation>
        <v-text-field
          v-model="username"
          id="username"
          required
          class="form-field mb-3"
          label="Username"
          variant="outlined"
          :rules="usernameRules"
          validate-on="blur"
        />
        <v-text-field
          v-model="password"
          required
          class="form-field"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          variant="outlined"
          :rules="passwordRules"
          validate-on="blur"
        >
          <template v-slot:append-inner>
            <v-icon
              :icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              style="cursor: pointer"
              @click="toggleShowPassword"
            />
          </template>
        </v-text-field>
        <v-btn
          color="primary"
          block
          variant="elevated"
          size="large"
          class="mt-5 font-weight-bold"
          :disabled="isLoading"
          @click="handleLogin"
        >
          Submit
          <v-progress-circular
            v-if="isLoading"
            indeterminate
            color="white"
            :width="2"
            size="20"
            class="ml-3"
          ></v-progress-circular>
        </v-btn>
      </v-form>
      <p
        v-if="!isLoading && requestResponse.isError"
        class="text-error font-weight-bold mt-3 text-center"
      >
        {{ `Error ${requestResponse.status}: ${requestResponse.message}` }}
      </p>
    </v-card>
  </v-main>
</template>
<script>
import router from '../../router';

export default {
  name: 'LoginPage',
  data() {
    return {
      formValid: false,
      username: '',
      password: '',
      usernameRules: [(v) => !!v || 'Username is required'],
      passwordRules: [(v) => !!v || 'Password is required'],
      showPassword: false
    };
  },
  computed: {
    requestResponse() {
      return this.$store.getters['auth/requestResponse'];
    },
    isLoading() {
      return this.$store.getters['auth/isLoading'];
    }
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    isFieldValid(fieldName) {
      return fieldName;
    },
    async handleLogin() {
      this.$refs.loginForm.validate();
      if (this.formValid) {
        const body = {
          username: this.username,
          password: this.password
        };

        this.$store.dispatch('auth/login', body);
      }
    }
  },
  mounted() {
    if (this.isAdminLoggedIn) {
      router.push('/');
    }
  }
};
</script>
<style>
.login-wrapper {
  position: relative;
}
.login-wrapper__content {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-wrapper__content h3 {
  font-size: 20px;
  text-transform: uppercase;
}

.form-field.success .v-field__outline {
  color: #00cc66;
}
</style>
