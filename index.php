<?php
header('Access-Control-Allow-Origin:https://www.baidu.com');
if (!isset($_SERVER['PHP_AUTH_USER'])) {
	header('WWW-Authenticate: Basic realm="My Realm"');
    header('HTTP/1.0 401 Unauthorized');
    echo '请登陆之后方可查看';
    exit;
} else {
	$users = array('admin' => '123', 'guest' => '123');
    if($users[$_SERVER['PHP_AUTH_USER']] != $_SERVER['PHP_AUTH_PW']){
    	echo "<h2>This server could not verify that you are authorized to access the document requested. Either you supplied the wrong credentials (e.g., bad password), or your browser doesn't understand how to supply the credentials required.</h2>";
    	header('WWW-Authenticate: Basic realm="My Realm"');
        header('HTTP/1.0 401 Unauthorized');

    }
    else{
?>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Aon</title>
		<script src="js/jquery-1.9.1.min.js"></script>
		<script src="js/script.js"></script>
		<link rel="stylesheet" type="text/css" href="css/main.css">
	</head>
	<body>
		<div id="header">打印机工作状态</div>
		<div id="main">
			<div id="aonPrinters">AON</div>
			<div id="aon">
				<div id="aon1" class="cameraCont">
					<p class="printerName">1号机</p>
					<div class="cameraFeed"><a href="http://172.16.40.221"><img class="webcam_image" title="http://172.16.40.221/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.221:8080/?action=snapshot"></a></div>
				</div>
				<div id="aon2" class="cameraCont">
					<p class="printerName">2号机</p>
					<div class="cameraFeed"><a href="http://172.16.40.220"><img class="webcam_image flipV" title="http://172.16.40.220/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.220:8080/?action=snapshot"></a></div>
				</div>
				<div id="aon3" class="cameraCont">
					<p class="printerName">3号机</p>
					<div class="cameraFeed"><a href="http://172.16.40.224"><img class="webcam_image flipV" title="http://172.16.40.224/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.224:8080/?action=snapshot"></a></div>
				</div>
				<div id="aon4" class="cameraCont">
					<p class="printerName">4号机</p>
					<div class="cameraFeed"><a href="http://172.16.40.225"><img class="webcam_image flipV" title="http://172.16.40.225/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.225:8080/?action=snapshot"></a></div>
				</div>
				<div id="aon5" class="cameraCont">
					<p class="printerName">5号机</p>
					<div class="cameraFeed"><a href="http://172.16.40.228"><img class="webcam_image flipV" title="http://172.16.40.228/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.228:8080/?action=snapshot"></a></div>
				</div>
				<div id="aon6" class="cameraCont">
					<p class="printerName">6号机</p>
					<div class="cameraFeed"><a href="http://172.16.40.230"><img class="webcam_image flipV" title="http://172.16.40.230/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.230:8080/?action=snapshot"></a></div>
				</div>
				<div id="aon7" class="cameraCont">
					<p class="printerName">7号机</p>
					<div class="cameraFeed"><a href="http://172.16.40.231"><img class="webcam_image flipV" title="http://172.16.40.231/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.231:8080/?action=snapshot"></a></div>
				</div>
				<div id="aon8" class="cameraCont">
					<p class="printerName">8号机</p>
					<div class="cameraFeed "><a href="http://172.16.40.222"><img class="webcam_image flipV" title="http://172.16.40.222/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.222:8080/?action=snapshot"></a></div>
				</div>
				<div id="aon9" class="cameraCont">
					<p class="printerName">9号机</p>
					<div class="cameraFeed"><a href="http://172.16.40.223"><img class="webcam_image flipV" title="http://172.16.40.223/webcam/?action=stream&amp;1526875505765" src="http://172.16.40.223:8080/?action=snapshot"></a></div>
				</div>
				<!--div id="AON 7" class="cameraCont">
					<p class="printerName">AON 7</p>
					<div class="cameraFeed"><a href="http://172.16.40.226"><img class="webcam_image" src="http://172.16.40.226/webcam/?action=stream&amp;1526875505765"></a></div>
				</div>
				<div id="AON 8" class="cameraCont">
					<p class="printerName">AON 8</p>
					<div class="cameraFeed"><a href="http://172.16.40.227"><img class="webcam_image" src="http://172.16.40.227/webcam/?action=stream&amp;1526875505765"></a></div>
				</div-->
			</div>
			<div id="nvPrinters">NV</div>
			<div id="nv">
				<div id="nv1" class="cameraCont">
					<p class="printerName">1号机</p>
					<div class="cameraFeed"><a href="http://172.16.50.3"><img class="webcam_image" title="http://172.16.50.3/webcam/?action=stream&amp;1526875505765" src="http://172.16.50.3:8080/?action=snapshot" style=""></a></div>
				</div>
				<div id="nv2" class="cameraCont">
					<p class="printerName">2号机</p>
					<div class="cameraFeed"><a href="http://172.16.50.4"><img class="webcam_image" title="http://172.16.50.4/webcam/?action=stream&amp;1526875505765" src="http://172.16.50.4:8080/?action=snapshot" style=""></a></div>
				</div>
				<div id="nv3" class="cameraCont">
					<p class="printerName">3号机</p>
					<div class="cameraFeed"><a href="http://172.16.50.2"><img class="webcam_image" title="http://172.16.50.2/webcam/?action=stream&amp;1526875505765" src="http://172.16.50.2:8080/?action=snapshot" style=""></a></div>
				</div>
				<div id="nv4" class="cameraCont">
					<p class="printerName">4号机</p>
					<div class="cameraFeed"><a href="http://172.16.50.6"><img class="webcam_image" title="http://172.16.50.6/webcam/?action=stream&amp;1526875505765" src="http://172.16.50.6:8080/?action=snapshot" style=""></a></div>
				</div>
			</div>
		</div>
		 	<div id="videoCont">
			 	<div id="cameraVideoBG"></div>
		 		<div id="cameraVideo" class="centred">
		 			<img id="webcam_video">	
		 			<div id="goToLabel">
		 				<a id="goToLink" target="_blank" href="">进入控制页面</a>
		 				<a id="quitVideo" onclick="quitVideo()">关闭</a>
		 			</div>
		 		</div>
			</div>
		<div id="footer"></div>
	</body>
</html>
<?php 
	}
}
?>