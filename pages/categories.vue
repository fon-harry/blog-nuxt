<template>
  <div>
    <h1>Categories</h1>
    <h2>Categories list</h2>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'category1' }">Category1</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "categories"
  }
</script>

<style scoped>

</style>
