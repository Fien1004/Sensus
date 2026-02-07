<template>
  <div class="phone">
    <div class="iconWrap" aria-hidden="true">
      <img
        :src="pauseIcon"
        alt=""
        class="pauseIcon"
      />
    </div>

    <h1 class="title">Even pauze?</h1>

    <p class="desc">
      Je hoeft niet verder te gaan als het niet goed voelt. Neem een moment voor jezelf.
      Je kan altijd later opnieuw starten.
    </p>

    <p class="note">Er wordt niets opgeslagen.</p>

    <button class="primary" @click="goBack">
      Ga verder
    </button>

    <button class="stop" @click="goHome">
      Stoppen?
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import pauseIcon from "../components/icons/icon_pause.svg"

const router = useRouter()

function goBack() {
  router.back()
}

function goHome() {
  router.push("/")
}
</script>

<style scoped>
.phone{
  max-width: var(--maxw);
  margin: 24px auto;
  background: var(--bg);
  padding: 22px;
  min-height: 820px;
}

.iconWrap{
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 34px;
}

.pauseIcon{
  width: 120px;
  height: auto;
}

/* typography spacing only */
.title{
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.desc{
  margin: 0 0 26px;
  max-width: 520px;
}

.note{
  margin: 0 0 22px;
}

/* buttons */
.primary{
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--primary);
  color: var(--snow);
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
.primary:active{
  background: var(--primary-pressed);
}

.stop{
  width: 100%;
  border: 0;
  margin-top: 14px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--glass);
  color: var(--teal);
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
.stop:active{
  background: var(--dirty-window);
}
</style>
