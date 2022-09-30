<template>
  <!-- col -->
        <div class="col-lg-12">
        <!-- section title -->
        <div class="art-section-title">
            <!-- title frame -->
            <div class="art-title-frame">
            <!-- title -->
            <h4>Get in touch</h4>
            </div>
            <!-- title frame end -->
        </div>
        <!-- section title end -->

        <!-- contact form frame -->
        <div class="art-a art-card">

            <!-- contact form -->
            <form id="form" class="art-contact-form" @submit.prevent="sendEmail">
              <!-- form field -->
              <div class="art-form-field">
                  <!-- name input -->
                  <input id="name" name="name" v-model="name" class="art-input" type="text" placeholder="Name" required>
                  <!-- label -->
                  <label for="name"><i class="fas fa-user"></i></label>
              </div>
              <!-- form field end -->
              <!-- form field -->
              <div class="art-form-field">
                  <!-- email input -->
                  <input id="email" name="email" v-model="email" class="art-input" type="email" placeholder="Email" required>
                  <!-- label -->
                  <label for="email"><i class="fas fa-at"></i></label>
              </div>
              <!-- form field end -->
              <!-- form field -->
              <div class="art-form-field">
                  <!-- message textarea -->
                  <textarea id="message" name="message" v-model="message" class="art-input" placeholder="Message" required></textarea>
                  <!-- label -->
                  <label for="message"><i class="far fa-envelope"></i></label>
              </div>
              <!-- form field end -->
              <!-- button -->
              <div class="art-submit-frame">
                  <button class="art-btn art-btn-md art-submit" type="submit"><span>Send message</span></button>
                  <!-- success -->
                  <div class="art-success">Success <i class="fas fa-check"></i></div>
              </div>
            </form>
            <!-- contact form end -->

        </div>
        <!-- contact form frame end -->

        </div>
</template>

<script>
import emailjs from 'emailjs-com'
import VueNotifications from 'vue-notifications'

export default {
  name: 'GetInTouch',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail (e) {
      try {
        emailjs.sendForm(
          'service_h3rs8go',
          'template_0n2u9ss',
          e.target,
          'G7d9LRuckwWgpyu2F', {
            name: this.name,
            email: this.email,
            message: this.message
          })
        this.showSuccessMsg()
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
      } catch (error) {
        console.log({ error })
        this.showSuccessMsg()
      }
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success, // or just 'success' or any other string
      title: 'Sent',
      message: 'Thank you for your interest in me.'
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: 'Hey you',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: 'Wow, man',
      message: 'That\'s the kind of warning'
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: 'Wow-wow',
      message: 'sorry, not done. Please contact me again'
    }
  }
}
</script>
