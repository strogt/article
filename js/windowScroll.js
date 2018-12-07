window.scrollConditions = (fun) => {
	return window.onscroll = function () {
		var wScrollY = window.scrollY; // 当前滚动条位置
		var wInnerH = window.innerHeight; // 设备窗口的高度
		var bScrollH = document.body.scrollHeight; // 滚动条总高度
		if (wScrollY + wInnerH >= bScrollH && wInnerH != bScrollH) {
			fun();
		}
	}
}

