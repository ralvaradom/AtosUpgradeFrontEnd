const template = document.createElement('template');
template.innerHTML = `
    <style>
        .chart {
            max-width: 800px;
            min-height: 450px;
        }
    </style>
    <div class="chart">
    </div>
`;

class Chart extends HTMLElement {
    constructor() {
        super();
        this.showInfo = true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.type = this.getAttribute('type');
        console.log(this.type);
    }

    async connectedCallback() {
        this.response = await fetch(this.getAttribute('src')).then(res =>
            res.json()
          );

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(() => {this.drawChart();});
    }

    drawChart() {
        var chartType = this.type === "pie" ? google.visualization.PieChart : google.visualization.BarChart;

        var data = [[this.response.column_labels[0], this.response.column_labels[1]]];
        this.response.data.map((entry) => {
            data.push([entry.label, entry.value]);
        });

        data = google.visualization.arrayToDataTable(data);
        
        var view = new google.visualization.DataView(data);
        var options = {
            title: this.response.title,
        };

        var chart = new chartType(this.shadowRoot.querySelector('.chart'));
        chart.draw(view, options);
    }
}

window.customElements.define('g-chart', Chart);

