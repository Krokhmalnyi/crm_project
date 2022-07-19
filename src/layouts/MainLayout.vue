<template>
<div>
  <LoaderView v-if="loading" />

  <div class="app-main-layout" v-else>
    
    <NavbarView @click="isOpen = !isOpen" />

    <SidebarView v-model="isOpen" />
    
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/RecordView" v-tooltip="'Створити нову запись'">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import NavbarView from '@/components/app/NavbarView.vue'
import SidebarView from '@/components/app/SidebarView.vue'
import messages from "@/utils/messages";

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }

    this.loading = false
  },
  components: {
  NavbarView,
  SidebarView,
  },
    computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || "щось пішло не так");
    },
  },
}
</script>