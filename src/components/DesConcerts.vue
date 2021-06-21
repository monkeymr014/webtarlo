<template>
  <div class="full" >
    <p>{{List}}</p>
    <ul>
      <li v-for=" item in results " v-bind:key="item.id">
        <table>
          <tr> 
            <td id="data">{{ item.start_time.substring(0,10) }} </td>
            <td id="name">{{ item.name }}</td> </a><br/>
          </tr>
        </table>
      </li>
</ul>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DesConcerts'
,
  data() {
    return { 
      link: 'https://www.facebook.com/events/',
      results : []
      
    }
  },
  computed: {                                                      
    List: function() {                                    
      axios.get('https://graph.facebook.com/v6.0/me/accounts?fields=events%7Bname%2Cstart_time%2Ccover%7D&access_token=EAAEyl1RiMPcBABbz6QCatW6s02pqL1hrGtljKnV8uvMffm8HdZBpZABPSwbgX9grMjQhLPHeBZC7BXzPNbIQGOYcNH0j3XNYbCggThtqjW5U0zRkh2tDqm40h8FCkUml6hsnToQjToNHi1BLj3ChRTvGfAS8T7tBXeSM6elCgZDZD')
        .then((re) => {
          this.results = re.data.data[0].events.data;
          console.log('a');
          }) 
        }
      } 
}
</script>
<style scoped lang="scss">

#name{
  text-align: left;
    width: 12%;
}

#data {
color: red;
    margin-left: 40%;
    font-weight: 700;
    text-align: right;
    width: 10%;
}



 table{
 position: relative;
    left: 0;
    top: 10px;
    padding: 0;
    border-bottom: 1px solid #fff;
    border-radius: 0 0 12px 12px;
    width: 100%;
   
}

li{
display: list-item;
;
    list-style: none;}
h1 {
  text-align: center;
  font-size:60px;
  color: black;
  margin: 0px;
  margin-top: 20px;
  }

div {
background: #000;
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 1.3em;
    text-align:center;
 }

 </style>
