<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <SpinnerLoading/>
    </div>
  </div>
</template>

<script>
import SpinnerLoading from "@/components/SpinnerLoading";
import PostList from "@/components/PostList";
import getPosts from "@/composables/getPosts";
import {useRoute} from "vue-router";
import {computed} from "vue";
import TagCloud from "@/components/TagCloud";

export default {
  name: "TagView",
  components: {TagCloud, SpinnerLoading, PostList},
  setup() {
    const route = useRoute()
    const {posts, error, load} = getPosts()

    load()

    const postsWithTag = computed(() => {
      return posts.value.filter(post => post.tags.includes(route.params.tag));
    })

    return {posts, error, postsWithTag}
  }
}
</script>

<style scoped>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
