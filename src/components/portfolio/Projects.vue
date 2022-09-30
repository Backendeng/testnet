<template>
    <div class="art-grid art-grid-3-col art-gallery">

        <div v-for="(project, index) in projects" :key="index">
            <div :class="'art-grid-item '+project.filterID">
                <!-- grid item frame -->
                <a data-fancybox="gallery" :href="project.galleryPath[0]" :class="'art-a art-portfolio-item-frame art-'+project.gallerySize">
                    <!-- img -->
                    <img :src="project.galleryPath[0]" alt="item">
                    <!-- zoom icon -->
                    <span class="art-item-hover"><i class="fas fa-expand"></i></span>
                </a>
                <!-- grid item frame end -->
                <!-- description -->
                <div class="art-item-description">
                <!-- title -->
                <h5 class="mb-15">{{project.ProjectTitle}}</h5>
                <div class="mb-15">{{project.projectDescription}}</div>
                <!-- button -->
                <a @click.prevent="setId(index)" href="/project" class="art-link art-color-link art-w-chevron">Read more</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Portfolio from '@/assets/json/portfolio.json'

export default {
  name: 'Projects',
  data () {
    return {
      projects: Portfolio.projects
    }
  },
  methods: {
    setId (id) {
      this.$store.dispatch('project/setProjectID', id)
    }
  }
}
</script>
