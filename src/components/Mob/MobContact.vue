<template>
  <div class="full">
    <h1>Kontakt</h1>
      <div class="container">
<form>
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
<button click="greet">Greet</button>
        </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'MobContact',
   components: {
    emailjs
    },
    data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    greet: function(e) {
      try {
        emailjs.sendForm('service_46bjg8v', 'template_fonmsc8', e.target,
        'user_mwTWZlwJHiErHuGulK2b1', {
          name: this.name,
          email: this.email,
          message: this.message
        }),
        console.log('poszło');

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped lang="scss">

h1 {
  position:relative;
  text-align: center;
  font-size:60px;
  color: white;
  margin: 0px;
  top: 20px;
  }

div{
  background:white;
 }
 * {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

</style>
