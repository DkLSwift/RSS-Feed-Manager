import { News } from '../models/news'

export const getParsedResponse = async (source, baseUrl) => {


    return new Promise(function(resolve, reject) {
        // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        const codetab = "https://api.codetabs.com/v1/proxy/?quest="

        const builtUrl = `${codetab}${baseUrl}`

        var xhttp = new XMLHttpRequest();
        
        xhttp.open("GET", builtUrl, true);
        xhttp.send();

        xhttp.onreadystatechange = async function() {
            if (this.readyState === 4 && this.status === 200) {
                // console.log('xhttp.responseXML: ',xhttp.responseXML);
               
                if (xhttp.responseXML !== null && xhttp.responseXML !== undefined ) {
                
                    const result = parseResponse(xhttp.responseXML)
                        if (result.news.length > 0) {
                            resolve(result)
                        } else {
                            reject(new Error(`Couldn't retrieve any news from ${source} `))
                        }
                } else if ( xhttp.response !== null && xhttp.response !== undefined) {
                     
                    if (isHTML(xhttp.response)) {
                        const doc = new DOMParser().parseFromString(xhttp.response, "text/html");
                        const result = parseResponse(doc)

                        if (result.news.length > 0) {
                            resolve(result)
                        } else {
                            reject(new Error(`Couldn't retrieve any news from ${source} `))
                        }
                    } else {
                        reject(new Error(`Xhttp reponse didnt parse yet ${source} `))
                    }
                } else {
                    reject(new Error(`Xhttp reponse XML doesn't exist for source ${source}`))
                }
            } else if (this.readyState !== 2 && this.readyState !== 3){
                reject(new Error(`Status Error # ${this.status} readystate ${this.readyState}`))
            }

            function isHTML(str) {
                var doc = new DOMParser().parseFromString(str, "text/html");
                return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
            }

            function convertStringToHTMLElements(text) {
                var xmlString = text;
                var doc = new DOMParser().parseFromString(xmlString, "text/html");
            
                const image = doc.querySelector("img")?.src
                const description = (doc.querySelectorAll('p')[1]?.innerText !== undefined && doc.querySelectorAll('p')[1]?.innerText !== null) ? doc.querySelectorAll('p')[1]?.innerText : (doc.querySelector('p')?.innerText !== undefined && doc.querySelector('p')?.innerText !== null) ? doc.querySelector('p')?.innerText : doc.body.innerText
                return { image: image, description: description }
            }

            function parseResponse(response) {
                const res = response
                const feed = response.querySelectorAll('item').length > 0 ? 
                    response.querySelectorAll('item') 
                    : response.querySelectorAll('entry')
                var news = [];
                feed.forEach((item) => {

                    var title, link, pubDate, description, author, imgUrl, url, guid;
                    const htmlCollection = item.children

                    for (var i = 0; i < htmlCollection.length; i++) {
                        const tagName = htmlCollection[i].tagName.toLowerCase()
                        const text = htmlCollection[i].textContent
                        
                        switch (tagName) {
                            case "title":
                                title = text
                                break;
                            case "link":
                                link = text
                                break;
                            case "pubDate":
                                pubDate = text
                                break;
                            case "description":
                                if (isHTML(text)) {
                                    let result = convertStringToHTMLElements(text)
                                    description = result.description
                                    if (result.image !== undefined)  imgUrl = result.image
                                } else {
                                    description = text !== "" ? 
                                        text : htmlCollection[i].innerHTML.replace("<!--[CDATA[", "").replace("]]-->", "");
                                }
                                break;
                            case "content":
                                if (isHTML(text)) {
                                    let result = convertStringToHTMLElements(text)
                                    description = result.description
                                    if (result.image !== undefined)  imgUrl = result.image
                                }
                                break;
                            case "author":
                                author = text
                                break;
                            case "dc:creator":
                                author = text
                                break;
                            case "media:thumbnail":
                                const thumbnailUrl = htmlCollection[i].getAttribute('url').includes('youtube') ? null : htmlCollection[i].getAttribute('url')
                                imgUrl = thumbnailUrl
                                break;
                            case "media:content":
                                const mediaContentUrl = htmlCollection[i].getAttribute('url').includes('youtube') ? null : htmlCollection[i].getAttribute('url')
                                imgUrl = mediaContentUrl
                                break;
                            case "image":
                                break;
                            case "guid":
                                url = text
                                break;
                            case "enclosure":
                                imgUrl = htmlCollection[i].getAttribute('url')
                                break;
                            default:
                                break;
                        } 
                    }
                    news.push(new News(title, link, pubDate, author, description, url, imgUrl, guid, source, baseUrl))
                })
                return { source: source, news: news}
            }
        };
    }) 
}

