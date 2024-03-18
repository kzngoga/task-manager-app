<!-- eslint-disable vue/valid-v-slot -->
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

      <FormButton buttonText="New +" variant="elevated" @click="$emit('open-modal')" />
    </div>

    <v-data-table
      class="mt-3"
      :headers="headers"
      :items="items"
      item-key="name"
      :items-per-page="itemsPerPage"
      :fixed-header="true"
      :loading="status === 'loading'"
      :no-data-text="'No data available. Please check back later!'"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>

      <template v-slot:item.isManager="{ value }">
        <v-chip :color="getColor(value)">
          <v-icon v-if="value" icon="mdi-check-circle"></v-icon>
          <v-icon v-else icon="mdi-close"></v-icon>
        </v-chip>
      </template>
    </v-data-table>
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
    },
    status: {
      type: String,
      default: 'idle'
    }
  },
  methods: {
    getColor(value) {
      return value ? 'success' : 'error';
    }
  }
};
</script>

<style>
.table-container .table-container__header {
  width: 35%;
}

.v-table thead th span {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
}
</style>
