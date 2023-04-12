<template>
  <div>
    <ul>
      <li v-for="map in mapList.maps" :key="map.id">
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
    };
  },
};
</script>

<style>

</style>
