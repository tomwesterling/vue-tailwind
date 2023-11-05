<template>
<div class="my-8 py-8 px-8 max-w-md mx-auto bg-gray-200 rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 sm:mx-0 sm:shrink-0" :src="notice.image" />
  <!-- Verwende die :src-Bindung, um das Bild dynamisch aus der 'image'-Prop zu laden -->
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-white font-semibold">
       {{ notice.title }}
      </p>
      <p>
        {{ notice.description }}
      </p>
    </div>
    <div class="space-x-2 pt-4">
      <ButtonPrimary>{{ notice.buttonTextLeft }}</ButtonPrimary>
      <ButtonPrimaryOutlined>{{ notice.buttonTextRight }}</ButtonPrimaryOutlined>
    </div>
  </div>
</div>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonPrimaryOutlined from '@/components/buttons/ButtonPrimaryOutlined.vue'


export default {
  props: {
    notice: Object,
  },
  components: {
    ButtonPrimary,
    ButtonPrimaryOutlined,
  },
}
</script>
