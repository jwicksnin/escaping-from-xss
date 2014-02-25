// This approach is more of a catch-all and allows you to dictate which characters and how it is escaped.

function escapeHTML (unsafe_str) {
    	return unsafe_str
	      .replace(/&/g, '&amp;')
	      .replace(/</g, '&lt;')
	      .replace(/>/g, '&gt;')
	      .replace(/\"/g, '&quot;')
	      .replace('/', '&#x2F;')
	      .replace(/\'/g, '&#x27;'); 
}


// This approach is not as effective, but better than nothing.
function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
