<template>
  <div class="the-list">
    <div class="shopping-item">
      <input
        class="checkbox"
        type="checkbox"
        @click="toggleItemInShoppingCart"
      />
      <h3
        :class="isOnShoppingCart ? shoppingItemClass : ''"
        v-if="isBeingEdited === false"
      >
        {{ shoppingItem }}
      </h3>
      <div>
        <input type="text" v-if="isBeingEdited === true" v-model="editedItem" />
        <button v-if="isBeingEdited === true" @click="updateEditedItem">
          Update
        </button>
      </div>
    </div>
    <div class="todo-buttons">
      <button @click="editShoppingItem">
        {{ isBeingEdited ? "Cancel" : "Edit" }}
      </button>
      <button @click="deleteShoppingItem">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shoppingItem: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOnShoppingCart: false,
      shoppingItemClass: "crossedOut",
      isBeingEdited: false,
      editedItem: "",
    };
  },
  methods: {
    toggleItemInShoppingCart() {
      this.isOnShoppingCart = !this.isOnShoppingCart;
      console.log(this.isOnShoppingCart);
    },
    deleteShoppingItem() {
      this.$emit("delete-shopping-item", this.id);
    },
    editShoppingItem() {
      this.isBeingEdited = !this.isBeingEdited;
    },
    updateEditedItem() {
      if (this.editedItem === "") {
        alert("Don't forget to input something!");
      } else {
        this.$emit("update-edited-item", this.editedItem);
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
}

.shopping-item {
  display: flex;
  align-items: center;
}

.todo-buttons {
  display: flex;
}

.crossedOut {
  text-decoration: line-through;
}

.checkbox {
  width: 18px;
  height: 18px;
}
</style>
