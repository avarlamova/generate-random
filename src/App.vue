<template>
  <div class="bg-gray-100 w-full">
    <GenerateButton />
    <DataTable />
  </div>
</template>

<script>
import GenerateButton from "./components/GenerateButton.vue";
import DataTable from "./components/DataTable.vue";

export default {
  name: "App",
  components: {
    GenerateButton,
    DataTable,
  },
};
</script>

<style></style>
