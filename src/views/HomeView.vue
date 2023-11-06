<template>
  <!-- Component: Notice Card with Image -->
  <RegistrationForm/>
  <EventCard :event="event" />
  <EventCard :event="event" />
  <NoticeCard :notice="notice" />
  <Dropdown/>
  
</template>

<script>
// @ is an alias to /src
import sunsetLogoSmall from "@/assets/images/sunset-logo-sm.png"
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue"
import ButtonPrimaryOutlined from "@/components/buttons/ButtonPrimaryOutlined.vue"
import NoticeCard from '@/components/cards/NoticeCard.vue'
import EventCard from '@/components/cards/EventCard.vue'
import eventImage1 from "@/assets/images/event-1.webp"
import eventImage2 from "@/assets/images/event-1.webp"
import eventImage3 from "@/assets/images/event-1.webp"
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
import Dropdown from '@/components/dropdowns/Dropdown.vue'



export default {
  components: {
    ButtonPrimary,
    ButtonPrimaryOutlined,
    NoticeCard,
    EventCard,
    RegistrationForm,
    Dropdown,
  },
  data: function () {
    return {
      notice: {
        image: sunsetLogoSmall,
        title: 'Event wirklich löschen?',
        description: 'Diese Aktion kann nicht rückgängig gemacht werden.',
        buttonTextLeft: 'Löschen',
        buttonTextRight: 'Abbrechen',
      },
      event: {
        image: sunsetLogoSmall,
        title: 'SunSet x Fhainest',
        subtitle: 'Showcase',
        description: 'Culpa reprehenderit ea irure et exercitation non amet officia magna elit nostrud. Ullamco ipsum elit pariatur dolore officia sint sint ea velit sint duis in aliquip cillum. Anim laboris veniam exercitation duis cillum et nisi cupidatat eu enim tempor id amet. Nisi ea fugiat est commodo quis mollit exercitation occaecat consequat.',
        location: 'MS Stubnitz',
        date: '10. November 2023',
        time: '23:59 - 8:00 Uhr',
        image1: eventImage1,
        image2: eventImage2,
        image3: eventImage3,
      }
    }
  },
}
</script>

<style scoped>
</style>
