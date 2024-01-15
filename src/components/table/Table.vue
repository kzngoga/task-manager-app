<template>
  <div class="table-container d-flex flex-column ga-3 mt-5">
    <div class="table-container__header ml-auto d-flex ga-3 align-center">
      <v-text-field
        v-model="search"
        id="search"
        required
        class="form-field"
        :label="searchLabel"
        variant="outlined"
        hide-details="auto"
      />

      <FormButton buttonText="New +" variant="elevated" />
    </div>

    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      :items-per-page="itemsPerPage"
      class="mt-3"
    ></v-data-table>
  </div>
</template>

<script>
import FormButton from '../form/Button.vue';

export default {
  name: 'TableComponent',
  components: { FormButton },
  props: {
    searchLabel: {
      type: String,
      default: 'Search'
    },
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 5
    }
  }
};
</script>

<style scoped>
.table-container .table-container__header {
  width: 35%;
}
</style>
