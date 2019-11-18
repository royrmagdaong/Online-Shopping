<!-- BANNER FROM GITHUB -->

<template>
  <div>
    <!-- Large and Up -->
    <v-carousel
        v-if="$vuetify.breakpoint.lgAndUp"
        cycle
        height="350"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">{{ slide }} PROaaaMOS</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <!-- Small and Medium -->

      <v-carousel
        v-if="$vuetify.breakpoint.mdOnly || $vuetify.breakpoint.smOnly"
        cycle
        height="300"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-1">{{ slide }} PROMOS</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>



      <!-- Extra small Only -->

      <v-carousel
        v-if="$vuetify.breakpoint.xsOnly"
        cycle
        height="180"
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-1">{{ slide }} PROMOS</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
  </div>
</template>

<script>

export default {
  data(){
      return{
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
  },
  methods:{
      
  },
  
}
</script>

<style scoped>

</style>
