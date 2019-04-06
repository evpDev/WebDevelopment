$(document).ready(function() {

    canvaWidth = 400;
    canvaHeight = 400;
    var canvas = document.createElement('canvas');
    canvas.id = "example";
    canvas.width = canvaWidth;
    canvas.height = canvaHeight;
    // canvas.style.zIndex = 8;
    // canvas.style.position = "absolute";
    // canvas.style.border = "1px solid";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    // var example = document.getElementById("example"), 
    var ctx = canvas.getContext('2d');
    // example.width  = canvaWidth;
    // example.height = canvaHeight;
    pointX = Math.round(Math.random()*canvaWidth/3 + canvaWidth/3);
    pointY = Math.round(Math.random()*canvaHeight/3 + canvaHeight/3);
    var fontSize = 20, padding = 10;
    var eclipseColor = 'rgba(0, 0, 0, .6)', loadedCounter = 0;
    var pictures = new Array(4);
    for (var i = 0; i < 4; i++) {
        pictures[i] = new Image();
        pictures[i].src = 'https://source.unsplash.com/collection/112716'+ (3 + i) +'/'+ canvaWidth +'x'+ canvaHeight;
        // console.log('https://source.unsplash.com/collection/112716'+ (3 + i) +'/'+ canvaWidth +'x'+ canvaHeight);
    }

    function getQuoteStrings(quote, ctx) {
        var quoteStrings = [];
        var arrQuote = quote.split(" ");
        var lenCounter = 0, globI = 0, strCounter = 0;
        ctx.font = "bold "+ fontSize +"px Arial, sans-serif";
        ctx.fillStyle = "white";
        ctx.textBaseline = "center";
        // ctx.measureText(testLine).width
        for (var i = 0; i < arrQuote.length; i++) {
            // console.log(ctx.measureText(arrQuote.slice(globI, i+1).join(" ")).width);// < canvaWidth) {
            if (ctx.measureText(arrQuote.slice(globI, i+1).join(" ")).width >= canvaWidth-2*padding) {
                // console.log(arrQuote.slice(globI, i).join(" "), "|", 10, 100 + fontSize*strCounter);
                quoteStrings.push(arrQuote.slice(globI, i).join(" "));
                //ctx.fillText(arrQuote.slice(globI, i).join(" "), 10, 100 + fontSize*strCounter);
                globI = i;
                strCounter++;
            }
        }
        // console.log(arrQuote.slice(globI, arrQuote.length).join(" "), "|", 10, 100 + fontSize*strCounter);
        quoteStrings.push(arrQuote.slice(globI, arrQuote.length).join(" "));
        //ctx.fillText(arrQuote.slice(globI, arrQuote.length).join(" "), 10, 100 + fontSize*strCounter);
        return quoteStrings
    }

    function printQuote(quote, ctx) {
        var quoteStrings = getQuoteStrings(quote, ctx);
        for (var i = 0; i < quoteStrings.length; i++) {
            ctx.fillText(quoteStrings[i],
                        (canvaWidth-2*padding-ctx.measureText(quoteStrings[i]).width)/2 + 10,
                        (canvaHeight-2*padding - fontSize*quoteStrings.length)/2 + fontSize*(i+1));
        }
    }

    pictures[0].onload = pictures[1].onload = pictures[2].onload = pictures[3].onload = function() {
        loadedCounter++;
        if (loadedCounter == 4) {
            ctx.drawImage(pictures[0], pointX - canvaWidth, pointY - canvaHeight);
            ctx.drawImage(pictures[1], pointX, pointY - canvaHeight);
            ctx.drawImage(pictures[2], pointX - canvaWidth, pointY);
            ctx.drawImage(pictures[3], pointX, pointY);
            ctx.fillStyle = eclipseColor;
            ctx.fillRect(0, 0, canvaWidth, canvaHeight);
            ctx.textBaseline = "center";
            // ctx.textAlign = "center";
            var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru';
            $.post(url, function(data) {
                console.log(data.quoteText);
                printQuote(data.quoteText, ctx)
                var dataURL = canvas.toDataURL("image/jpeg");
                var link = document.createElement("a");
                link.href = dataURL;
                link.download = "quote.jpg";
                link.innerHTML = "Скачать цитату";
                body.appendChild(link);
                // link.click();
            });
        }
    }
});