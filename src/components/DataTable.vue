<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b">
              <tr>
                <th :key="i" v-for="(column, i) in columns">
                  {{ column }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="i in 50"
                :key="i"
                class="border-b bg-gray-50 border-gray-200"
              >
                <td
                  class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                >
                  {{ getValue(name, i) }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ getValue(price, i) }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ getValue(amount, i) }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  Val4
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DataTable",
  data() {
    return {
      columns: ["Наименование", "Цена", "Количество", "Стоимость"],
    };
  },
  computed: {
    ...mapGetters({
      names: "getRandomNames",
      prices: "getRandomPrices",
      amounts: "getRandomAmounts",
    }),
  },
  methods: {
    getValue(parameter, i) {
      switch (parameter) {
        case "name":
          return this.names[i];

        case "price":
          return this.prices[i];

        case "amount":
          return this.amounts[i];

        default:
          break;
      }
      return this.names[i];
    },
  },
};
</script>
