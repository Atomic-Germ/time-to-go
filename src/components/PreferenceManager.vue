<template>
  <ion-card id="scheduling">
    <ion-card-header>
      <ion-card-subtitle>Scheduling</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-icon size="small" slot="start"></ion-icon>
          <ion-button>Sun</ion-button>
          <ion-button>Mon</ion-button>
          <ion-button>Tue</ion-button>
          <ion-button>Wed</ion-button>
          <ion-button>Thu</ion-button>
          <ion-button>Fri</ion-button>
          <ion-button>Sat</ion-button>
        </ion-item>
        <ion-item>
          <ion-icon size="small" slot="start"></ion-icon>
          <ion-toggle>Hide non-working days</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-icon size="small" slot="start"></ion-icon>
          Hours per day <ion-input slot="end"></ion-input>
        </ion-item>
        <ion-item>
          <ion-icon size="small" src="/lunch.svg" name="utensils-solid" aria-hidden="true" slot="start"></ion-icon>
          <ion-toggle>Scheduled breaks</ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-icon size="small" src="/stopwatch.svg" name="stopwatch-solid" aria-hidden="true" slot="start"></ion-icon>
          Break intervals <ion-input slot="end"></ion-input> 
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
  <ion-card id="notifications">
    <ion-card-header>
      <ion-card-subtitle>Notifications</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-icon size="small" src="/notifications.svg" name="notifications-outline" aria-hidden="true" slot="start"></ion-icon>
          <ion-toggle>Notifications</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-icon size="small" src="/forward.svg" name="forward-solid" aria-hidden="true" slot="start"></ion-icon>
          <ion-toggle>Recurring Notifications</ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-icon size="small" src="/stopwatch.svg" name="stopwatch-solid" aria-hidden="true" slot="start"></ion-icon>
          Snooze <ion-input slot="end"></ion-input>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>App Behaveior</ion-card-subtitle>
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
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
