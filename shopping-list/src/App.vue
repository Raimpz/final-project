<template>
  <main>
    <div class="container">
      <shopping-list></shopping-list>
    </div>
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

main {
  height: 100vh;
  width: 100vw;
}

.container {
  height: 100%;
  max-width: 750px;
  margin: 0 auto;
}
</style>
