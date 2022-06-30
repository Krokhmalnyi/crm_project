<template>
  <div class="app-main-layout">
    
    <NavbarView @click="isOpen = !isOpen" />

    <SidebarView v-model="isOpen" />
    
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/RecordView">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavbarView from '@/components/app/NavbarView.vue'
import SidebarView from '@/components/app/SidebarView.vue'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
  NavbarView,
  SidebarView
    
  }
}
</script>