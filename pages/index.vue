<template>
  <section class="container">
    <div>
      <p>{{ $store.state.hello.message }}</p>
      <!-- moduresモードで値を表示するには値の前にファイル名を記載 -->

      <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
      <!-- mutationsの機能をstore側から呼び出すには、$store.commitを使用しないといけない -->
      <!-- <button v-on:click="$store.commit('updateMessage','Commit with payload')">Update</button> -->
      <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
      <!-- 値を渡したいときは第二引数に値を入れるこれをpayloadという -->
      <!-- <button v-on:click="$store.dispatch('updateMessageActions')">Update</button> -->
      <!-- storeのactionをよぶにはdispatchを使う -->
      <!-- <button v-on:click="$store.dispatch('updateMessageActions','Commit with payload')">Update</button> -->
      <!-- storeのactionをよぶにはdispatchメソッドを使う -->
      <!-- 値を渡したいときは第二引数に値を入れるこれをpayloadという -->

      <button v-on:click="$store.dispatch('hello/updateMessageActions','Commit with payload')">Update</button>
      <!-- アクションの前にファイル名を記載 -->
    </div>
  </section>
</template>

<script>

export default {
}
</script>
