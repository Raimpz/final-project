<template>
  <div class="the-list">
    <div class="shopping-item">
      <input
        class="checkbox"
        type="checkbox"
        :checked="isOnShoppingCart"
        @click="toggleItemInShoppingCart"
      />
      <h3
        :class="isOnShopCart ? shoppingItemClass : ''"
        v-if="isBeingEdited === false"
      >
        {{ shoppingItem }}
      </h3>
      <div>
        <input
          type="text"
          v-if="isBeingEdited === true"
          v-model="editedItem"
          :placeholder="shoppingItem"
          @keyup.enter="updateEditedItem"
        />
      </div>
    </div>
    <div class="todo-buttons">
      <button class="buttonl" @click="editShoppingItem">
        {{ isBeingEdited ? "Cancel" : "Edit" }}
      </button>
      <button
        class="buttonl"
        @click="deleteShoppingItem"
        v-if="isBeingEdited === false"
      >
        Delete
      </button>
      <button
        class="buttonl"
        v-if="isBeingEdited === true"
        @click="updateEditedItem"
      >
        Update
      </button>
    </div>
    <div class="showWarning">
      <h3 v-if="showWarning === true">Don't forget to input something!</h3>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebaseDb";

export default {
  emits: ["delete-shopping-item", "update-edited-item"],
  props: {
    shoppingItem: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isOnShoppingCart: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOnShopCart: this.isOnShoppingCart,
      shoppingItemClass: "crossedOut",
      isBeingEdited: false,
      editedItem: "",
      showWarning: false,
    };
  },
  methods: {
    toggleItemInShoppingCart() {
      this.isOnShopCart = !this.isOnShopCart;
      const newItem = {
        isOnShoppingCart: this.isOnShopCart,
      };
      db.collection("shopping-list")
        .doc(this.id)
        .update(newItem)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
    deleteShoppingItem() {
      this.$emit("delete-shopping-item", this.id);
    },
    editShoppingItem() {
      this.isBeingEdited = !this.isBeingEdited;
    },
    updateEditedItem() {
      if (this.editedItem === "") {
        this.showWarning = true;
        setTimeout(() => {
          this.showWarning = false;
        }, 1000);
      } else {
        this.$emit("update-edited-item", this.editedItem, this.id);
      }
      /* toggle update input */
      if (this.isBeingEdited === true) {
        this.isBeingEdited = false;
      } else {
        this.isBeingEdited = true;
      }
      this.editedItem = "";
    },
  },
};
</script>

<style scoped>
.the-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted lightgrey;
  position: relative;
  
}

.shopping-item {
  display: flex;
  align-items: center;
}

.todo-buttons {
  display: flex;
  padding: 0.5rem;
  align-items: flex-end;
}

.crossedOut {
  color: rgb(115, 173, 28);
}

.checkbox {
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
}

.buttonl {
  padding: 3px;
  margin-left: 0.5rem;
  border: 2px solid rgb(68, 38, 219);
  border-radius: 5px;
  background-color: rgb(201, 201, 244);
  
}
button:hover{
  cursor: pointer;
  opacity: 0.5;
}

.showWarning {
  position: absolute;
  width: 100%;
  text-align: center;
  top: -100%;
  color: red;
}
</style>
