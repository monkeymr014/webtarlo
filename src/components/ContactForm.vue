<template>
  <div class="full">
      <div class="tel">
        <p>Zadzwoń do nas <br/> tel: +48 728 306 334</p>
      </div>
      <div class="container">
      <p>lub napisz e-mail</p>
        <form @submit.prevent="sendEmail">
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Twój Email"
            >
          <label>Wiadomość</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="W czym możemy pomóc?">
          </textarea>
          <input type="submit" value="Wyślij">
        </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
   components: {
    emailjs,
    
    },
    data() {
    return {
      email: '',
      message: ''
    }
  },
 methods: {
    sendEmail(e) {
      if ( this.email == '') {
        alert('Wpisz mail');
      }
     else if ( this.email != '' && this.message == '') {
        alert('Napisz coś do nas');
      }
      else {
         try {
        emailjs.sendForm('service_fxmygtq', 'template_mwhkdro', e.target,
        'user_mwTWZlwJHiErHuGulK2b1', {
          email: this.email,
          message: this.message

        }),
      
        alert('Poszło!');


      } catch(error) {
          console.log({error})
      }}
     

      // Reset form field
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
p {
  font-size:20px;
  margin:2px;
  padding: 20px;;

}
div{
  background:black;
  color: white;
  text-align: center;
 }
 * {box-sizing: border-box;}
.tel {
  margin:0;
  padding:0;
  margin-top:5%;
}
.container {
  margin:auto;
  top:10%;
  display: block;
  text-align: center;
  border-radius: 5px;
  background-color: black;
  padding: 7px;
  width: 30%;
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
  background-color: red;
  color: black;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

input[type=submit]:hover {
  background-color: red;
}

</style>
