<template>
    <!-- menu bar -->
    <div class="art-menu-bar">

        <!-- menu bar frame -->
        <div class="art-menu-bar-frame">

        <!-- menu bar header -->
        <div class="art-menu-bar-header">
            <!-- menu bar button -->
            <a class="art-menu-bar-btn" href="#.">
            <!-- icon -->
            <span></span>
            </a>
            <!-- menu bar button end -->
        </div>
        <!-- menu bar header end -->

        <!-- current page title -->
        <div class="art-current-page">
            {{$store.getters['page/getPage']}}
        </div>
        <!-- current page title end -->

        <!-- scroll frame -->
        <div class="art-scroll-frame">

            <!-- menu -->
            <nav id="swupMenu">
            <!-- menu list -->
            <ul class="main-menu">
                <!-- menu item -->
                <li class="menu-item">
                    <a href="/">Home</a>
                </li>
                <!-- menu item -->
                <li class="menu-item">
                    <a href="/portfolio">Portfolio</a>
                </li>
                <!-- menu item -->
                <li
                    @click.prevent="updateMenu('experience')"
                    :class="highlightSection('experience')"
                >
                    <router-link to="/experience">History</router-link>
                </li>
                <!-- menu item -->
                <li
                    @click.prevent="updateMenu('contact')"
                    :class="highlightSection('contact')"
                >
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
            <!-- menu list end -->
            </nav>
            <!-- menu end -->

            <!-- language change -->
            <ul class="art-language-change">
            <!-- language item -->
            <!-- <li><a href="#.">JP</a></li> -->
            <!-- language item -->
            <li class="art-active-lang"><a href="#.">EN</a></li>
            </ul>
            <!-- language change end -->

        </div>
        <!-- scroll frame end -->

        </div>
        <!-- menu bar frame -->

    </div>
    <!-- menu bar end -->
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      contextSection: ''
    }
  },

  methods: {
    updateMenu (context) {
      this.contextSection = context
    },
    highlightSection (section) {
      return {
        'menu-item': true,
        'menu-item current-menu-item': section === this.contextSection
      }
    }
  }
}
</script>
