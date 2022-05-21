<template>
  <main>
    <the-header></the-header>
    <div class="container">
      <shopping-list></shopping-list>
    </div>
  </main>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    ShoppingList,
    TheHeader,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: rgb(244, 252, 255);
}

.container {
  max-width: 750px;
  margin: 0 auto;
  padding: 50px 25px;
}
</style>
