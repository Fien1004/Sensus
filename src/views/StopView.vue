<template>
  <div class="phone">
    <h1 class="title">Stoppen?</h1>
    <p class="desc">Je kan later altijd verder doen.</p>
    <button class="primary" @click="goHome">Terug naar start</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()

function goHome() {
  router.push("/")
}
</script>

<style scoped>
.phone{
  max-width: var(--maxw);
  margin: 24px auto;
  background: var(--bg);
  border-radius: 28px;
  padding: 22px;
  min-height: 820px;
}
.title{ font-size: 44px; margin: 10px 0 10px; }
.desc{ font-size: 18px; color: var(--muted); margin: 0 0 18px; line-height: 1.4; }

.primary{
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--primary);
  color: white;
  font-size: 18px;
  font-weight: 650;
  cursor: pointer;
}
.primary:active{ background: var(--primary-pressed); }
</style>
