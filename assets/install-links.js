/*
  Install tracking for the link-in-bio pages (ig/ and x/).

  Each page sets its own source on <html data-source="instagram">. That is the
  campaign name, and it never changes: the stores hide campaigns with few
  downloads, so a name that changed every week split small numbers until
  nothing showed. Add ?p=<post id> to a link to tag one post (utm_content).

  - Google Play: install referrer, visible in Play Console → Acquisition.
  - App Store: campaign links need the provider token (pt) from App Store
    Connect → App Analytics → Acquisition → Campaigns. Without it the link
    still works but isn't counted. App Store campaigns can't show the post.
*/
(function () {
  var APP_STORE_PT = '128411667'; // App Store Connect provider token (from a campaign link's pt=)
  var source = document.documentElement.getAttribute('data-source');
  var post = (new URLSearchParams(location.search).get('p') || 'bio').replace(/[^\w-]/g, '').slice(0, 40) || 'bio';
  var android = document.getElementById('android');
  var ios = document.getElementById('ios');

  if (source) {
    var referrer = 'utm_source=' + source + '&utm_medium=social&utm_campaign=' + source + '&utm_content=' + post;
    android.href = 'https://play.google.com/store/apps/details?id=com.zenlot.app&referrer=' + encodeURIComponent(referrer);
    if (APP_STORE_PT) {
      ios.href = 'https://apps.apple.com/app/apple-store/id6759946394?pt=' + APP_STORE_PT + '&ct=' + source + '&mt=8';
    }
  }

  // Put the visitor's own store first.
  var ua = navigator.userAgent || '';
  var first = /android/i.test(ua) ? android : /iphone|ipad|ipod|macintosh/i.test(ua) ? ios : null;
  if (first) {
    first.classList.add('primary');
    first.parentNode.insertBefore(first, first.parentNode.firstChild);
  }
})();
