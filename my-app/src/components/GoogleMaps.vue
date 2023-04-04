<template>
  <div class="map-container">
    <GmapMap
      :center="{lat: 37.7749, lng: -122.4194}"
      :zoom="13"
      style="width: 100%; height: 100%;"
    />
  </div>
</template>
<script>
import { GmapMap } from "vue2-google-maps";

export default {
  components: {
    GmapMap,
  },
};
</script>

<style>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
