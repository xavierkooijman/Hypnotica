<template>
    <div class="contact-page">
      <h1 class="outline-title">CONTACT US</h1>
      <div class="contact-content">
        <div class="contact-intro">
          <span class="contact-title">How can we help?</span>
          <span class="contact-subtitle">Send us a message here.</span>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <div class="input-wrapper">
              <label for="name" class="visually-hidden">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                class="form-input pbottom-12"
                placeholder="Name"
                required
              />
            </div>
            <div class="input-wrapper">
              <label for="email" class="visually-hidden">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                class="form-input pbottom-12"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div class="message-wrapper">
            <label for="message" class="visually-hidden">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message"
              class="form-input padding96"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn-primary submit-button" tabindex="0">
            Send message
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted:', this.formData)
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-page {
    background: var(--Main-Black, #010306);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: Aspekta, sans-serif;
  }
  
  .contact-heading {
    text-align: center;
    -webkit-text-stroke: 3px var(--Gray-200, #a2aab1);
    font-size: 172px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    align-self: center;
    margin: 64px 0 0;
    border: 3px solid rgba(162, 170, 177, 1);
  }
  
  .contact-content {
    display: flex;
    margin-top: 64px;
    width: 100%;
    align-items: flex-start;
    gap: 40px 100px;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 48px;
  }
  
  .contact-intro {
    color: var(--Gray-100, #bec7ce);
    font-size: 36px;
    font-weight: 500;
    line-height: 55px;
  }
  
  .contact-title {
    display: block;
    font-size: 36px;
    font-family: Aspekta400;
    color: white;
  }
  
  .contact-subtitle {
    display: block;
    font-size: 36px;
    font-family: Aspekta400;
    color: rgba(190, 199, 206, 1);
  }
  
  .contact-form {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: center;
    width: 648px;
    margin-bottom: 129px;
  }
  
  .form-group {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 48px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  
  .input-wrapper {
    flex: 1;
    min-width: 240px;
  }
  
  .message-wrapper {
    width: 100%;
    margin-top: 32px;
  }
  
  .padding96 {
    padding-bottom: 96px;
  }
  
  .submit-button {
    align-self: flex-end;
    margin-top: 64px;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  @media (max-width: 991px) {
    .contact-heading {
      max-width: 100%;
      margin-top: 40px;
      font-size: 40px;
    }
  
    .contact-content {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  
    .contact-form {
      max-width: 100%;
    }
  
    .submit-button {
      margin-top: 40px;
      padding: 12px 20px;
    }
  }
  </style>