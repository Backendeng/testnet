<template>
  <!-- container -->
  <div class="container-fluid">

    <!-- row -->
    <div class="row p-30-0">
      <Education/>
      <WorkHistory/>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Education from '@/components/history/education.vue'
import WorkHistory from '@/components/history/workHistory.vue'

export default {
  name: 'Experience',
  components: {
    Education,
    WorkHistory
  },
  created () {
    this.$store.dispatch('page/setPage', 'History')
  }
}
</script>
