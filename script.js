

(function() {

    function badgeMe() {

        var viewstatedetectorbadgewrapper = document.createElement('div');
        viewstatedetectorbadgewrapper.setAttribute('id', 'viewstatedetectorbadgewrapper');
        viewstatedetectorbadgewrapper.style.position = 'fixed';
        viewstatedetectorbadgewrapper.style.height = '161px';
        viewstatedetectorbadgewrapper.style.width = '158px';
        viewstatedetectorbadgewrapper.style.top = '10px';
        viewstatedetectorbadgewrapper.style.right = '10px';
        viewstatedetectorbadgewrapper.style.zIndex = '9999';

        var link = document.createElement('a');
        link.setAttribute('href', 'http://blog.jdconley.com/2009/01/10-reasons-aspnet-webforms-suck.html');
        link.setAttribute('target', '_blank');

        var img = document.createElement('img');
        img.setAttribute('src', chrome.extension.getURL('badge.png'));
        img.style.webkitTransform = 'rotate(15deg)';
        img.setAttribute('title', 'Want to know why viewstate is bad?');

        var hideme = document.createElement('div');
        hideme.style.height = '10px';
        hideme.style.width = '10px';
        hideme.style.border = '2px solid #fff';
        hideme.style.opacity = '0.5';
        hideme.style.fontFamily = 'Helvetica, Arial';
        hideme.style.fontSize = '10px';
        hideme.style.color = '#fff';
        hideme.innerHTML = 'X';
        hideme.style.textAlign = 'center';
        hideme.style.cursor = 'pointer';
        hideme.style.float = 'right';
        hideme.style.boxShadow = '0px 0px 2px #000';
        hideme.style.textShadow = '0px 0px 2px #000';
        hideme.onclick = new Function("document.getElementById('viewstatedetectorbadgewrapper').style.display = 'none';");

        link.appendChild(img);
        viewstatedetectorbadgewrapper.appendChild(link);
        viewstatedetectorbadgewrapper.appendChild(hideme);
        document.body.appendChild(viewstatedetectorbadgewrapper);
    }

    if (document.getElementById('__VIEWSTATE') !== null) {
        badgeMe();

    }
    return false;
})();

