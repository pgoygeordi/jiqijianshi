/*
* @author: Geordi Guo
* @email: Geordi@qq.com
* 2018 06 11
*/
var octoPrint = {
	//aon
	"aon":{
		"reception":["aon1","aon2","aon3","aon4","aon5","aon6","aon7","aon8","aon9"],
		"aon1":"http://172.16.40.221/api/job?apikey=AF2A7A87471348A9B9594D264C565C1E",
		"aon2":"http://172.16.40.220/api/job?apikey=A7954B5A3F154E5880644493E9244D90",
		"aon3":"http://172.16.40.224/api/job?apikey=3CD6FD3B0FBE4B68875D5A1BA52E38AC",
		"aon4":"http://172.16.40.225/api/job?apikey=218AEAC83D64435BB9C04F956CFA2DA1",
		"aon5":"http://172.16.40.228/api/job?apikey=C200B81C786C41F8AEB9F4DBDDCF7A0A",
		"aon6":"http://172.16.40.230/api/job?apikey=69D1BA4D890445CDA57626B232EED8BF",
		"aon7":"http://172.16.40.231/api/job?apikey=0CAC9D4DAB5B45F8A389ABFE4766A874",
		"aon8":"http://172.16.40.222/api/job?apikey=8B4150D375A246E3B71167F257485904",
		"aon9":"http://172.16.40.223/api/job?apikey=61597753F37B4A4D8A99791F149F5AC0",

	},
	//nv
	"nv":{
		"reception":["nv1","nv2","nv3","nv4"],
		//"reception":["nv2"],
		"nv1":"http://172.16.50.3/api/job?apikey=288E11E5ADF844E1B524DC8EE6454EF4",
		"nv2":"http://172.16.50.4/api/job?apikey=8221E5B2EC1E47C5A5E59CF124F8D057",
		"nv3":"http://172.16.50.2/api/job?apikey=DDD3EDD17E7444F3AAD6FE6A57F8D68C",
		"nv4":"http://172.16.50.6/api/job?apikey=80F6EA0079A647D697A14D19C873477B",
	}
};
var videoCont = null;
var runAfterLoading = function (delay){
	var millsec = (!!parseInt(delay))?parseInt(delay):5000;
	setTimeout(function(){
		checkPrinterStatus(octoPrint);
	},millsec);
};
var checkPrinterStatus = function (printers){
	var url, divId, aons = printers.aon, nvs = printers.nv;
	if(aons){
		for(var  i = 0 ; i < aons.reception.length ; i++){
			divId = aons.reception[i];
			url = aons[divId];
			getJobInfo(url,parsePrinterStatus, onError, divId);
		}
	}
	if(nvs){
		for (var i = nvs.reception.length - 1; i >= 0; i--) {
			divId = nvs.reception[i];
			url = nvs[divId];
			getJobInfo(url, parsePrinterStatus, onError, divId);
		}
	}
	//runAfterLoading(60000);
};
var checkOnePrinter = function(){
	var obj = {"nv":{
		//"reception":["nv1","nv2","nv3","nv4"],
		"reception":["nv2"],
		"nv1":"http://172.16.50.3/api/job?apikey=288E11E5ADF844E1B524DC8EE6454EF4",
		"nv2":"http://172.16.50.4/api/job?apikey=8221E5B2EC1E47C5A5E59CF124F8D057",
		"nv3":"http://172.16.50.2/api/job?apikey=DDD3EDD17E7444F3AAD6FE6A57F8D68C",
		"nv4":"http://172.16.50.6/api/job?apikey=80F6EA0079A647D697A14D19C873477B",
	}};
	getJobInfo("http://172.16.50.4/api/job?apikey=8221E5B2EC1E47C5A5E59CF124F8D057",parsePrinterStatus, onError, "nv2");
};
var parsePrinterStatus = function (jsonObj){
	if(jsonObj){
		var divId = jsonObj.id;
		var fontColour = genTextColourClass(jsonObj.data.state);
		var domObj = $("#"+divId+" .cameraFeed .status");
		var timeLine = "";
		if(jsonObj.data.progress){
			var printTime = jsonObj.data.progress.printTime;
			var printTimeLeft = jsonObj.data.progress.printTimeLeft;
			if(printTimeLeft){
				var h = parseInt(printTime/3600);
				var m = parseInt((printTime%3600)/60);
				var ptString = h+":"+((m<10)?"0"+m:m);
					h = parseInt(printTimeLeft/3600);
					m = parseInt((printTimeLeft%3600)/60);
				var ptlString = h+":"+((m<10)?"0"+m:m);
				timeLine = '<span class="printTimeLeft redT">'+ptlString+'</span><span class="printTime greenT">'+ptString+'</span>';
			}
		}		
		if(domObj.length){
			//domObj existed
			domObj.removeClass().addClass("status "+fontColour);
			domObj[0].innerHTML = jsonObj.data.state + timeLine;
		}
		else{
			//domObj not existed
			$("#"+divId+" .cameraFeed").append('<p class="status '+fontColour+'">'+jsonObj.data.state+timeLine+'</p>');
		}
		console.log(divId);
	}
	else{
		debugger;
	}
};
var genTextColourClass = function (str){
	var rt = "";
	switch (str){
		case "ye-":
			rt = "yellowT";
			break;
		case "Printing":
			rt = "greenT";
			break;
		case "":
			rt = "blueT";
			break;
		case "Offline":
			rt = "redT";
			break;
		case "ora-":
			rt = "orangeT";
			break;
		case "Operational":
			rt = "whiteT";
			break;
	}
	return rt;
};
var onError = function (errorObj){
	console.log(errorObj);
};
//CORS cross origin resource sharing
var getJobInfo = function (url, successCallback, errorCallback, id) {
   	$.ajax({
         url: url,
         type: "get",
         async: false,
         timeout:3000,
         data:{
            "id":1 
         },
         dataType:"json",
         withCredentials:true,
         beforeSend: function(xhr){
         },
         success: function(data){
             successCallback({"id": id, "data":data});
         },
         error: function(){
             errorCallback('fail');
         }
   	});
};
var  quitVideo = function (){
	videoCont.hide();
	videoCont.imgDom.removeAttr("src");
	videoCont.goToLink.removeAttr("href");
};


$(document).ready(function(){
	$('img.webcam_image').error(function () {   
		$(this).unbind("error").attr("src", "assets/unloading.png").removeClass("flipV");
		$(this.parentElement).addClass("deactivated");
	});
	videoCont = $("#videoCont");
	videoCont.bg = $('#cameraVideoBG');
	videoCont.imgDom = $('#webcam_video');
	videoCont.goToLink = $('#goToLink');
	runAfterLoading();
	$('.cameraFeed a').click(function(evt){
		evt.preventDefault();
		if(!$(this).hasClass("deactivated")){
			//evt.stopPropagation();
			if(this.tagName=="A"){
			  	var url = this.firstElementChild.getAttribute("title"); 
			  	if($(this.firstElementChild).hasClass("flipV")){
			  		videoCont.imgDom.addClass("flipV");
			  	}
			  	else{
			  		videoCont.imgDom.removeClass("flipV");
			  	}
			}
			else{
				var url = this.getAttribute("title");
				debugger;
			}
			videoCont.imgDom.attr({"src":url});
			videoCont.goToLink.attr("href",this.getAttribute("href"));
			//console.log(this.parentElement.parentElement.getAttribute("id"));
			videoCont.show();
		}
	});
	videoCont.goToLink.click(function (evt){
		setTimeout(function(){
			quitVideo();
		},500);
	});
	
}); //end document ready
