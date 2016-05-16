$(function(){
	$(window).scroll(function(){ // スクロールイベントの設定
		var element = $('#jump-top'); // 対象を設定
		var visible = element.is(':visible'); // 現在表示されているか
		var now = $(window).scrollTop(); // スクロール距離をnowに入れる
		if(now > 50){ //スクロール距離50以上
			if(!visible){
				element.fadeIn('fasr'); //はやくフェードイン
			}
		}else if(visible){
			element.fadeOut('slow'); // ゆっくりフェードアウト
		};
	});
	$('#move-page-top').click(
		function(){
			$('html, body').animate({scrollTop:0}, 'slow');
		}
	);
});

