<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Preferences</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <PreferenceManager name="Preference Manager"/>
    </ion-content>
      <ion-button color="danger" size="small">
        <ion-icon src="/reset.svg" name="reset-options" aria-hidden="true" slot="start"></ion-icon>
        reset default preferences</ion-button>
  </ion-page>
</template>

<script setup lang="ts">
import { IonIcon, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import PreferenceManager from '@/components/PreferenceManager.vue';
</script>

<script lang="ts">
export default defineComponent({
  components: { IonButton },
});
</script>
