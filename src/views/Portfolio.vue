<template>
    <div class="container-fluid">
        <div class="row p-30-0">
            <Filter/>
            <Projects/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Filter from '@/components/portfolio/Filter.vue'
import Projects from '@/components/portfolio/Projects.vue'

export default {
  name: 'Portfolio',
  components: {
    Filter,
    Projects
  },
  created () {
    this.$store.dispatch('page/setPage', 'Portfolio')
  }
}
</script>
