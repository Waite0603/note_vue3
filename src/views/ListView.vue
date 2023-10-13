<script setup lang="ts">
import { getNotes } from '@/api/note';
import type { NoteList } from '@/types'

import { ref } from 'vue';

const noteValue: any = ref([] as NoteList);

getNotes(1, 10).then((res) => {
  console.log(res);
  noteValue.value = res;
});

</script>

<template>
  list
</template>
