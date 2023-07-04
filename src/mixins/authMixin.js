import router from '../router';

export default {
  data() {
    return {
      isAdminLoggedIn: false
    };
  },
  mounted() {
    this.checkIfAdminLoggedIn();
  },
  methods: {
    checkIfAdminLoggedIn() {
      if (localStorage.getItem('TASK_APP_ADMIN_TOKEN')) {
        this.isAdminLoggedIn = true;
      } else {
        this.isAdminLoggedIn = false;
        router.push('/login');
      }
    }
  }
};
