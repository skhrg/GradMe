import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component{
	constructor(props) {
		super(props);
		this.state = {
			chartData:{
				labels: ["Major", "Minor #1", "Minor #2", "Track"],
   				datasets: [{
        			label: 'credits completed',
			        data: [62, 16, 24, 40],
			        backgroundColor: [
			          'rgba(255, 99, 132, 0.2)',
			          'rgba(255, 99, 132, 0.2)',
			          'rgba(255, 99, 132, 0.2)',
			          'rgba(255, 99, 132, 0.2)'
			        ],
			        borderColor: [
			          'rgba(255,99,132,1)',
			          'rgba(255,99,132,1)',
			          'rgba(255,99,132,1)',
			          'rgba(255,99,132,1)'
			        ],
			        borderWidth: 2
			      },
			      {
			        label: 'credits left',
			        data: [40, 23, 4, 28],
			        backgroundColor: [
			          'rgba(255, 159, 64, 0.2)',
			          'rgba(255, 159, 64, 0.2)',
			          'rgba(255, 159, 64, 0.2)',
			          'rgba(255, 159, 64, 0.2)'
			        ],
			        borderColor: [
			          'rgba(255, 159, 64, 1)',
			          'rgba(255, 159, 64, 1)',
			          'rgba(255, 159, 64, 1)',
			          'rgba(255, 159, 64, 1)'
			        ],
			        borderWidth: 2
			      }
			    ]
			},
			chartOptions: {
				scales: {
			      	yAxes: [{
			      	stacked: true,
			        ticks: {
			          beginAtZero: true
			        }
      				}],
      				xAxes: [{
        				stacked: true,
        				ticks: {
         					beginAtZero: true
       					}
      				}]
    			},
    			maintainAspectRatio: false
			}
		}
	}

	render() {
		return (
			<div className = "BarChart">
				<Bar
					data={this.state.chartData}
					width={400}
					height={400}
					options={
						this.state.chartOptions
					}
				/>
			</div>
		)
	}
}

export default BarChart;