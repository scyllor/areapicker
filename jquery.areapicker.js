/**
 * author:liurui nickname:scylla date:2012-9-11 18:00 mail:me@scylla.me ver:0.2
 * 版权所有，转载请声明
 */
;
(function($) {
	$.fn
			.extend({
				areaPicker : function(configs) {
					configs = configs || {};
					var defaultConfig = {};
					var areaboxid = $(this).attr('id');
					console.log(this);
					defaultConfig.boxid = areaboxid;
					defaultConfig.valboxid = 'val' + areaboxid;
					defaultConfig.cityboxid = 'citybox' + areaboxid;
					defaultConfig.countyboxid = 'countybox' + areaboxid;

					$.extend(configs, defaultConfig);

					var provinceBox = document.getElementById(areaboxid);
					provinceBox.areaData = areadata;
					var provinceOpts = [ '<option value="000">请选择</option>' ];
					for ( var p in provinceBox.areaData) {
						var item = provinceBox.areaData[p];
						provinceOpts.push("<option value='" + item.id + "'>"
								+ item.n + "</option>");
					}

					$(provinceBox).append(provinceOpts.join(''));
					var cityBox = $([ '<select id="', configs.cityboxid,
							'"><option value="0000">请选择</option></select>' ]
							.join(''));
					var countyBox = $([ '<select id="', configs.countyboxid,
							'"><option value="000000">请选择</option></select>' ]
							.join(''));
					var valbox = $([ '<input type="hidden" id="',
							configs.valboxid, '" value=""/>' ].join(''));
					$(provinceBox).after(valbox).after(countyBox)
							.after(cityBox);

					provinceBox.areaChild = document
							.getElementById(defaultConfig.cityboxid);
					provinceBox.areaChild.areaChild = document
							.getElementById(defaultConfig.countyboxid);
					console.log(provinceBox.areaChild.areaChild);

					$("#" + configs.boxid).change(function(e) {
						console.log('boxchange', this.areaData);
						clearChildOpts(this);
						lrchangeArea(this, this.areaData);
						$(this.areaChild).show();
					});
					$("#" + configs.cityboxid).change(function(e) {
						clearChildOpts(this);
						lrchangeArea(this, this.areaData);
						$(this.areaChild).show();
					});
					clearChildOpts(provinceBox);
					function clearChildOpts(parent) {
						for (; parent && (parent = parent.areaChild);) {
							$(parent).empty();
							$(parent).append('<option value="0">请选择</option>');
							$(parent).hide();
						}
					}

					function lrchangeArea(parent) {
						if (parent.areaChild) {
							var areachild = parent.areaChild;
							for ( var p in parent.areaData) {
								var item = parent.areaData[p];
								if (item.id == $(parent).val()) {
									areachild.areaData = item.children;
									break;
								}
							}
							var option = [];
							console.log(areachild.areaData);
							for ( var p in areachild.areaData) {
								var data = areachild.areaData[p];
								console.log(data);
								option.push([ '<option value="',data.id, '">',
										data.n, '</option>' ].join(''));
							}
							$(parent.areaChild).append(option.join(''));
						}
					}
				}
			});
})(jQuery);