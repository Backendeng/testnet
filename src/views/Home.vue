<template>
  <Index/>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/index/Index.vue'

export default {
  name: 'Home',
  components: {
    Index
  },
  created () {
    this.$store.dispatch('page/setPage', 'Home')
  }
}
</script>
