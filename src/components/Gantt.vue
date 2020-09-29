<template>
    <div class="main">
        <h1>Gantt chart!</h1>
        <div class="row">
          <div class="col-8">
            <highcharts :constructor-type="'ganttChart'" :options="chartOptions" />
          </div>
          <div v-if="selectedItem != ''"
            class="col-4">
            <div class="card">
              <div class="card-header">
                {{selectedItem}}
              </div>
              <div class="card-body">
                Наполнение карточки!
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {

data() {
    return {
      selectedItem: '',
      chartOptions: {
        title: {
          text: 'Gantt Chart with Progress Indicators'
        },
        xAxis: {
          min: Date.UTC(2020, 9, 15),
          max: Date.UTC(2020, 11, 15)
        },
        series: [{
          name: 'Project 1',
          data: [{
            name: 'Start prototype',
            id: 'start_prototype',
            start: Date.UTC(2020, 9, 20),
            end: Date.UTC(2020, 10, 20),
            completed: 0.25,
          }, {
            name: 'Test prototype',
            id: 'test_prototype',
            parent: 'start_prototype',
            start: Date.UTC(2020, 9, 20),
            end: Date.UTC(2020, 9, 30),
            completed: 1,
          }, {
            name: 'Test prototype',
            start: Date.UTC(2020, 10, 27),
            end: Date.UTC(2020, 10, 29)
          }, {
            name: 'Develop',
            start: Date.UTC(2020, 10, 20),
            end: Date.UTC(2020, 10, 25),
            completed: {
              amount: 0.12,
              fill: '#fa0'
            }
          }, {
            name: 'Run acceptance tests',
            start: Date.UTC(2020, 10, 23),
            end: Date.UTC(2020, 10, 26)
          }]
        }],
        plotOptions: {
          series: {
            allowPointSelect: true,
            point: {
              events: {
                click: ({point}) => {
                  this.selectedItem = point.name;
                }
              }
            }
          }
        }
      }
    }
  },

}

</script>

<style>

</style>