<script setup lang="ts">

import { pb } from '@/backend'
import { oneIDEvent } from '@/backend'

const props = defineProps<{ id :string }>();
console.log(props.id);

const unEvent = await oneIDEvent(props.id)
console.log(unEvent);

const urlImgEvent = unEvent.image ? pb.getFileUrl(unEvent, unEvent.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImgEvent)

</script>