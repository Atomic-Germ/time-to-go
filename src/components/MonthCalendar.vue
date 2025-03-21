<template>
  <div class="container">
  <ion-card>
  <ion-grid>
    <ion-row :fixed="true">
      <ion-col class="today" size="auto">Today</ion-col>
      <ion-col></ion-col>
      <ion-col class="total" size="auto">Total</ion-col>
    </ion-row>
  </ion-grid>
  </ion-card>
  <ion-card>
    <ion-grid :fixed="true">
      <ion-row>
      <ion-col size="auto">Sat 21</ion-col>
      <ion-col><ion-button size="small"><ion-icon src="/Remove.svg"></ion-icon></ion-button><ion-button size="small"><ion-icon src="/LeftArrow.svg"></ion-icon></ion-button></ion-col>
      <ion-col><ion-input></ion-input></ion-col>
      <ion-col><ion-button size="small"><ion-icon src="/RightArrow.svg"></ion-icon></ion-button><ion-button size="small"><ion-icon src="/Add.svg"></ion-icon></ion-button></ion-col>
      <ion-col size="auto">8:00</ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped>
ion-grid {
  --ion-grid-width: 100%;
}

ion-col {
  text-align: center;
}

ion-col .today {
  text-align: left;
}

ion-col .total {
  text-align: right;
}

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
