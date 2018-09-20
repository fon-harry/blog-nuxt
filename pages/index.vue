<template>
  <div>
    <h1>Home page</h1>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'categories' }">Categories</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    name: "index"
  }
}
</script>

<style scoped>

</style>
