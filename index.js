console.log("Running index.js");
const fs = require("fs");
const ervy = require("ervy");

async function fetchPageData() {
  let data = await fetch(
    "https://canadianpolling.ca/page-data/index/page-data.json",
    {
      headers: {
        "sec-ch-ua":
          '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        Referer: "https://canadianpolling.ca/BC-2020",
        "Referrer-Policy": "same-origin",
      },
      body: null,
      method: "GET",
    },
  );
  data = (await data.json())?.result?.data;
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  let jsonData = JSON.parse(data);
  let pollsBC = jsonData?.pollsBC;

  // console.log(pollsBC);
});

const { bar, pie, bullet, donut, gauge, scatter } = ervy;

// Prepare data to render chart
const data = [
  { key: "A", value: 30 },
  { key: "B", value: 10 },
  { key: "C", value: 50 },
];

// Then use any chartType you like, for example:
console.log(bar(data));
