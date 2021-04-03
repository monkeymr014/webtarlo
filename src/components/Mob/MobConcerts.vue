<template>
  <div class="full" >
    <h1>Koncerty</h1>
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
  name: 'MobConcerts'
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
          }) 
        }
      } 
}
</script>
<style scoped lang="scss">

#name{
  position:relative;
  font-size:10px;
  padding:0px;
  left:0;
  margin:0;
}

#data {
  width:50px;
  color:red;
  font-weight: bold;
  padding-left:10px;
  font-size:11px;
}

ul{
  position:relative;
  left:0;
  margin:1px;
  margin-bottom:20px;
  padding:0;
}

 table{
  position:relative;
  left:0;
  top:10px;
  margin:0;
  padding:0;
  border-bottom: 1px solid black;
  border-radius: 0px 0px 12px 12px;
  width:100%;
}

li{
  list-style:none;
}
h1 {
  text-align: center;
  font-size:60px;
  color: black;
  margin: 0px;
  margin-top: 20px;
  }

div {
  background:white;
  padding:0;
  margin:0;
 }

 </style>
