<template>
  <section class="container">
    <div>
      <p>{{ $store.state.message }}</p>
      <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
      <!-- mutationsの機能をstore側から呼び出すには、$store.commitを使用しないといけない -->
      <!-- <button v-on:click="$store.commit('updateMessage','Commit with payload')">Update</button> -->
      <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
      <!-- 値を渡したいときは第二引数に値を入れるこれをpayloadという -->
      <!-- <button v-on:click="$store.dispatch('updateMessageActions')">Update</button> -->
      <!-- storeのactionをよぶにはdispatchを使う -->
      <button v-on:click="$store.dispatch('updateMessageActions','Commit with payload')">Update</button>
      <!-- storeのactionをよぶにはdispatchメソッドを使う -->
      <!-- 値を渡したいときは第二引数に値を入れるこれをpayloadという -->
    </div>
  </section>
</template>

<script>

export default {
}
</script>
