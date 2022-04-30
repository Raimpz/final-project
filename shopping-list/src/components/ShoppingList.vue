<template>
  <div>
    <the-input @submit-item="addNewItem"></the-input>
    <div>
      <the-list
        v-for="listItem in shoppingList"
        :key="listItem.id"
        :id="listItem.id"
        :value="listItem.value"
      ></the-list>
    </div>
  </div>
</template>

<script>
import TheInput from "./layouts/TheInput.vue";
import TheList from "./layouts/TheList.vue";

export default {
  components: {
    TheInput,
    TheList,
  },
  data() {
    return {
      shoppingList: [],
    };
  },
  methods: {
    addNewItem(item) {
      const newItem = {
        id: new Date().toISOString(),
        value: item,
      };
      this.shoppingList.push(newItem);
    },
  },
};
</script>
