
var row = [
    { name: "vishal yadav", empid: "6851", phone: "1234567891", emp_type: "permanent" },
    { name: "himanshu yadav", empid: "6852", phone: "1234567892", emp_type: "temporary" },
    { name: "monty yadav", empid: "6853", phone: "1234567893", emp_type: "contract" },
    { name: "lakshya yadav", empid: "6854", phone: "1234567894", emp_type: "permanent" },
    { name: "golu yadav", empid: "6855", phone: "1234567895", emp_type: "temporary" },
    { name: "teena yadav", empid: "6856", phone: "1234567896", emp_type: "contract" },
    { name: "raavi yadav", empid: "6857", phone: "1234567897", emp_type: "permanent" },
    { name: "deepa yadav", empid: "6858", phone: "1234567898", emp_type: "temporary" },
    { name: "nisha yadav", empid: "6859", phone: "1234567899", emp_type: "contract" },
    { name: "Meghu yadav", empid: "6859", phone: "1234567899", emp_type: "contract" },
];


function createTable(data) {
    var table = "";
    for (var i = 0; i < data.length; i++) {
        table += "<tr>";
        table += "<td>" + data[i].name + "</td>";
        table += "<td>" + data[i].empid + "</td>";
        table += "<td>" + data[i].phone + "</td>";
        table += "<td>" + data[i].emp_type + "</td>";

        table += "</tr>";

    }
    document.write('<table border= 1 style="padding-top:30px">' + table + '</table>');
};


createTable(row);

function myFilter(data) {
    var filteredArray = [];
    for (var i=0; i < data.length; i++) {
        if(data[i].emp_type == "permanent") {
            filteredArray.push(data[i]);
        }
    }
    return filteredArray;
};

var permanentEmployee = myFilter(row);

createTable(permanentEmployee);


var temporaryEmployee = row.filter(function (data) {
    return data.emp_type == "temporary";
});

createTable(temporaryEmployee);


var contractEmployee = row.filter(function (data) {
    return data.emp_type == "contract";
});

createTable(contractEmployee);
