<template>
  <div>
    <the-input @submit-item="addNewItem"></the-input>
    <div>
      <the-list
        v-for="listItem in shoppingList"
        :key="listItem.id"
        :id="listItem.id"
        :shoppingItem="listItem.shoppingItem"
        @delete-shopping-item="deleteShoppingItem"
        @update-edited-item="editShoppingItem"
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
        shoppingItem: item,
      };
      this.shoppingList.push(newItem);
    },
    deleteShoppingItem(ItemID) {
      this.shoppingList = this.shoppingList.filter(
        (item) => item.id !== ItemID
      );
    },
    editShoppingItem(editedItem, ItemID) {
      let oldValue = this.shoppingList.find((item) => item.id === ItemID);
      oldValue.shoppingItem = editedItem;
    },
  },
};
</script>
