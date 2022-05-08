<template>
  <div>
    <the-input @submit-item="addNewItem"></the-input>
    <div>
      <the-list
        v-for="listItem in shoppingList"
        :key="listItem.id"
        :id="listItem.id"
        :shoppingItem="listItem.shoppingItem"
        :isOnShoppingCart="listItem.isOnShoppingCart"
        @delete-shopping-item="deleteShoppingItem"
        @update-edited-item="editShoppingItem"
      ></the-list>
    </div>
  </div>
</template>

<script>
import TheInput from "./layouts/TheInput.vue";
import TheList from "./layouts/TheList.vue";
import { db } from "../firebaseDb";

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
        shoppingItem: item,
        isOnShoppingCart: false,
      };
      db.collection("shopping-list")
        .add(newItem)
        .then(() => {
          // alert("Shopping Item successfully created!");
          this.loadItems();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteShoppingItem(ItemID) {
      db.collection("shopping-list")
        .doc(ItemID)
        .delete()
        .then(() => {
          console.log("Item deleted!");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    editShoppingItem(editedItem, ItemID) {
      console.log(editedItem);
      const newItem = {
        shoppingItem: editedItem,
      };
      db.collection("shopping-list")
        .doc(ItemID)
        .update(newItem)
        .then(() => {
          console.log("Item successfully updated!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadItems() {
      db.collection("shopping-list").onSnapshot((snapshotChange) => {
        this.shoppingList = [];
        snapshotChange.forEach((doc) => {
          this.shoppingList.push({
            id: doc.id,
            shoppingItem: doc.data().shoppingItem,
            isOnShoppingCart: doc.data().isOnShoppingCart,
          });
        });
      });
    },
  },
  mounted() {
    this.loadItems();
  },
};
</script>
