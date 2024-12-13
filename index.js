async function getData() {
    const response = await fetch("original.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    return rows;
}

async function getGraph(rows){
    let years = [];
    let temps = [];
    rows.forEach((elem) => {
        const row = elem.split(",");
        console.log(row);
        const year = row[0];
        const temp = String(Number(row[1])+14);
        years.push(year);
        temps.push(temp);
    });
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'line',
        data: {
          labels: years,
          datasets: [{
            label: 'Temperatures',
            data: temps,
            borderWidth: 0.5,
          }]
        },
        options: {
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Year',
                    color: '#911',
                    font: {
                      family: 'Arial',
                      size: 20,
                      weight: 'bold',
                      lineHeight: 1.2,
                    },
                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                  }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Temperatures',
                        color: '#191',
                        font: {
                            family: 'Arial',
                            size: 20,
                            style: 'normal',
                            lineHeight: 1.2
                        },
                        padding: {top: 30, left: 0, right: 0, bottom: 0}
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    font: {
                        family: 'Arial',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2,
                    }
                },
                customCanvasBackgroundColor: {
                    color: 'lightGreen',
                }
            },
            plugins: [plugin]
        }
      });
}

getData()
    .then(rows => {getGraph(rows)})
