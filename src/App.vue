<template>
  <router-view />
</template>

<style>
@font-face
  font-family: "Overpass"
  src: url('@/assets/overpass-regular.woff2') format("woff2")

body
  margin: 0
  font-family: "Overpass"
  background-image: linear-gradient(35deg, #fdfcfb 0%, #e2d1c3 100%)

.app
  min-height: 100vh
  display: grid
  place-items: center
  color: #2c3e50

a
  color: #808080
  text-decoration: none

a:hover
  color: #808080
</style>
