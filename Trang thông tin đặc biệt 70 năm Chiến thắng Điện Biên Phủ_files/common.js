
$(document).ready(function () {
    $('#btnsearch').click(function (e) {
        e.preventDefault();
        doSearch($('#txtsearch').val());
    });
    $('#txtsearch').keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            doSearch($(this).val());
        }
    });
    $('#txtsearch').focus(function () { if ($(this).val() == 'Tìm kiếm') { $(this).val(''); } });
    $('#txtsearch').blur(function () { if ($(this).val() == '') { $(this).val('Tìm kiếm'); } });

    $('.box-social a').click(function (e) {
        e.preventDefault();
        var url = '';
        switch ($(this).attr('data-rel')) {
            case "facebook":
                url = "https://www.facebook.com/sharer.php?u=" + window.location.href + "&p[title]=" + cutoffTitle(document.title);
                break;
            case "twitter":
                url = "https://twitter.com/share?url=" + window.location.href + "&title=" + cutoffTitle(document.title);
                break;
            case "zalo":
                return;
            case "sendmail":
                window.location = 'mailto:email@domain.com?subject=' + window.encodeURIComponent(document.title) + '&body=' + window.encodeURIComponent(window.location.toString());
                return;
        }
        if (url == '') return false;
        window.open(url, '', '_blank,resizable=yes,width=800,height=450');
        return false;
    });

    $('.banner').each(function () {
        if ($(this).contents().length == 0) {
            $(this).remove();
        }
    });
});

function doSearch(val) {
    if (val != '' && val != 'Tìm kiếm') {
        var url = '';
        var keyword = val;
        if (keyword != '') {
            keyword = keyword.replace(/ /g, '-');
            url += "/tags/" + encodeURIComponent(keyword) + ".html";
        }
        window.location = url;

        return false;
    }
}
function cutoffTitle(title) {
    title = title.toString();
    if (title.indexOf('|') > 0) { title = title.substr(0, title.lastIndexOf('|') - 1); }
    if (title.indexOf('|') > 0) { title = title.substr(0, title.lastIndexOf('|') - 1); }
    return title;
}