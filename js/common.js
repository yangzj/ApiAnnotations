$(function() {
	$.ajax({
		url: '../sidebar.html',
		success: function(data) {
			$('#sidebar').html(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			return xypay.msg('网络异常，请刷新重试', 0);
		},
		complete: function(XMLHttpRequest, status) {
			if (status == 'timeout') {
				ajaxTimeoutTest.abort();
				return xypay.msg('网络异常，请刷新重试', 0);
			}
		}
	});
	
	$.ajax({
		url: '../top.html',
		success: function(data) {
			$('#_top').html(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			return xypay.msg('网络异常，请刷新重试', 0);
		},
		complete: function(XMLHttpRequest, status) {
			if (status == 'timeout') {
				ajaxTimeoutTest.abort();
				return xypay.msg('网络异常，请刷新重试', 0);
			}
		}
	});
	
	$.ajax({
		url: '../copyright.html',
		success: function(data) {
			$('#_copyright').html(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			return xypay.msg('网络异常，请刷新重试', 0);
		},
		complete: function(XMLHttpRequest, status) {
			if (status == 'timeout') {
				ajaxTimeoutTest.abort();
				return xypay.msg('网络异常，请刷新重试', 0);
			}
		}
	});
	$('._apt-jar-name').text('apiannotations-api-0.1-bin.jar');
});