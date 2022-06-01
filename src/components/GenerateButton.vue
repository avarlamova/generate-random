<template>
  <div class="flex flex-col justify-center items-center m-auto">
    <button
      type="button"
      class="bg-green-600 m-6 p-8 px-7 py-3 rounded-full text-white font-serif text-lg hover:bg-green-700 hover:shadow-lg uppercase"
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
