<template>

    <!-- container -->
    <div class="container-fluid">

        <!-- row -->
        <div class="row mb-5">

            <!-- col -->
            <div class="col-lg-12">

            <!-- call to action -->
            <div class="art-a art-banner" style="background-image: url(img/bg.jpg)">
                <!-- overlay -->
                <div class="art-banner-overlay">
                <!-- main title -->
                <div class="art-banner-title text-center">
                    <!-- title -->
                    <h1 class="mb-15">Ready to order your project?</h1>
                    <!-- suptitle -->
                    <div class="art-lg-text art-code mb-25">Let's work together!</div>
                    <!-- button -->
                    <a href="/contact" class="art-btn art-btn-md"><span>Contact me</span></a>
                </div>
                <!-- main title end -->
                </div>
                <!-- overlay end -->
            </div>
            <!-- call to action end  -->

            <!-- projects navigation -->
            <div class="art-a art-pagination">
                <!-- button -->
                <a @click.prevent="prev()" href="" class="art-link art-color-link art-w-chevron art-left-link"><span>Previous project</span></a>
                <div class="art-pagination-center art-m-hidden">
                <a class="art-link" href="/portfolio">All projects</a>
                </div>
                <!-- button -->
                <a @click.prevent="next()" href="" class="art-link art-color-link art-w-chevron"><span>Next project</span></a>
            </div>
            <!-- projects navigation end -->

            </div>
            <!-- col end -->

        </div>
        <!-- row end -->

    </div>
    <!-- container end -->
</template>

<script>
import Portfolio from '@/assets/json/portfolio.json'

export default {
  name: 'ReadyOrder',
  data () {
    return {
      id: this.$store.getters['project/getProjectID'],
      projects: Portfolio.projects
    }
  },
  methods: {
    prev () {
      if (this.id > 0) {
        this.$store.dispatch('project/setProjectID', this.id - 1)
        window.location.reload()
      } else {

      }
    },
    next () {
      if (this.id < this.projects.length - 1) {
        this.$store.dispatch('project/setProjectID', this.id + 1)
        window.location.reload()
      } else {

      }
    }
  }
}
</script>
