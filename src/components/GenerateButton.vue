<template>
  <div class="flex space-x-2 justify-center">
    <button
      type="button"
      class="bg-green-600 m-1 p-7 px-6 py-2 rounded-full text-white font-serif text-lg hover:bg-green-700 hover:shadow-lg uppercase"
      @click="generate"
    >
      Сгенерировать
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "GenerateButton",
  methods: {
    ...mapActions({ generate: "generateRandomData" }),
  },
};
</script>

<style scoped></style>
