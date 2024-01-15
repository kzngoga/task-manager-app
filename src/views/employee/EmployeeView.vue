<template>
  <MainWrapper>
    <div class="w-75 mx-auto">
      <h2 class="font-bold text-center">All Employees</h2>
      <DataTable :headers="columnHeaders" :items="employees" />
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
      ],
      employees: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
