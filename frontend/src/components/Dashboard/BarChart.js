import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class BarChart extends Component{
	constructor(props) {
		super(props);
		this.state = {
			
			chartData:{
				labels: ["Physics", "Bioethics (Minor)", "Economics (Minor)", "Pre-Medical Track"],
   				datasets: [{
        			label: 'Credits completed',
			        data: [62, 16, 24, 40],
			        backgroundColor: [
			          '#1e88e5',
			          '#d81b60',
			          '#f4511e',
			          '#fdd835'
			        ],
			        borderColor: [
			          'black',
			          'black',
			          'black',
			          'black'
			        ],
			        borderWidth: 1
			      },
			      {
			        label: 'Credits left',
			        data: [40, 23, 4, 28],
			        backgroundColor: [
			          '#90caf9',
			          '#f48fb1',
			          '#ffab91',
			          '#fff59d'
			        ],
			        borderColor: [
			          'black',
			          'black',
			          'black',
			          'black'
			        ],
			        borderWidth: 1
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
      					scaleLabel: {
				      		display: true,
				      		labelString: "Credits"
				      	},
        				stacked: true,
        				ticks: {
         					beginAtZero: true
       					},
				        gridLines: {
				        	display: false
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
				<HorizontalBar
					data={this.state.chartData}
					width={200}
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