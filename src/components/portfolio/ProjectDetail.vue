<template>
    <!-- container -->
    <div class="container-fluid">

        <!-- row -->
        <div class="row p-30-0">

            <!-- col -->
            <div class="col-lg-12">

            <!-- section title -->
            <div class="art-section-title">
                <!-- title frame -->
                <div class="art-title-frame">
                <!-- title -->
                <h4>{{project.ProjectTitle}}</h4>
                </div>
                <!-- title frame end -->
                <!-- right frame -->
                <div class="art-right-frame">
                <div class="art-project-category">{{project.filterID}}</div>
                </div>
                <!-- right frame end -->
            </div>
            <!-- section title end -->

            </div>
            <!-- col end -->

            <!-- col -->
            <div class="col-lg-12">

            <!-- slider container -->
            <div class="swiper-container art-works-slider" style="overflow: visible">
                <!-- slider wrapper -->
                <div class="swiper-wrapper">
                    <!-- slide -->
                    <div class="swiper-slide" v-for="(link, index) in project.galleryPath" :key="index">
                        <!-- item frame -->
                        <a data-fancybox="gallery" :href="link" class="art-a art-portfolio-item-frame art-horizontal">
                        <!-- img -->
                        <img :src="link" alt="item">
                        <!-- zoom icon -->
                        <span class="art-item-hover"><i class="fas fa-expand"></i></span>
                        </a>
                        <!-- item end -->
                    </div>
                    <!-- slide end -->
                </div>
                <!-- slider wrapper end -->
            </div>
            <!-- slider container end -->

            </div>
            <!-- col end -->

            <!-- col -->
            <div class="col-lg-12">

            <!-- slider navigation -->
            <div class="art-slider-navigation">

                <!-- left side -->
                <div class="art-sn-left">

                <!-- slider pagination -->
                <div class="swiper-pagination"></div>

                </div>
                <!-- left side end -->

                <!-- right side -->
                <div class="art-sn-right">

                <!-- slider navigation -->
                <div class="art-slider-nav-frame">
                    <!-- prev -->
                    <div class="art-slider-nav art-works-swiper-prev"><i class="fas fa-chevron-left"></i></div>
                    <!-- next -->
                    <div class="art-slider-nav art-works-swiper-next"><i class="fas fa-chevron-right"></i></div>
                </div>
                <!-- slider navigation -->

                </div>
                <!-- right side end -->

            </div>
            <!-- slider navigation end -->

            </div>
            <!-- col end -->

        </div>
        <!-- row end -->

    </div>
    <!-- container end -->
    <!-- container -->
    <div class="container-fluid">

        <!-- row -->
        <div class="row p-30-0">

            <!-- col -->
            <div class="col-lg-12">

            <!-- section title -->
            <div class="art-section-title">
                <!-- title frame -->
                <div class="art-title-frame">
                <!-- title -->
                <h4>Project details</h4>
                </div>
                <!-- title frame end -->
            </div>
            <!-- section title end -->

            </div>
            <!-- col end -->

            <!-- col -->
            <div class="col-lg-8">

            <div class="art-a art-card art-fluid-card">
                <h5 class="mb-15">Description</h5>
                <div class="mb-15">{{project.ProjectDetail.Description}}</div>
                <!-- button -->
                <div class="art-buttons-frame"><a :href="project.readMore" class="art-link art-color-link art-w-chevron" target="_blank">Product</a></div>
            </div>

            </div>
            <!-- col end -->

            <!-- col -->
            <div class="col-lg-4">

            <div class="art-a art-card">
                <!-- table -->
                <div class="art-table p-15-15">
                <ul>
                    <li>
                    <h6>Order Date:</h6><span>{{project.ProjectDetail.OrderDate}}</span>
                    </li>
                    <li>
                    <h6>Final Date:</h6><span>{{project.ProjectDetail.FinalDate}}</span>
                    </li>
                    <li>
                    <h6>Status:</h6><span>{{project.ProjectDetail.Status}}</span>
                    </li>
                    <li>
                    <h6>Client:</h6><span>{{project.ProjectDetail.Client}}</span>
                    </li>
                    <li>
                    <h6>Location:</h6><span>{{project.ProjectDetail.Location}}</span>
                    </li>
                </ul>
                </div>
                <!-- table end -->
            </div>

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
  name: 'ProjectDetail',
  data () {
    return {
      projects: Portfolio.projects,
      id: this.$store.getters['project/getProjectID'],
      project: null
    }
  },
  created () {
    this.project = this.projects[this.id]
  }
}
</script>
