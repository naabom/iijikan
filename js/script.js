$(function() {
    //drawer js
    $('.drawer').drawer()

    // smoothscroll
    // #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = $("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        $("html,body").animate(
            {
                scrollTop: position - $('#js-header').outerHeight()
            },
            speed
        );
        return false;
    });

    // wow js
    new WOW().init()

});

$('.drawer').drawer({
    class: {
        nav: 'drawer-nav',
        toggle: 'drawer-toggle',
        overlay: 'drawer-overlay',
        open: 'drawer-open',
        close: 'drawer-close',
        dropdown: 'drawer-dropdown'
    },
    iscroll: {
      // Configuring the iScroll
      // https://github.com/cubiq/iscroll#configuring-the-iscroll
        mouseWheel: true,
        preventDefault: false
    },
    showOverlay: true
});

// a タグの href 属性に記述された URL を、新規ウィンドウで開く関数
function navigateTargetUrl() {
    window.open(this.event.target.href, null, "noopener");
}

