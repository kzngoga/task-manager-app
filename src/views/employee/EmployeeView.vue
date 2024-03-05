<template>
  <MainWrapper>
    <div class="w-75 mx-auto">
      <h2 class="font-bold text-center">All Employees</h2>
      <DataTable :headers="columnHeaders" :items="allUsers" :status="requestStatus" />
    </div>
  </MainWrapper>
</template>

<script>
import MainWrapper from '../../components/layout/MainWrapper.vue';
import DataTable from '../../components/table/Table.vue';

export default {
  name: 'EmployeeView',
  components: {
    MainWrapper,
    DataTable
  },
  data() {
    return {
      columnHeaders: [
        { title: 'Name', value: 'name' },
        { title: 'Phone No.', value: 'phone' },
        { title: 'Email', value: 'email' },
        { title: 'Manager', value: 'isManager' }
      ]
    };
  },
  computed: {
    allUsers() {
      const userGetter = this.$store.getters['employee/allEmployees'];
      return userGetter.data;
    },
    requestStatus() {
      const userGetter = this.$store.getters['employee/allEmployees'];
      return userGetter.status;
    }
  },
  methods: {
    async fetchAllUsers() {
      this.$store.dispatch('employee/fetchAllEmployees');
    }
  },
  mounted() {
    this.fetchAllUsers();
  }
};
</script>

<style lang="scss" scoped></style>
