<template>
  <ProjectDetail/>
  <CounterFrame/>
  <ReadyOrder/>
</template>

<script>
// @ is an alias to /src
import ProjectDetail from '@/components/portfolio/ProjectDetail.vue'
import ReadyOrder from '@/components/portfolio/ReadyOrder.vue'
import CounterFrame from '@/components/index/CounterFrame.vue'

export default {
  name: 'Project',
  components: {
    ProjectDetail,
    ReadyOrder,
    CounterFrame
  },
  created () {
    this.$store.dispatch('page/setPage', 'Project')
  }
}
</script>
