import { GoogleCharts } from 'google-charts';

import "./chart.component.css";

const template = document.createElement('template');
template.innerHTML = `
    <div class="chart">
    </div>
`;

export class Chart extends HTMLElement {
    constructor() {
        super();
        this.showInfo = true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.type = this.getAttribute('type');
        console.log(this.type);
    }

    async connectedCallback() {
        this.response = await fetch(this.getAttribute('src')).then(res => res.json());

        GoogleCharts.load(() => {this.drawChart()});
    }

    drawChart() {
        if(this.type === "pie") {
            var chartType = GoogleCharts.api.visualization.PieChart;
        }
        else {
            var chartType = GoogleCharts.api.visualization.BarChart;
        }

        var data = [[this.response.column_labels[0], this.response.column_labels[1]]];
        this.response.data.map((entry) => {
            data.push([entry.label, entry.value]);
        });

        data = GoogleCharts.api.visualization.arrayToDataTable(data);
        
        var view = new GoogleCharts.api.visualization.DataView(data);
        var options = {
            title: this.response.title,
        };

        var chart = new chartType(this.shadowRoot.querySelector('.chart'));
        chart.draw(view, options);
    }
}

