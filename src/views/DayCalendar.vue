<template>
    <div hidden><ion-title>DayCalendar</ion-title></div>
    <ion-page>
    <ion-header>
      <ion-toolbar id="top-bar">
                <ion-buttons slot="start">
          <ion-button>
            <ion-icon src="/LeftArrow.svg"></ion-icon>
          </ion-button>
        </ion-buttons>

      <TopBar name="March 20 2025" />

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon src="/RightArrow.svg"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <DayCalendar name="Day Calendar page" />
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
import { IonIcon, IonButtons, IonButton, IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import TopBar from '@/components/TopBar.vue';
import DayCalendar from '@/components/DayCalendar.vue';
</script>
