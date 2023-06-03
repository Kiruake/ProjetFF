<script setup lang="ts">

import { pb } from '@/backend'
import { oneIDDefis } from '@/backend'

const props = defineProps<{ id: string }>();
console.log(props.id);

const unDefis = await oneIDDefis(props.id)
console.log(unDefis);

const urlImgDefis = unDefis.image ? pb.getFileUrl(unDefis, unDefis.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImgDefis)

</script>