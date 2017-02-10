<template>
  <div class="sub">
    <h1 @click="add">sub page</h1>
    <div>{{ count }}</div>
  </div>
</template>
<script>
export default {
  name: 'sub',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    add: function () {
      this.$store.commit('increment', 5)
    }
  }
}
</script>
