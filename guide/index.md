## QRCode 二维码生成

### 用法

初始化

	KISSY.use('kg/qrcode/2.0.1/',function(S,QRCode){
		// "test"为id
		var qrcode = new QRCode("test", {
			text: "http://www.taobao.com",
			width: 128,
			height: 128,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
	});

一些方法

	qrcode.clear(); // 清空二维码区域.
	qrcode.makeCode("http://naver.com"); // 重新生成二维码.

### 浏览器支持

IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

### 源地址

- https://github.com/davidshimjs/qrcodejs
