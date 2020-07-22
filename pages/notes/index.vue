<template>
  <div class="max-width-3">
    <ul class="list-reset">
      <li
        v-for="note of notes"
        :key="note.slug"
      >
        <h2 class="h2 caps">
          {{ note.title }}
        </h2>
        <small class="bold">{{ note.createdAt | formatDate }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotesView',
  async asyncData ({ $content, params }) {
    const notes = await $content('notes')
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      notes
    }
  }
}
</script>
