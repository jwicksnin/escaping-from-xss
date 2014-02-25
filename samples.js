function escapeHTML (unsafe_str) {
    	return unsafe_str
	      .replace(/&/g, '&amp;')
	      .replace(/</g, '&lt;')
	      .replace(/>/g, '&gt;')
	      .replace(/\"/g, '&quot;')
	      .replace('/', '&#x2F;')
	      .replace(/\'/g, '&#x27;'); //
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
