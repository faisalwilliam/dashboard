const ctx = document.getElementById("chart");


const response = fetch("tmp.csv")
  .then((response) => response.text()) 
  .then((response) => papaParseJson(response))
  .then((data) => {

    console.log(data);
    //console.log("labels: " + labels);
  });

function createChart(data){
      new chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Temp",
            data: data,
            backgroundColor: "#00fff0",
            borderColor: "#00fff0",
            borderWidth: 3,
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
}

function papaParseJson(tmpCsvData){

    Papa.parse(tmpCsvData, {
    header: true,
    complete: function(results) {
        console.log(results.data); 
    },
    });
}




/*
function csvToJson(csvString) {
    const rows = csvString
        .split("\n");

    const headers = rows[0]
        .split(",");

    const jsonData = [];
    for (let i = 1; i < rows.length; i++) {

        const values = rows[i]
            .split(",");

        const obj = {};

        for (let j = 0; j < headers.length; j++) {

            const key = headers[j]
                .trim();
            const value = values[j]
                .trim();

            obj[key] = value;
        }

        jsonData.push(obj);
    }
    return JSON.stringify(jsonData);
}

*/



/*
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            document.getElementById('output').innerText = content;
        };
        reader.readAsText(file);
    }
});
*/
