<template>
  <div>
    <h1>Category1</h1>
    <h2>Post list</h2>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'post1' }">Post1</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "category1"
  }
</script>

<style scoped>

</style>
