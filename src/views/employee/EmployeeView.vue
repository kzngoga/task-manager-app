<!-- eslint-disable vue/valid-v-slot -->
<template>
  <MainWrapper>
    <div class="w-75 mx-auto">
      <h2 class="font-bold text-center">All Employees</h2>
      <DataTable
        :headers="columnHeaders"
        :items="allUsers"
        :status="requestStatus"
        @open-modal="setNewEmployeeModalOpen(true)"
      >
        <template v-slot:item.isManager="{ value }">
          <v-chip color="success">
            {{ value }}
          </v-chip>
        </template>
      </DataTable>
    </div>
    <NewEmployeeModalVue
      :dialog="newEmployeeDialog"
      @close-modal="setNewEmployeeModalOpen(false)"
    />
  </MainWrapper>
</template>

<script>
import MainWrapper from '../../components/layout/MainWrapper.vue';
import DataTable from '../../components/table/Table.vue';
import NewEmployeeModalVue from './modals/NewEmployeeModal.vue';

export default {
  name: 'EmployeeView',
  components: {
    MainWrapper,
    DataTable,
    NewEmployeeModalVue
  },
  data() {
    return {
      columnHeaders: [
        { title: 'Name', value: 'name' },
        { title: 'Phone No.', value: 'phone' },
        { title: 'Email', value: 'email' },
        { title: 'Manager', value: 'isManager' }
      ],
      newEmployeeDialog: false
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
    },
    setNewEmployeeModalOpen(value) {
      this.newEmployeeDialog = value;
    }
  },
  mounted() {
    this.fetchAllUsers();
  }
};
</script>

<style lang="scss" scoped></style>
