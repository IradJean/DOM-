// reading from book DOM ENLIGHTENMENT...
// Node types
/*
DOCUMENT_NODE (e.g., window.document)
• ELEMENT_NODE (e.g., <body>, <a>, <p>, <script>, <style>, <html>, <h1>)
• ATTRIBUTE_NODE (e.g., class="funEdges")
• TEXT_NODE (e.g., text characters in an HTML document including carriage returns
and whitespace)
DOCUMENT_FRAGMENT_NODE (e.g., document.createDocumentFragment())
• DOCUMENT_TYPE_NODE (e.g., <!DOCTYPE html>)
2 |*/

var nodeAnchor = document.querySelector('a');
var props = [];
for( var key in nodeAnchor){
	props.push(key);
}
//Properties and Methods for Working with Nodes
// node properties:
/*
 childNodes
• firstChild
• lastChild
• nextSibling
• nodeName
• nodeType
• nodeValue
• parentNode
• previousSibling

// node methods:
• appendChild()
• cloneNode()
• compareDocumentPosition()
• contains()
• hasChildNodes()
• insertBefore()
• isEqualNode()
• removeChild()
• replaceChild()

//Document methods:

• document.createElement()
• document.createTextNode()

//HTML*Element properties
• innerHTML
• outerHTML
• textContent
• innerText
• outerText
• firstElementChild
• lastElementChild
• nextElementChild
• previousElementChild
• children
//HTML element method
• insertAdjacentHTML()
*/
//Using JavaScript Methods to Create Element and Text
//Nodes using: createElement() and createTextNode(); createAttribute(), createComment();setAttribute(), getAttribute()
// removeAttribute();

// HTML ELEMENTS LIST
HTMLLinkElement HTMLQuoteElement
HTMLTitleElement HTMLPreElement
HTMLMetaElement HTMLBRElement
HTMLBaseElement HTMLBaseFontElement
HTMLIsIndexElement HTMLFontElement
HTMLStyleElement HTMLHRElement
HTMLBodyElement HTMLModElement
HTMLFormElement HTMLAnchorElement
HTMLSelectElement HTMLImageElement
HTMLOptGroupElement HTMLObjectElement
HTMLOptionElement HTMLParamElement
HTMLInputElement HTMLAppletElement
HTMLTextAreaElement HTMLMapElement
HTMLButtonElement HTMLAreaElement
HTMLLabelElement HTMLScriptElement
HTMLFieldSetElement HTMLTableElement
HTMLLegendElement HTMLTableCaptionElement
HTMLUListElement HTMLTableColElement
HTMLOListElement HTMLTableSectionElement
HTMLDListElement HTMLTableRowElement
HTMLDirectoryElement HTMLTableCellElement
HTMLMenuElement HTMLFrameSetElement
HTMLLIElement HTMLFrameElement
HTMLDivElement HTMLIFrameElement