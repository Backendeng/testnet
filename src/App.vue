<template>
  <!-- app -->
  <div class="art-app">

    <!-- mobile top bar -->
    <div class="art-mobile-top-bar"></div>

    <!-- app wrapper -->
    <div class="art-app-wrapper">

      <!-- app container end -->
      <div class="art-app-container">
        <Info/>
        <!-- content -->
        <div class="art-content">

          <!-- curtain -->
          <div class="art-curtain"></div>

          <!-- top background -->
          <div class="art-top-bg" style="background-image: url(img/bg.jpg)">
            <!-- overlay -->
            <div class="art-top-bg-overlay"></div>
            <!-- overlay end -->
          </div>
          <!-- top background end -->

          <!-- swup container -->
          <div class="transition-fade" id="swup">

            <!-- scroll frame -->
            <div id="scrollbar" class="art-scroll-frame">
              <router-view/>
              <Footer/>
            </div>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
    <!-- preloader -->
    <!-- preloader end -->

  </div>

</template>

<script>
// @ is an alias to /src
import Info from '@/components/info/Info.vue'
import Menu from '@/components/menu/Menu.vue'
import Footer from '@/components/menu/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Info,
    Footer
  }
}

</script>
