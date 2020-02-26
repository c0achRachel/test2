var Clock = (function(){

	var exports = function(element) {
		this._element = element;
		var html = '';
		for (var i=0;i<6;i++) {
			html += '<span>&nbsp;</span>';
		}
		this._element.innerHTML = html;
		this._slots = this._element.getElementsByTagName('span');
		this._tick();
	};
