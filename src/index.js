import * as d3 from "d3";
import "./styles.css";
import data from "./data.csv";

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3
  .select("#container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Read the data
console.log(data);

// Add X axis
const x = d3.scaleLinear().domain([0, 4000]).range([0, width]);
svg
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x));

// Add Y axis
const y = d3.scaleLinear().domain([0, 500000]).range([height, 0]);
svg.append("g").call(d3.axisLeft(y));

// Add dots
svg
  .append("g")
  .selectAll("dot")
  .data(data)
  .join("circle")
  .attr("cx", function (d) {
    return x(d.GrLivArea);
  })
  .attr("cy", function (d) {
    return y(d.SalePrice);
  })
  .attr("r", 1.5)
  .style("fill", "#69b3a2");
