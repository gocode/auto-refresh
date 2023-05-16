# auto-refresh
Detect page modification and refresh in the browser

This is a Chrome extension to detect some page modifications during developpement and reload it in this case.

## Installation

Auto-update the current page by checking the modifications of the page contents.
```
<meta data-autoupdate="">
```

Auto-update the current page by checking the modifications of another page contents.
```
<meta data-autoupdate="https://www.example.com/mypage-to-check.php">
```

This meta attribute works too :
```
<meta data-autorefresh="">
```
