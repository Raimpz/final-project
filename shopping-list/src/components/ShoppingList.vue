<template>
  <article>
    <div class="input-container">
      <the-input @submit-item="addNewItem"></the-input>
      <div class="text">
        <h3 v-if="itemAdded === true" class="alert-text">
          Item added successfully!
        </h3>
        <h3 v-if="itemDeleted === true" class="warning-text">
          Item deleted successfully!
        </h3>
        <h3 v-if="itemEddited === true" class="alert-text">
          Item eddited successfully!
        </h3>
      </div>
    </div>
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
  </article>
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
      itemAdded: false,
      itemDeleted: false,
      itemEddited: false,
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
          this.itemAdded = true;
          setTimeout(() => {
            this.itemAdded = false;
          }, 1000);
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
          this.itemDeleted = true;
          setTimeout(() => {
            this.itemDeleted = false;
          }, 1000);
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
          this.itemEddited = true;
          setTimeout(() => {
            this.itemEddited = false;
          }, 1000);
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

<style scoped>
.input-container {
  position: relative;
}

.text {
  text-align: center;
  position: absolute;
  top: -100%;
  width: 100%;
}

.alert-text {
  color: green;
}

.warning-text {
  color: red;
}
</style>
