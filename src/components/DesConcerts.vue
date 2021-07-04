<template>
  <div class="full" >
    <p>{{List}}</p>
    <ul>
      <li v-for=" item in results " v-bind:key="item.id">
        <table>
          <tr> 
            <td id="data">{{ item.start_time.substring(0,10) }} </td>
            <td id="name">{{ item.name }}</td> <br/>
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
      axios.get('https://graph.facebook.com/v6.0/me/accounts?fields=events%7Bname%2Cstart_time%2Ccover%7D&access_token=EAAEyl1RiMPcBAHmj04JEl28kCjA4Rr0liUV66S16YFDZCZBQ6Wm0VEDx9difL7dZB1EpzpCjHw1pFqApMryqABF9XxvhpNCu2jlQgSauASWmLe57dfPF2V9gc8EJ5jjKKyt4E0NRVwbOSJKEL4IFysVcKghsprROVOB1GosJ7RljVZAPT6np')
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
    width: 100%;
}

#data {
color: red;
    margin: 0;
    font-weight: 700;
    width: 40%;
    text-align: right;
}


 table{
 position: relative;
    left: 0;
    top: 30px;
    padding: 0;
    border-bottom: 1px solid #fff;
    border-radius: 0 0 12px 12px;
    width: 100%;
     text-align: center;
   
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
