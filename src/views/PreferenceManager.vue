<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Preferences</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="small">Preference Manager</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Preference Manager" hidden="true"/>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Working Days</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-button :disabled="true">Sun</ion-button>
          <ion-button>Mon</ion-button>
          <ion-button>Tue</ion-button>
          <ion-button>Wed</ion-button>
          <ion-button>Thu</ion-button>
          <ion-button>Fri</ion-button>
          <ion-button :disabled="true">Sat</ion-button>
        </ion-item>
        <ion-item>
          <ion-icon size="small" slot="start"></ion-icon>
          <ion-toggle>Hide non-working days</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-icon size="small" slot="start"></ion-icon>
          Hours per day
        </ion-item>
        <ion-item>
          <ion-icon src="/lunch.svg" name="utensils-solid" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-toggle aria-label="sheduled break times">
            Scheduled break time</ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-icon size="small" slot="start"></ion-icon>
          Break time interval
        </ion-item>
      </ion-list>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Notifications</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
        <ion-list>
        <ion-item>
          <ion-icon src="/notifications.svg" name="notifications-outline" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-toggle aria-label="Notifications">
          Notifications
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-icon src="/forward.svg" name="forward-solid" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-toggle>
            Recurring Notifications</ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-icon src="/stopwatch.svg" name="stopwatch-solid" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-input 
            label="Snooze" 
            type="number" 
            :clear-on-edit="true" 
            placeholder="5">
          </ion-input>
        </ion-item>
      </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>App Behavior</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-icon src="/globe-solid.svg" name="globe-solid" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-select placeholder="Choose a language">
          <ion-label>Language</ion-label>
          <ion-select-option value="en">English</ion-select-option>
          <ion-select-option value="es">Spanish</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-icon src="/start-on-login.svg" name="play-solid" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-toggle>
            Start on login</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-icon size="small" slot="start"></ion-icon>
          <ion-toggle>Minimize to tray</ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-icon size="small" slot="start"></ion-icon>
          <ion-toggle>Close window exits app</ion-toggle>
        </ion-item>
      </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>View</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
        <ion-list>
        <ion-item>
          <ion-icon src="/calendar-day-solid.svg" name="count-today" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-toggle>
          Count today in total</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-icon src="/start-from-date.svg" name="start-date" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-toggle>
          Overall balance start date</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-icon src="/eye-solid.svg" name="default-view" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-toggle>
          Default view</ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-icon src="/swatchbook-solid.svg" name="color-swatch" aria-hidden="true" size="small" slot="start"></ion-icon>
          <ion-toggle>
          Themes</ion-toggle>
        </ion-item>
      </ion-list>
      </ion-card-content>
      </ion-card>
      <ion-card>
      <ion-button color="danger" size="small">
        <ion-icon src="/reset.svg" name="reset-options" aria-hidden="true" slot="start"></ion-icon>
        default preferences</ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonInput, IonIcon, IonList, IonItem, IonButton, IonToggle, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

<script lang="ts">
export default defineComponent({
  components: { IonItem, IonList, IonInput, IonButton, IonToggle },
});
</script>
