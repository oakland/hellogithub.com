(function (window, $) {
	var $favourite = $(".favourite").eq(0); // 获取 .favourite

	// 通过 ajax 将后台用户的收藏夹拉下来，并且填充到 .favourite 中
	$.ajax({
		//
	});

	$("span.icon-star-empty").each(function(idx, el) {
		var $el = $(el);
		$el.on("click", function(e) {
			e.stopPropagation();

			var $this = $(this);

			// 1. 修改 star 的 classList
			// 上一个 star 修改为 empty
			$favourite.siblings("span").removeClass("icon-star-full").addClass("icon-star-empty");
			// 然后再修改当前 star 的状态为 full
			$this.removeClass("icon-star-empty").addClass("icon-star-full");
			
			// 2. 获取 title，添加到 .favourite input 中
			var title = $this.prev().text().split(".")[1];
			$favourite.find("input#title").val(title);

			// 3. 给 $this.parent 添加 .favourite，且 .favourite 设置为 block
			$this.parent().append($favourite);
			var left = $this.prev().width();
			$favourite.css({
				left: left-140,
				display: 'block'
			});

		});
	});

	// 点击 取消 按钮的时候，.favourite 消失。====
	$(".favourite button").eq(-2).on("click", function(e) {
		e.stopPropagation();
		e.preventDefault(); // 阻止表格提交的页面跳转

		$favourite.hide();

		$(this).parents("h3").find("span").removeClass("icon-star-full").addClass("icon-star-empty");
	});

	// 点击 确认 按钮的时候，发送 ajax 请求给后端，实现数据交换。===
	$(".favourite button").eq(-1).on("click", function(e) {
		e.preventDefault(); // 阻止表格提交的页面跳转
		var title = $("#title").val();
		var folder = $("#folder").val();
		$.ajax({
			// 发送 ajax 请求，把数据传送给后端...
			// success 回调中，实现 icon-star-full
		});
		$favourite.siblings("span").addClass("icon-star-full");
	});

	// 点击页面中的其他位置， .favourite 隐藏
	$(document).on("click", function(e) {
		$favourite.siblings("span").removeClass("icon-star-full").addClass("icon-star-empty");
		$favourite.hide();
	});

	$(".favourite").on("click", function(e) {
		$(this).show();
		e.stopPropagation();
	});

	// 添加收藏夹
	var $addFolderForm = $(".favourite .addFolder").eq(0);
	$("#folder").on("change", function(e) {
		if($(this).val() == "添加收藏夹") {
			$addFolderForm.css({
				display: "block"
			});
		} else {
			$addFolderForm.css({
				display: "none"
			})
		}
	})

	$(".favourite button").eq(-3).on("click", function(e) {
		e.preventDefault(); // 阻止表格提交导致的页面跳转
		var folderName = $(".addFolder input").eq(0).val();
		$.ajax({
			// 发送 ajax 请求
		});
		// ajax 请求发送成功之后，位置字段自动添加新增文件夹的名称，并且跳转到该 option
		$("#folder option").last().before("<option>" + folderName + "</option>");
		$("#folder").val(folderName);
		$(this).parent().css({
			display: "none"
		});
		$(".addFolder input").eq(0).val("")
	})

	// login modal
	$("#toggleModal").click(function() {
		$(".modal").eq(0).show();
	});

	$(".modal-footer a:eq(0)").click(function() {
		$(".modal").eq(0).hide();
	});
	
})(this, jQuery);