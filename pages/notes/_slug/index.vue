<template>
  <article class="max-width-3">
    <h2 class="h2 caps">
      {{ note.title }}
    </h2>
    <nuxt-content
      class="mb2"
      :document="note"
    />
    <small class="bold">{{ note.createdAt | formatDate }}</small>
  </article>
</template>

<script>
export default {
  name: 'NoteView',
  async asyncData ({ $content, params }) {
    const note = await $content('notes', params.slug)
      .fetch()

    return { note }
  }
}
</script>
