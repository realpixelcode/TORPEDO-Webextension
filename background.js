// init storage
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    'onceClickedDomains': [],
    'userDefinedDomains': [],
    'timer': 3,
    'tooltipTextCounter': [0, 0, 0, 0, 0, 0], // T1=0, T2=1, T31=2, T32=3, T33=4, T4=5
    'trustedTimerActivated': false,
    'userTimerActivated': false,
    'privacyModeActivated': true,
    'securityModeActivated': false,
    'redirectModeActivated': false,
    'blackListActivated': true,
    'trustedListActivated': true,
    'referrerPart1': ["deref-gmx.net", "deref-web-02.de", "google.*", "google.*"],
    'referrerPart2': ["/mail/client/[...]/dereferrer/?", "/mail/client/[...]/dereferrer/?", "/url?", "/url?"],
    'referrerPart3': ["redirectUrl=", "redirectUrl=", "url=", "q="],
    'dangerousDomains': [],
    'trustedDomains': ["amazon.com", "amazon.de", "aliexpress.com", "bahn.de", "bild.de", "bing.com", "blogspot.com", "booking.com", "chip.de", "deutsche-bank.de", "dhl.de", "ebay.de", "ebay-kleinanzeigen.de", "facebook.com", "fandom.com", "gmx.net", "google.com", "google.de", "google.ru", "idealo.de", "imdb.com", "immobilienscout24.de", "instagram.com", "live.com", "mail.ru", "microsoft.com", "mobile.de", "netflix.com", "ok.ru", "otto.de", "paypal.com", "postbank.de", "reddit.com", "shop-apotheke.com", "spiegel.de", "telekom.com", "t-online", "twitch.tv", "vk.com", "web.de", "wetter.com", "wikipedia.org", "yahoo.com", "yandex.ru", "youtube.com",
      "adobe.com", "apple.com", "baidu.com", "chase.com", "cnn.com", "craigslist.org", "dropbox.com", "ebay.com", "espn.com", "force.com", "imdb.com", "imgur.com", "indeed.com", "jd.com", "linkedin.com", "login.tmall.com", "microsoftonline.com", "msn.com", "myshopify.com", "nytimes.com", "office.com", "qq.com", "salesforce.com", "sohu.com", "spotify.com", "stackoverflow.com", "taobao.com", "tmall.com", "tumblr.com", "twitter.com", "walmart.com", "wellsfargo.com", "yelp.com", "zillow.com"],
    'similiarTrustedDomains': ["amazon.com", "amazon.de", "aliexpress.com", "bahn.de", "bild.de", "bing.com", "blogspot.com", "booking.com", "chip.de", "deutschebank.de", "dhl.de", "ebay.de", "ebaykleinanzeigen.de", "facebook.com", "fandom.com", "gmx.net", "google.com", "google.de", "google.ru", "idealo.de", "imdb.com", "immobilienscout.de", "instagram.com", "live.com", "mail.ru", "microsoft.com", "mobile.de", "netflix.com", "ok.ru", "otto.de", "paypal.com", "postbank.de", "reddit.com", "shopapotheke.com", "spiegel.de", "telekom.com", "tonline", "twitch.tv", "vk.com", "web.de", "wetter.com", "wikipedia.org", "yahoo.com", "yandex.ru", "youtube.com", "adobe.com", "apple.com", "baidu.com", "chase.com", "cnn.com", "craigslist.org", "dropbox.com", "ebay.com", "espn.com", "force.com", "imdb.com", "imgur.com", "indeed.com", "jd.com", "linkedin.com", "login.tmall.com", "microsoftonline.com", "msn.com", "myshopify.com", "nytimes.com", "office.com", "qq.com", "salesforce.com", "sohu.com", "spotify.com", "stackoverflow.com", "taobao.com", "tmall.com", "tumblr.com", "twitter.com", "walmart.com", "wellsfargo.com", "yelp.com", "zillow.com"],
    'redirectDomains': ["bit.ly", "goo.gl", "bit.do", "tinyurl.com", "is.gd", "cli.gs", "pic.gd", "DwarfURL.com", "ow.ly", "yfrog.com", "migre.me", "ff.im", "tiny.cc", "url4.eu", "tr.im", "twit.ac", "su.pr", "twurl.nl", "snipurl.com", "BudURL.com", "short.to", "ping.fm", "Digg.com", "post.ly", "Just.as", "bkite.com", "snipr.com", "flic.kr", "loopt.us", "doiop.com", "twitthis.com", "htxt.it", "AltURL.com", "RedirX.com", "DigBig.com", "short.ie", "u.mavrev.com", "kl.am", "wp.me", "u.nu", "rubyurl.com", "om.ly", "linkbee.com", "Yep.it", "posted.at", "xrl.us", "metamark.net", "sn.im", "hurl.ws", "eepurl.com", "idek.net", "urlpire.com", "chilp.it", "moourl.com", "snurl.com", "xr.com", "lin.cr", "EasyURI.com", "zz.gd", "ur1.ca", "URL.ie", "adjix.com", "twurl.cc", "s7y.us", "EasyURL.net", "atu.ca", "sp2.ro", "Profile.to", "ub0.cc", "minurl.fr", "cort.as", "fire.to", "2tu.us", "twiturl.de", "to.ly", "BurnURL.com", "nn.nf", "clck.ru", "notlong.com", "thrdl.es", "spedr.com", "vl.am", "miniurl.com", "virl.com", "PiURL.com", "1url.com", "gri.ms", "tr.my", "Sharein.com", "urlzen.com", "fon.gs", "Shrinkify.com", "ri.ms", "b23.ru", "Fly2.ws", "xrl.in", "Fhurl.com", "wipi.es", "korta.nu", "shortna.me", "fa.b", "WapURL.co.uk", "urlcut.com", "6url.com", "abbrr.com", "SimURL.com", "klck.me", "x.se", "2big.at", "url.co.uk", "ewerl.com", "inreply.to", "TightURL.com", "a.gg", "tinytw.it", "zi.pe", "riz.gd", "hex.io", "fwd4.me", "bacn.me", "shrt.st", "ln-s.ru", "tiny.pl", "o-x.fr", "StartURL.com", "jijr.com", "shorl.com", "icanhaz.com", "updating.me", "kissa.be", "hellotxt.com", "pnt.me", "nsfw.in", "xurl.jp", "yweb.com", "urlkiss.com", "QLNK.net", "w3t.org", "lt.tl", "twirl.at", "zipmyurl.com", "urlot.com", "a.nf", "hurl.me", "URLHawk.com", "Tnij.org", "4url.cc", "firsturl.de", "Hurl.it", "sturly.com", "shrinkster.com", "ln-s.net", "go2cut.com", "liip.to", "shw.me", "XeeURL.com", "liltext.com", "lnk.gd", "xzb.cc", "linkbun.ch", "href.in", "urlbrief.com", "2ya.com", "safe.mn", "shrunkin.com", "bloat.me", "krunchd.com", "minilien.com", "ShortLinks.co.uk", "qicute.com", "rb6.me", "urlx.ie", "pd.am", "go2.me", "tinyarro.ws", "tinyvid.io", "lurl.no", "ru.ly", "lru.jp", "rickroll.it", "togoto.us", "ClickMeter.com", "hugeurl.com", "tinyuri.ca", "shrten.com", "shorturl.com", "Quip-Art.com", "urlao.com", "a2a.me", "tcrn.ch", "goshrink.com", "DecentURL.com", "decenturl.com", "zi.ma", "1link.in", "sharetabs.com", "shoturl.us", "fff.to", "hover.com", "lnk.in", "jmp2.net", "dy.fi", "urlcover.com", "2pl.us", "tweetburner.com", "u6e.de", "xaddr.com", "gl.am", "dfl8.me", "go.9nl.com", "gurl.es", "C-O.IN", "TraceURL.com", "liurl.cn", "MyURL.in", "urlenco.de", "ne1.net", "buk.me", "rsmonkey.com", "cuturl.com", "turo.us", "sqrl.it", "iterasi.net", "tiny123.com", "EsyURL.com", "adf.ly", "urlx.org", "IsCool.net", "twitterpan.com", "GoWat.ch", "poprl.com", "njx.me", "shrinkify.info"],
    "referrerSites": ["3c-bap.web.de", "3c.web.de", "3c.gmx.net"],
    "publicSuffixList": {}
  });
})


