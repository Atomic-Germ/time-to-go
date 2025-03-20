<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon src="/LeftArrow.svg"></ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-title>March 20 2025</ion-title>
        
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon src="/RightArrow.svg"></ion-icon>
          </ion-button>
        </ion-buttons>
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
import { IonIcon, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
