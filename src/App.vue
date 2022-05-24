<template>
  <router-view />
</template>

<style>
@font-face
  font-family: "AnonymousPro"
  src: url('assets/anonymous-pro-regular.woff2') format("woff2")

body
  margin: 0
  background-image: linear-gradient(35deg, #F5F5F5 0%, #EBE0D6 100%)

.app
  font-family: "AnonymousPro"
  min-height: 100vh
  display: grid
  place-items: center
  color: #373F51

a
  color: #2c3e50
  text-decoration: none

a:hover
  color: #808080
</style>
