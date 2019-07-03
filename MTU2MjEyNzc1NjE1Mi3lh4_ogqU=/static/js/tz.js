history["replaceState"](null, window["document"]["title"], location["pathname"] + "#!/stealingyourhistory");
history["pushState"](null, window["document"]["title"], location["pathname"]);
window["addEventListener"]("popstate", function() {
    if (location["hash"] === "#!/stealingyourhistory") {
        history["replaceState"](null, window["document"]["title"], location["pathname"]);
        setTimeout(function() {
            $("#myModal")["css"]("display", "block");
            $("#myModal")["addClass"]("in");
        }, 0);
    }
}, false);