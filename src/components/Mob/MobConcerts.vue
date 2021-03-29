<template>
  <div>
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
      axios.get('https://graph.facebook.com/v6.0/me/accounts?fields=events%7Bname%2Cstart_time%2Ccover%7D&access_token=EAAEyl1RiMPcBAJ71AWZBSdA6tXpprmV2z0Obj4VdhJSqzU7JUC4QmwXS10PxOYCree7foON02fhUyYOVBuQZBuJzfETuCpdZBsCN1iryw77syJ7GvZCP09XXIT8Ub7DOvpzqcLQZBZCuH6flF955kvSDUQNDT2dkFIKjmjKhERLY7qg5Ib9lR584f9iLhOxI3UpfC34hbEJ3iYzkwHQoN0nteoXyD2q8aw5zGoZBr15LwZDZD')
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
  padding:0;
}

 table{
  position:relative;
  left:0;
  top:20px;
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
  margin: 0;
  position: relative;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

div {
  background:white;
  padding:0;
 }

 </style>
