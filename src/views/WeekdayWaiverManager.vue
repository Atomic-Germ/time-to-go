<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Weekday Waiver Manager</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Weekday Waiver Manager</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Weekday Waiver Manager page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
