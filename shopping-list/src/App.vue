<template>
  <main>
    <shopping-list></shopping-list>
  </main>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";

export default {
  components: {
    ShoppingList,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
