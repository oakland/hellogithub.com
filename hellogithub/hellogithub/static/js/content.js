(function (window, $) {
	var $favourite = $(".favourite").eq(0); // 获取 .favourite	

	$("span.icon-star-empty").each(function(idx, el) {
		var $el = $(el);
		$el.on("click", function(e) {
			e.stopPropagation();

			var $this = $(this);

			// 1. 修改 star 的 classList
			$this.removeClass("icon-star-empty").addClass("icon-star-full");
			
			// 2. 获取 title，添加到 .favourite input 中
			var title = $this.prev().text().split(".")[1];
			$favourite.find("input#title").val(title);

			// 3. 给 $this 添加 .favourite，且 .favourite 设置为 block
			$this.parent().append($favourite);
			var left = $this.prev().width();
			$favourite.css({
				left: left-140,
				display: 'block'
			});

		});
	});

	// 点击 取消 按钮的时候，.favourite 消失。====
	$(".favourite button").eq(0).on("click", function(e) {
		e.stopPropagation();
		e.preventDefault();

		var $this = $(this);

		$favourite.hide();

		$this.parents("h3").find("span").removeClass("icon-star-full").addClass("icon-star-empty");
	});

	// 点击 确认 按钮的时候，发送 ajax 请求给后端，实现数据交换。===
	$(".favourite button").eq(1).on("click", function(e) {
		e.preventDefault();
		var title = $("#title").val();
		var folder = $("#folder").val();
		$.ajax({
			// 发送 ajax 请求，把数据传送给后端...
		});
	});

	// 点击页面中的其他位置， .favourite 隐藏
	$(document).on("click", function(e) {
		$favourite.hide();
		$(".icon-star-full").removeClass("icon-star-full").addClass("icon-star-empty");
	});

	$(".favourite").on("click", function(e) {
		$(this).show();
		e.stopPropagation();
	});
	
})(this, jQuery);