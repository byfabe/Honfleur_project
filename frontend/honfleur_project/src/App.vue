<template>
  <div id="nav">
    <router-view/>
  </div>
  
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  background: #f1f1f1;
}
::-webkit-scrollbar {
  width: 8px;
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.863);
}
</style>