chrome.runtime.onStartup.addListener(function () {
  readInBlacklist();
});


function readInBlacklist() {
  var dangerousDomains = [];
  var ctcBlacklistRequest = new XMLHttpRequest();
  ctcBlacklistRequest.open('GET', 'https://blacklist.cyberthreatcoalition.org/vetted/domain.txt', true);
  ctcBlacklistRequest.send(null);
  ctcBlacklistRequest.onreadystatechange = function () {
    if (ctcBlacklistRequest.readyState === 4 && ctcBlacklistRequest.status === 200) {
      var contentType = ctcBlacklistRequest.getResponseHeader('Content-Type');
      if (contentType.indexOf("plain") !== 1) {
        var extractedLines = ctcBlacklistRequest.responseText.split('\n');
        for (var i = 1; i < extractedLines.length - 1; i++) {
          dangerousDomains.push(extractedLines[i]);
        }
        dangerousDomains.push("jonas-pfrang.com");
        chrome.storage.sync.set({
          'dangerousDomains': dangerousDomains,
        })
      }
    }
  }
}

function showTutorial() {
  chrome.tabs.create({
    url: chrome.runtime.getURL('tutorial.html')
  });
};

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    showTutorial();
    readInBlacklist();
  }
});

loc = "";
works = false;




function sendEmail() {
  var emailUrl = 'mailto:addons@secuso.org?subject='
    + encodeURIComponent("Error with TORPEDO Webextension")
    + "&body="
    + encodeURIComponent("Mail panel could not be found in page: " + loc);
  chrome.tabs.create({ url: emailUrl });
}

