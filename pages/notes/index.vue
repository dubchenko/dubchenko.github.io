<template>
  <div class="max-width-3">
    <ul class="list-reset">
      <li
        v-for="note of notes"
        :key="note.slug"
      >
        <nuxt-link :to="`/notes/${note.slug}`">
          <h2 class="h2 caps">
            {{ note.title }}
          </h2>
        </nuxt-link>
        <small class="bold">{{ note.createdAt | formatDate }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotesList',
  async asyncData ({ $content, params }) {
    const notes = await $content('notes')
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { notes }
  }
}
</script>
