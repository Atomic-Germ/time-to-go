<template>
  <ion-page>
          <ion-header>
      <ion-toolbar id="top-bar">
                <ion-buttons slot="start">
          <ion-button hidden>
          </ion-button>
        </ion-buttons>

      <TopBar name="Weekday Waiver Manager" />

        <ion-buttons slot="end">
          <ion-button hidden>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <WeekdayWaiverManager name="Weekay Waiver Manager"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import TopBar from '@/components/TopBar.vue';
import WeekdayWaiverManager from '@/components/WeekdayWaiverManager.vue';
</script>

<script lang="ts">
export default defineComponent({
  components: { IonButton },
});
</script>
