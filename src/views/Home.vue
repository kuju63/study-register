<template>
  <div class="home">
    <application-header />
    <detail-component />
    <regist-form />
  </div>
</template>

<script>
// @ is an alias to /src
import ApplicationHeader from "@/components/ApplicationHeader.vue";
import DetailComponent from "@/components/DetailComponent.vue";
import RegistForm from "@/components/RegistForm";

export default {
  name: "Home",
  components: {
    ApplicationHeader,
    DetailComponent,
    RegistForm
  }
};
</script>
