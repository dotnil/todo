<template>
  <router-view />
</template>

<style>
@font-face
  font-family: "Montserrat"
  src: url('assets/montserrat-regular.woff2') format("woff2")

body
  margin: 0
  background-image: linear-gradient(35deg, #fdfcfb 0%, #e2d1c3 100%)

.app
  font-family: "Montserrat"
  min-height: 100vh
  display: grid
  place-items: center
  color: #2c3e50

a
  color: #2c3e50
  text-decoration: none

a:hover
  color: #808080
</style>
