<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Day Calendar</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Day Calendar</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Day Calendar page" />
    </ion-content>
    <ion-button id="punch-button">Punch In</ion-button>
  </ion-page>
</template>

<script lang="ts">
export default defineComponent({
    components: { IonButton },
  });
</script>

<script setup lang="ts">
import { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
