<template>
  <div>
    Map Types
    <div v-for="(mapType, index) in mapTypes" :key="index">
      <label for="maptype-land">
        <input type="checkbox" id="maptype-land" :value="mapType" v-model="mapTypeSelected" />
        {{ mapType }}
      </label>
    </div>
  </div>
  <div>
    <ul>
      <li v-for="map in filteredMaps" :key="map.id">
        {{ map.name }}<img v-bind:src="map.image" v-bind:alt="map.name"/>
      </li>
    </ul>
  </div>
</template>

<script>
import mapList from './maps';

export default {
  name: 'MapList',
  data() {
    return {
      mapList,
      mapTypes: ['Land', 'Water'],
      mapTypeSelected: ['Land', 'Water'],
    };
  },
  computed: {
    filteredMaps() {
      return this.mapList.maps.filter((map) => this.mapTypeSelected.includes(map.type));
    },
  },
};
</script>

<style>

</style>
