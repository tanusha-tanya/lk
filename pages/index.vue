<template>
  <div id="knowledge-base" class="white-page">
    <div class="container">
      <div class="knowledge-base">
        <h1>{{title}}</h1>
        <div class="information" v-html="body">
        </div>
      </div>
    </div>
    <div class="changes">
      <div class="container">
        <div class="knowledge-base">
          <h2>Изменения</h2>
          <div class="changes-item">
            <div class="changes-date">
              24.08.2019
            </div>
            <div class="changes-info">
              Изменены ограничения на вес файла — не более 20 Мб
            </div>
          </div>
          <div class="changes-item">
            <div class="changes-date">
              01.08.2019
            </div>
            <div class="changes-info">
              Изменён проток обмена
            </div>
          </div>
          <div class="changes-item">
            <div class="changes-date">
              15.07.2019
            </div>
            <div class="changes-info">
              Добавлена возможность корректировки файла
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    middleware: ['auth'],
    data () {
        return {
          title: '',
          body: ''
        }
    },
    mounted() {
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQzM2Q2N2JiNWNkYjNhZjJlZjY2YmJhNzkxMGE3ZDQ3ZmNhZmQ2YjI5YjYyNDZhZTQzOTYwM2U2ZWNmNWE5ZTE1YThmNDcyOTJiNTYwMWM4In0.eyJhdWQiOiIxIiwianRpIjoiZDMzZDY3YmI1Y2RiM2FmMmVmNjZiYmE3OTEwYTdkNDdmY2FmZDZiMjliNjI0NmFlNDM5NjAzZTZlY2Y1YTllMTVhOGY0NzI5MmI1NjAxYzgiLCJpYXQiOjE1NzM1NTUzMzUsIm5iZiI6MTU3MzU1NTMzNSwiZXhwIjoxNjA1MTc3NzM1LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.N2d1yqOjzhFdYBLMOGiCvmM2gRcqlHvyzWeWcABtyJd8MkUGza-SvkEXsP1vYLLtDezTeYCS5bilS8e1dyQvoXzytsWdGv6rygOg4nN1FXYq4kg2ynS7Jf3qWm7amdAyukvajkhf-jM8n5ffQY4X80-05QmPwQNlu1hxtXW33-fL5QNAuNVOedy9WXprj-wVjV5VYBZJRU06NfdyjAyaJ-_73ZA_Gf9wQqs7t0_NBIEq0n6nx6a9zqHTvUXnyPzwYckBgmyGeXaAyl2YrerFqoaHiB0_JGL__ckxh7eOImcU8WBViTUCtMOeHnzDUqkrGVuIRpRzpanWY0W18TH7yJjo4x1r0WuwD2ixkT0RYBAM6qgFxIV-g6oIc0D4xWu6SuKdjl1A3DFfbdzM-Y0dnGOWqvVmUi2u-OcLKdEKvNdLALvOKIn2sSPoOiJUvr49M2VvJ_FbRxjWHhrYrsCf4WJl4nAsrWLdkiV6R7EIIcMaIJuOfe-9CKuq7Btg3NShVDexODDscejSR0hJjUNW6NHPzujaxvKkUhz4OMwlM_PSvg7uCpHfMI9mcThO4h1IuLdZdWdWND0eTsGYWdVJQi1bbnI7sIXC41Idjf0FtDrXB-uIjiDySqaAv4iLMd9IBN-pe-rzNMHML6YH_bx0Q40sqit4JixNsqQeTaRU25s'
        // let headers = {'Accept': 'application/json', 'Content-Type': 'application/json',"Authorization" : `Bearer ${this.token}`}
        this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        this.$axios.post(process.env.baseUrl + '/content', {params: {expand:'body.export_view'}})
            .then(response => {
                const responseData = response.data
                this.title = responseData.title
                this.body = responseData.body.export_view.value
            })
            .catch(function (e) {
                console.log('Не удалось загрузить данные')
            })
    }
  }
</script>
<style lang="scss">
@import '@/styles/variables.scss';
.knowledge-base{
  @media(min-width:$tablet){
   width: calc(75% - 32px);
   margin: 0 auto;
 }
 @media(min-width:$desktop){
   width: calc(83% - 32px);
   margin: 0 auto;
 }
}
.updated{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 10px 0;
  @media(min-width:$tablet){
    justify-content: flex-start;
  }
  &-date{
    color: #616161;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.004em;
    font-family: 'RobotoRegular', sans-serif;
    @media(min-width:$tablet){
      font-size: 14px;
      line-height: 20px;
      margin-right: 15px;
    }
  }
  &-show{
    color: #5461DC;
    letter-spacing: 0.004em;
    font-size: 12px;
    line-height: 16px;
  }
}
.navigation{
  margin: 20px 0;
  @media(min-width:$tablet){
    margin: 39px 0;
  }
  &-title{
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #757575;
  }
  &-list{
    margin: 15px 0;
  }
  &-item{
    margin: 18px 0;
    padding-left: 24px;
    position: relative;
    &:before{
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      background: #616161;
      border-radius: 50%;
      position: absolute;
      left: 9px;
      top: 9px;
    }
  }
  &-link{
    color: #5461DC;
    font-size: 12px;
    letter-spacing: 0.004em;
    @media(min-width:$tablet){
      font-size: 14px;
    }
  }
}
.information{
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.004em;
  color: #1E1F23;
  margin: 24px 0;
  @media(min-width:$tablet){
    font-size: 14px;
    line-height: 20px;
    margin-top: 56px;
  }
}
p{
  margin: 16px 0;
}
.changes{
  border-top: 1px solid #F5F5F5;
  margin: 24px 0;
  @media(min-width:$tablet){
    margin: 35px 0;
  }
  &-item{
    margin: 21px -8px;
    display: flex;
  }
  &-date{
    width: calc(25% - 16px);
    margin: 0 8px;
    font-size: 12px;
    letter-spacing: 0.004em;
    color: #616161;
    @media(min-width:$tablet){
      font-size: 14px;
      letter-spacing: normal;
    }
    @media(min-width:$desktop){
      width: calc(10% - 16px);
    }
  }
  &-info{
    width: calc(75% - 16px);
    margin: 0 8px;
    font-size: 12px;
    letter-spacing: 0.004em;
    color: #1E1F23;
    @media(min-width:$tablet){
      font-size: 14px;
      letter-spacing: normal;
    }
    @media(min-width:$desktop){
      width: calc(90% - 16px);
    }
  }
}

</style>
