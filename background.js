//console.log("auto refresh loaded");

let lastModified = null,
    lastData     = null,
    url          = document.location.href
    metasUpd     = document.querySelectorAll("meta[data-autoupdate], meta[data-autorefresh]");

if(metasUpd.length>0)
{
    setInterval(function()
    {
            for(i=0; i<metasUpd.length; i++)
            {
                url = metasUpd[i].getAttribute("data-autoupdate")  !== null ? metasUpd[i].getAttribute("data-autoupdate")  : url; 
                url = metasUpd[i].getAttribute("data-autorefresh")  !== null ? metasUpd[i].getAttribute("data-autorefresh")  : url; 
            }
            
            url += url.match(/\?/) ? "&" : "?";
            url += "_t="+Date.now();
            
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function()
            {
                if(this.readyState == 4)
                {
                    let newModified = xhr.getResponseHeader("Last-Modified")

                    // Reload page if data content is different
                    if(lastData==null) lastData=xhr.responseText;
                    else if(lastData!=xhr.responseText) document.location.href=document.location;
            
                    // Reload page if file modification date is different
                    if(lastModified===null) lastModified=newModified;
                    else if(lastModified!=newModified) document.location.href=document.location;
                }
            }
            xhr.send();
    }, 500); 
}
