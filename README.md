areapicker
==========
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<script type="text/javascript" src="jquery/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="area_json.js"></script>
<script type="text/javascript" src="jquery.areapicker.js"></script>
</head>
<body>
	<h2>AreaPicker 4 China</h2>
	<div id="test">
		<select id="testareapicker"></select>
		<script>
			$(function(e) {
				$('#testareapicker').areaPicker({});
			});
		</script>
	</div>
</body>
</html>
