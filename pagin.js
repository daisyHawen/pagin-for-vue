define(function() {　　　
    /*----处理分页
     *----输入：
     *--------t_p(NUM)：总页数
     *--------cur_p(NUM):当前页码
     *返回：页码数组pages，以及当前页码
     */
    var paginGetli = function(t_p, cur_p) {
        console.log('test');
        //总页数,默认为1
        var total_page = t_p || 1;
        //当前页数，默认为1
        var cur_page = cur_p || 1;
        /*处理分页*/
        var pages = [];
        var prev = {
            "disabled": false,
            "active": false,
            "content": "<<"
        };
        var next = {
            "disabled": true,
            "active": false,
            "content": ">>"
        };
        var more = {
            "disabled": false,
            "active": false,
            "content": "..."
        };
        /*总页数小于5*/
        if (total_page === 1) {
            console.log('total_page === 1');
            pages.push(prev);
            pages.push({
                "disabled": true,
                "active": true,
                "content": "1"
            });
            pages.push(next);
        } else {
            if (total_page === cur_page) {
                /*当前页数==尾页*/
                prev.disabled = false;
            } else if (cur_page === 1) {
                /*当前页数为第一页*/
                next.disabled = false;
                prev.disabled = true;
            } else {
                /*当前页非首页、末页*/
                prev.disabled = false;
                next.disabled = false;
            }
            pages.push(prev);
            if (total_page <=5) {
                for (var i = 1; i <= total_page; i++) {
                    var item = {
                        "disabled": false,
                        "active": false,
                        "content": i
                    };
                    if (i === cur_page) {
                        item.active = true;
                    };
                    pages.push(item);
                }
                /*hehe*/
            } else {
                /*如果总页数>5*/
                var tth = Math.floor(total_page / 5);
                console.log(cur_page);
                var nth = Math.floor((cur_page-1) / 5);
                var begin = nth * 5 + 1;
                var end = 5 + nth * 5;
                if (total_page<end) {
                    end = total_page;
                }
                console.log(begin);
                console.log(end);
                // if (nth > 0) {
                //     pages.push(more);
                // }
                for (var i = begin; i <= end; i++) {
                    var item = {
                        "disabled": false,
                        "active": false,
                        "content": i
                    };
                    if (i === cur_page) {
                        item.active = true;
                    };
                    pages.push(item);
                }
                if (nth < tth) {
                    pages.push(more);
                }
            }
            pages.push(next);
        }
        var result = {
            "cur_page": cur_page,
            "pages": pages
        }
        return result;
    };　　　　
    return {　　　　　　
        paginGetli: paginGetli　　　
    };　　
});　