function getStatus() {
  return { "works": works, "location": loc };
}

// enable page action only on email pages
chrome.tabs.onUpdated.addListener(function (tabId, status, info) {
  var manifest = chrome.runtime.getManifest();
  var websites = manifest.content_scripts[0].matches;
  var showIcon = false;
  for (var i = 0; i < websites.length; i++) {
    if (info.url.match(websites[i]) != null) showIcon = true;
  }
  if (showIcon) {
    //readInBlacklist();
    chrome.pageAction.show(tabId);
  }
});

// message passing with content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.name) {
    case "redirect":
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
          sendResponse(xhttp.responseURL);
        }
      };
      xhttp.open('GET', request.url, true);
      xhttp.send(null);
      return true;
      break;
    case "TLD":
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
          sendResponse(xhttp.response);
        }
      };
      xhttp.open('GET', "https://publicsuffix.org/list/public_suffix_list.dat", true);
      xhttp.send(null);
      return true;
      break;
    case "error":
      loc = request.location;
      works = false;
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        try {
          chrome.pageAction.setIcon({ tabId: tabs[0].id, path: { "38": "img/error38.png" } });
        } catch (e) { }
      });
      break;
    case "ok":
      loc = request.location;
      works = true;
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        try {
          chrome.pageAction.setIcon({ tabId: tabs[0].id, path: { "38": "img/icon38.png" } });
        } catch (e) { }
      });
      break;
    case "settings":
      chrome.runtime.openOptionsPage();
      break;
    case "tutorial":
      showTutorial();
      break;
    case "google":
      var website = "http://google.de/#q=" + request.url;
      chrome.tabs.create({
        url: website
      });
      break;
    case "open":
      chrome.tabs.create({
        url: request.url
      });
      break;
    case "close":
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.remove(tabs[0].id, function () { });
      });
      break;
  }
});
