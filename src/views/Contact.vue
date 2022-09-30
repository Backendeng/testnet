<template>
  <!-- container -->
    <div class="container-fluid">

      <!-- row -->
      <div class="row p-30-0">
      <ContactInfo/>
      <GetInTouch/>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ContactInfo from '@/components/contact/contactInfo.vue'
import GetInTouch from '@/components/contact/getInTouch.vue'

export default {
  name: 'Contact',
  components: {
    ContactInfo,
    GetInTouch
  },
  created () {
    this.$store.dispatch('page/setPage', 'Contact')
  }
}
</script>
