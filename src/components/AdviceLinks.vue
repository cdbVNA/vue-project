<template>
  <div class="advice-list">
    <a
      v-for="(video, index) in videos"
      :key="index"
      :href="video.link"
      target="_blank"
      rel="noopener noreferrer"
      class="video-item"
    >
      <img :src="video.thumbnail" :alt="video.title" class="thumbnail" />
      <div class="title">{{ video.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AdviceLinks',
  props: {
    videos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.advice-list {
  display: flex;
  flex-wrap: wrap;  
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  gap: 40px;
  justify-content: center;
}
.video-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
}


.video-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.thumbnail { 
  width: 100%;
  border-radius: 8px;
}
.title {
  margin-top: 8px;
  font-size: 1em;
  text-align: center;
}
</style>