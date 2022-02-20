<template>
  <section class="container">
    <div>
      <p>{{ $store.state.message }}</p>
      <button v-on:click="$store.commit('updateMessage')">Update</button>
      <!-- mutationsの機能をstore側から呼び出すには、$store.commitを使用しないといけない -->
    </div>
  </section>
</template>

<script>

export default {
}
</script>
