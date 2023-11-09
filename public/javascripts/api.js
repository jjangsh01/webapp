var convert = require("xml-js");
$.ajax({
    method: "GET",
    url: "https://cors-anywhere-49h7.onrender.com/" + "http://api.nongsaro.go.kr/service/garden/priceTypeList",
    data: { apiKey: "20231019HMMRGHWSXDKG1CZNDWN4WG" },
}).done(function (msg) {
    var js = convert.xml2json(xml, { compact: true, space: 4 });

    console.log(js);
});
