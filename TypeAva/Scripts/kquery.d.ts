


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>typescript-node-definitions/jquery.d.ts at master · soywiz/typescript-node-definitions</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe117-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="47E3B04E:124F:8D6FF5A:52453C5A" name="octolytics-dimension-request_id" /><meta content="5548009" name="octolytics-actor-id" /><meta content="dwulive" name="octolytics-actor-login" /><meta content="6ac670c6341481f3a85f3ee716f9372c99d966aa96525b55b0c63b48388b587b" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="NBJbCeHD+LVYI8rpgoNGrvgv30LjfBWSqxkDEZypLfc=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-4269dde5662ee83eed92c6336fc57476d643870b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-546255f1b8702b827f9dba35e9fd3259aac96aef.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-4e5aeedcc7a86dcff8294cb84644a333b46202a2.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-4a1bc5d9d03b01e7271872cc3010ed457a5b57af.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="dbb8e6a31109e467cc5a10e3c2621ef2">

        <link data-pjax-transient rel='permalink' href='/soywiz/typescript-node-definitions/blob/a005ca2aaa359ac94a193275a2a7e2af543e54d9/jquery.d.ts'>
  <meta property="og:title" content="typescript-node-definitions"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/soywiz/typescript-node-definitions"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="typescript-node-definitions - TypeScript&#39;s typings for some popular node.js modules"/>

  <meta name="description" content="typescript-node-definitions - TypeScript&#39;s typings for some popular node.js modules" />

  <meta content="570848" name="octolytics-dimension-user_id" /><meta content="soywiz" name="octolytics-dimension-user_login" /><meta content="6069843" name="octolytics-dimension-repository_id" /><meta content="soywiz/typescript-node-definitions" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6069843" name="octolytics-dimension-repository_network_root_id" /><meta content="soywiz/typescript-node-definitions" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/soywiz/typescript-node-definitions/commits/master.atom" rel="alternate" title="Recent Commits to typescript-node-definitions:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public  page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="dwulive"
      data-repo="soywiz/typescript-node-definitions"
      data-branch="master"
      data-sha="32141a1b1396e532186a25ccea8d77639b10f38c"
  >

    <input type="hidden" name="nwo" value="soywiz/typescript-node-definitions" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/dwulive" class="name">
        <img height="20" src="https://1.gravatar.com/avatar/28880b6da1f63d9125b9048cf772021b?d=https%3A%2F%2Fidenticons.github.com%2F6edcb70b2956dcc11e8c7c2cf96aa0c5.png&amp;s=140" width="20" /> dwulive
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="soywiz/typescript-node-definitions">This repository</span>
    </li>
    <li>
      <a href="/soywiz/typescript-node-definitions/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="NBJbCeHD+LVYI8rpgoNGrvgv30LjfBWSqxkDEZypLfc=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="6069843" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/soywiz/typescript-node-definitions/watchers">
          25
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/soywiz/typescript-node-definitions/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/soywiz/typescript-node-definitions/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/soywiz/typescript-node-definitions/stargazers">103</a>
</div>

  </li>


        <li>
          <a href="/soywiz/typescript-node-definitions/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/soywiz/typescript-node-definitions/network" class="social-count">55</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/soywiz" class="url fn" itemprop="url" rel="author"><span itemprop="title">soywiz</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/soywiz/typescript-node-definitions" class="js-current-repository js-repo-home-link">typescript-node-definitions</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/soywiz/typescript-node-definitions" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /soywiz/typescript-node-definitions">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/soywiz/typescript-node-definitions/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /soywiz/typescript-node-definitions/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>4</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/soywiz/typescript-node-definitions/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /soywiz/typescript-node-definitions/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/soywiz/typescript-node-definitions/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /soywiz/typescript-node-definitions/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/soywiz/typescript-node-definitions/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /soywiz/typescript-node-definitions/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/soywiz/typescript-node-definitions/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /soywiz/typescript-node-definitions/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/soywiz/typescript-node-definitions/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /soywiz/typescript-node-definitions/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/soywiz/typescript-node-definitions.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/soywiz/typescript-node-definitions.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:soywiz/typescript-node-definitions.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:soywiz/typescript-node-definitions.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/soywiz/typescript-node-definitions" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/soywiz/typescript-node-definitions" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/soywiz/typescript-node-definitions" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

              <a href="/soywiz/typescript-node-definitions/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:5e56f449133ed6d50a455ff3b938ea01 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/soywiz/typescript-node-definitions/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/soywiz/typescript-node-definitions/blob/master/jquery.d.ts"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/soywiz/typescript-node-definitions/tree/0.8/jquery.d.ts"
                 data-name="0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.8">0.8</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/soywiz/typescript-node-definitions" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">typescript-node-definitions</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.d.ts</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.d.ts" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/soywiz/typescript-node-definitions/contributors/master/jquery.d.ts">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>806 lines (611 sloc)</span>
        <span>25.631 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/soywiz/typescript-node-definitions/edit/master/jquery.d.ts"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/soywiz/typescript-node-definitions/raw/master/jquery.d.ts" class="button minibutton " id="raw-url">Raw</a>
            <a href="/soywiz/typescript-node-definitions/blame/master/jquery.d.ts" class="button minibutton ">Blame</a>
          <a href="/soywiz/typescript-node-definitions/commits/master/jquery.d.ts" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/soywiz/typescript-node-definitions/delete/master/jquery.d.ts"
               title="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-typescript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'>/* *****************************************************************************</div><div class='line' id='LC2'>Copyright (c) Microsoft Corporation. All rights reserved.</div><div class='line' id='LC3'>Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); you may not use</div><div class='line' id='LC4'>this file except in compliance with the License. You may obtain a copy of the</div><div class='line' id='LC5'>License at http://www.apache.org/licenses/LICENSE-2.0</div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'>THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY</div><div class='line' id='LC8'>KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED</div><div class='line' id='LC9'>WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,</div><div class='line' id='LC10'>MERCHANTABLITY OR NON-INFRINGEMENT.</div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>See the Apache Version 2.0 License for specific language governing permissions</div><div class='line' id='LC13'>and limitations under the License.</div><div class='line' id='LC14'>***************************************************************************** */</div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>// Typing for the jQuery library, version 1.9.x</div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>/*</div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;Interface for the AJAX setting that will configure the AJAX request</div><div class='line' id='LC20'>*/</div><div class='line' id='LC21'>interface JQueryAjaxSettings {</div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;accepts?: any;</div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;async?: boolean;</div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;beforeSend?(jqXHR: JQueryXHR, settings: JQueryAjaxSettings);</div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;cache?: boolean;</div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;complete?(jqXHR: JQueryXHR, textStatus: string);</div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;contents?: { [key: string]: any; };</div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;contentType?: string;</div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;context?: any;</div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;converters?: { [key: string]: any; };</div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;crossDomain?: boolean;</div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;data?: any;</div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;dataFilter?(data: any, ty: any): any;</div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;dataType?: string;</div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;error?(jqXHR: JQueryXHR, textStatus: string, errorThrow: string): any;</div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;global?: boolean;</div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;headers?: { [key: string]: any; };</div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;ifModified?: boolean;</div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;isLocal?: boolean;</div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;jsonp?: string;</div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;jsonpCallback?: any;</div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;mimeType?: string;</div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;password?: string;</div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;processData?: boolean;</div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;scriptCharset?: string;</div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;statusCode?: { [key: string]: any; };</div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;success?(data: any, textStatus: string, jqXHR: JQueryXHR);</div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;timeout?: number;</div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;traditional?: boolean;</div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;type?: string;</div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;url?: string;</div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;username?: string;</div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;xhr?: any;</div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;xhrFields?: { [key: string]: any; };</div><div class='line' id='LC55'>}</div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>/*</div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;Interface for the jqXHR object</div><div class='line' id='LC59'>*/</div><div class='line' id='LC60'>interface JQueryXHR extends XMLHttpRequest, JQueryPromise {</div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;overrideMimeType(mimeType: string);</div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;abort(statusText?: string): void;</div><div class='line' id='LC63'>}</div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>/*</div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;Interface for the JQuery callback</div><div class='line' id='LC67'>*/</div><div class='line' id='LC68'>interface JQueryCallback {</div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;add(...callbacks: any[]): any;</div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;disable(): any;</div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;empty(): any;</div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;fire(...arguments: any[]): any;</div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;fired(): boolean;</div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;fireWith(context: any, ...args: any[]): any;</div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;has(callback: any): boolean;</div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;lock(): any;</div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;locked(): boolean;</div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;remove(...callbacks: any[]): any;</div><div class='line' id='LC79'>}</div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>/*</div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;Interface for the JQuery promise, part of callbacks</div><div class='line' id='LC83'>*/</div><div class='line' id='LC84'>interface JQueryPromise {</div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;always(...alwaysCallbacks: any[]): JQueryPromise;</div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;done(...doneCallbacks: any[]): JQueryPromise;</div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;fail(...failCallbacks: any[]): JQueryPromise;</div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;progress(...progressCallbacks: any[]): JQueryPromise;</div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;state(): string;</div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;pipe(doneFilter?: (x: any) =&gt; any, failFilter?: (x: any) =&gt; any, progressFilter?: (x: any) =&gt; any): JQueryPromise;</div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;then(doneCallbacks: any, failCallbacks?: any, progressCallbacks?: any): JQueryPromise;</div><div class='line' id='LC92'>}</div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>/*</div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;Interface for the JQuery deferred, part of callbacks</div><div class='line' id='LC96'>*/</div><div class='line' id='LC97'>interface JQueryDeferred extends JQueryPromise {</div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;notify(...args: any[]): JQueryDeferred;</div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;notifyWith(context: any, ...args: any[]): JQueryDeferred;</div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;promise(target? ): JQueryPromise;</div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;reject(...args: any[]): JQueryDeferred;</div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;rejectWith(context:any, ...args: any[]): JQueryDeferred;</div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;resolve(...args: any[]): JQueryDeferred;</div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;resolveWith(context:any, ...args: any[]): JQueryDeferred;</div><div class='line' id='LC106'>}</div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>/*</div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;Interface of the JQuery extension of the W3C event object</div><div class='line' id='LC110'>*/</div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>interface BaseJQueryEventObject extends Event {</div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;data: any;</div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;delegateTarget: Element;</div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;isDefaultPrevented(): boolean;</div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;isImmediatePropogationStopped(): boolean;</div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;isPropogationStopped(): boolean;</div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;namespace: string;</div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;preventDefault(): any;</div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;relatedTarget: Element;</div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;result: any;</div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;stopImmediatePropagation();</div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;stopPropagation();</div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;pageX: number;</div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;pageY: number;</div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;which: number;</div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;metaKey: any;</div><div class='line' id='LC128'>}</div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>interface JQueryInputEventObject extends BaseJQueryEventObject</div><div class='line' id='LC131'>{</div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;altKey: boolean;</div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;ctrlKey: boolean;</div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;metaKey: boolean;</div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;shiftKey: boolean;</div><div class='line' id='LC136'>}</div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>interface JQueryMouseEventObject extends JQueryInputEventObject</div><div class='line' id='LC139'>{</div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;button: number;</div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;clientX: number;</div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;clientY: number;</div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;offsetX: number;</div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;offsetY: number;</div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;pageX: number;</div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;pageY: number;</div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;screenX: number;</div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;screenY: number;</div><div class='line' id='LC149'>}</div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>interface JQueryKeyEventObject extends JQueryInputEventObject</div><div class='line' id='LC152'>{</div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;char: any;</div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;charCode: number;</div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;key: any;</div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;keyCode: number;</div><div class='line' id='LC157'>}</div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject {</div><div class='line' id='LC160'>}</div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>/*</div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;Collection of properties of the current browser</div><div class='line' id='LC164'>*/</div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>interface JQuerySupport {</div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;ajax?: boolean;</div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;boxModel?: boolean;</div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;changeBubbles?: boolean;</div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;checkClone?: boolean;</div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;checkOn?: boolean;</div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;cors?: boolean;</div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;cssFloat?: boolean;</div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;hrefNormalized?: boolean;</div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;htmlSerialize?: boolean;</div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;leadingWhitespace?: boolean;</div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;noCloneChecked?: boolean;</div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;noCloneEvent?: boolean;</div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;opacity?: boolean;</div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;optDisabled?: boolean;</div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;optSelected?: boolean;</div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;scriptEval?(): boolean;</div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;style?: boolean;</div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;submitBubbles?: boolean;</div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;tbody?: boolean;</div><div class='line' id='LC186'>}</div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>interface JQueryParam {</div><div class='line' id='LC189'>&nbsp;&nbsp;(obj: any): string;</div><div class='line' id='LC190'>&nbsp;&nbsp;(obj: any, traditional: boolean): string;</div><div class='line' id='LC191'>}</div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>/*</div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;Static members of jQuery (those on $ and jQuery themselves)</div><div class='line' id='LC195'>*/</div><div class='line' id='LC196'>interface JQueryStatic {</div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;/****</div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AJAX</div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;*****/</div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;ajax(settings: JQueryAjaxSettings): JQueryXHR;</div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR;</div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxPrefilter(dataTypes: string, handler: (opts: any, originalOpts: any, jqXHR: JQueryXHR) =&gt; any): any;</div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxPrefilter(handler: (opts: any, originalOpts: any, jqXHR: JQueryXHR) =&gt; any): any;</div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxSettings: JQueryAjaxSettings;</div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxSetup();</div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxSetup(options: JQueryAjaxSettings);</div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;get(url: string, data?: any, success?: any, dataType?: any): JQueryXHR;</div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;getJSON(url: string, data?: any, success?: any): JQueryXHR;</div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;getScript(url: string, success?: any): JQueryXHR;</div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;param: JQueryParam;</div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;post(url: string, data?: any, success?: any, dataType?: any): JQueryXHR;</div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;/*********</div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CALLBACKS</div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;**********/</div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;Callbacks(flags?: string): JQueryCallback;</div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;/****</div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CORE</div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;*****/</div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;holdReady(hold: boolean): any;</div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;(selector: string, context?: any): JQuery;</div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;(element: Element): JQuery;</div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;(object: { }): JQuery;</div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;(elementArray: Element[]): JQuery;</div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;(object: JQuery): JQuery;</div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;(func: Function): JQuery;</div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;(array: any[]): JQuery;</div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;(): JQuery;</div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;noConflict(removeAll?: boolean): Object;</div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;when(...deferreds: any[]): JQueryPromise;</div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;/***</div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS</div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;****/</div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;css(e: any, propertyName: string, value?: any);</div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;css(e: any, propertyName: any, value?: any);</div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;cssHooks: { [key: string]: any; };</div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;cssNumber: any;</div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;/****</div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATA</div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;*****/</div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;data(element: Element, key: string, value: any): any;</div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;data(element: Element, key: string): any;</div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;data(element: Element): any;</div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;dequeue(element: Element, queueName?: string): any;</div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;hasData(element: Element): boolean;</div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;queue(element: Element, queueName?: string): any[];</div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;queue(element: Element, queueName: string, newQueueOrCallback: any): JQuery;</div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;removeData(element: Element, name?: string): JQuery;</div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;/*******</div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EFFECTS</div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;********/</div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;fx: { tick: () =&gt; void; interval: number; stop: () =&gt; void; speeds: { slow: number; fast: number; }; off: boolean; step: any; };</div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;/******</div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENTS</div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;*******/</div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;proxy(fn : (...args: any[]) =&gt; any, context: any, ...args: any[]): any;</div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;proxy(context: any, name: string, ...args: any[]): any;</div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;Deferred: {</div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(fn?: (d: JQueryDeferred) =&gt; any): JQueryDeferred;</div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new(fn?: (d: JQueryDeferred) =&gt; any): JQueryDeferred;</div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;};</div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;Event(name:string, eventProperties?:any): JQueryEventObject;</div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;/*********</div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INTERNALS</div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;**********/</div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;error(message: any);</div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;/*************</div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MISCELLANEOUS</div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;**************/</div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;expr: any;</div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;fn: any;  //TODO: Decide how we want to type this</div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;isReady: boolean;</div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;/**********</div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROPERTIES</div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;***********/</div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;support: JQuerySupport;</div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;/*********</div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UTILITIES</div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;**********/</div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;contains(container: Element, contained: Element): boolean;</div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;each(collection: any, callback: (indexInArray: any, valueOfElement: any) =&gt; any): any;</div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;each(collection: any[], callback: (indexInArray: any, valueOfElement: any) =&gt; any): any;</div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;each(collection: JQuery, callback: (indexInArray: number, valueOfElement: HTMLElement) =&gt; any): any;</div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;each(collection: string[], callback: (indexInArray: number, valueOfElement: string) =&gt; any): any;</div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;each(collection: number[], callback: (indexInArray: number, valueOfElement: number) =&gt; any): any;</div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;extend(target: any, ...objs: any[]): Object;</div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;extend(deep: boolean, target: any, ...objs: any[]): Object;</div><div class='line' id='LC313'><br/></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;globalEval(code: string): any;</div><div class='line' id='LC315'><br/></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;grep(array: any[], func: any, invert?: boolean): any[];</div><div class='line' id='LC317'><br/></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;inArray(value: any, array: any[], fromIndex?: number): number;</div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;isArray(obj: any): boolean;</div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;isEmptyObject(obj: any): boolean;</div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;isFunction(obj: any): boolean;</div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;isNumeric(value: any): boolean;</div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;isPlainObject(obj: any): boolean;</div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;isWindow(obj: any): boolean;</div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;isXMLDoc(node: Node): boolean;</div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;makeArray(obj: any): any[];</div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;map(array: any[], callback: (elementOfArray: any, indexInArray: any) =&gt;any): any[];</div><div class='line' id='LC331'>	map(array: any, callback: (elementOfArray: any, indexInArray: any) =&gt;any): any;</div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;merge(first: any[], second: any[]): any[];</div><div class='line' id='LC334'><br/></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;noop(): any;</div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;now(): number;</div><div class='line' id='LC338'><br/></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;parseJSON(json: string): Object;</div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;//FIXME: This should return an XMLDocument</div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;parseXML(data: string): any;</div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;queue(element: Element, queueName: string, newQueue: any[]): JQuery;</div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;trim(str: string): string;</div><div class='line' id='LC347'><br/></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;type(obj: any): string;</div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;unique(arr: any[]): any[];</div><div class='line' id='LC351'>}</div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'>/*</div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;The jQuery instance members</div><div class='line' id='LC355'>*/</div><div class='line' id='LC356'>interface JQuery {</div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;/****</div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AJAX</div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;*****/</div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxComplete(handler: any): JQuery;</div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxError(handler: (event: any, jqXHR: any, settings: any, exception: any) =&gt; any): JQuery;</div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxSend(handler: (event: any, jqXHR: any, settings: any, exception: any) =&gt; any): JQuery;</div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxStart(handler: () =&gt; any): JQuery;</div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxStop(handler: () =&gt; any): JQuery;</div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;ajaxSuccess(handler: (event: any, jqXHR: any, settings: any, exception: any) =&gt; any): JQuery;</div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;load(url: string, data?: any, complete?: any): JQuery;</div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;serialize(): string;</div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;serializeArray(): any[];</div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;/**********</div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ATTRIBUTES</div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;***********/</div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;addClass(classNames: string): JQuery;</div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;addClass(func: (index: any, currentClass: any) =&gt; string): JQuery;</div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;// http://api.jquery.com/addBack/</div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;addBack(selector?: string): JQuery;</div><div class='line' id='LC380'><br/></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;attr(attributeName: string): string;</div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;attr(attributeName: string, value: any): JQuery;</div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;attr(map: { [key: string]: any; }): JQuery;</div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;attr(attributeName: string, func: (index: any, attr: any) =&gt; any): JQuery;</div><div class='line' id='LC386'><br/></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;hasClass(className: string): boolean;</div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;html(): string;</div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;html(htmlString: string): JQuery;</div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;html(htmlContent: (index: number, oldhtml: string) =&gt; string): JQuery;</div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;prop(propertyName: string): any;</div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;prop(propertyName: string, value: any): JQuery;</div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;prop(map: any): JQuery;</div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;prop(propertyName: string, func: (index: any, oldPropertyValue: any) =&gt; any): JQuery;</div><div class='line' id='LC397'><br/></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;removeAttr(attributeName: any): JQuery;</div><div class='line' id='LC399'><br/></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;removeClass(className?: any): JQuery;</div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;removeClass(func: (index: any, cls: any) =&gt; any): JQuery;</div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;removeProp(propertyName: any): JQuery;</div><div class='line' id='LC404'><br/></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;toggleClass(className: any, swtch?: boolean): JQuery;</div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;toggleClass(swtch?: boolean): JQuery;</div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;toggleClass(func: (index: any, cls: any, swtch: any) =&gt; any): JQuery;</div><div class='line' id='LC408'><br/></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;val(): any;</div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;val(value: string[]): JQuery;</div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;val(value: string): JQuery;</div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;val(value: number): JQuery;</div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;val(func: (index: any, value: any) =&gt; any): JQuery;</div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;/***</div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS</div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;****/</div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;css(propertyName: string): string;</div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;css(propertyNames: string[]): string;</div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;css(properties: any): JQuery;</div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;css(propertyName: string, value: any): JQuery;</div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;css(propertyName: any, value: any): JQuery;</div><div class='line' id='LC423'><br/></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;height(): number;</div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;height(value: number): JQuery;</div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;height(value: string): JQuery;</div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;height(func: (index: any, height: any) =&gt; any): JQuery;</div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;innerHeight(): number;</div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;innerWidth(): number;</div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;offset(): { left: number; top: number; };</div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;offset(coordinates: any): JQuery;</div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;offset(func: (index: any, coords: any) =&gt; any): JQuery;</div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;outerHeight(includeMargin?: boolean): number;</div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;outerWidth(includeMargin?: boolean): number;</div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;position(): { top: number; left: number; };</div><div class='line' id='LC440'><br/></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;scrollLeft(): number;</div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;scrollLeft(value: number): JQuery;</div><div class='line' id='LC443'><br/></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;scrollTop(): number;</div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;scrollTop(value: number): JQuery;</div><div class='line' id='LC446'><br/></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;width(): number;</div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;width(value: number): JQuery;</div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;width(value: string): JQuery;</div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;width(func: (index: any, height: any) =&gt; any): JQuery;</div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;/****</div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATA</div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;*****/</div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;clearQueue(queueName?: string): JQuery;</div><div class='line' id='LC456'><br/></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;data(key: string, value: any): JQuery;</div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;data(obj: { [key: string]: any; }): JQuery;</div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;data(key?: string): any;</div><div class='line' id='LC460'><br/></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;dequeue(queueName?: string): JQuery;</div><div class='line' id='LC462'><br/></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;removeData(nameOrList?: any): JQuery;</div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;/********</div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEFERRED</div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;*********/</div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;promise(type?: any, target?: any): JQueryPromise;</div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;/*******</div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EFFECTS</div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;********/</div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;animate(properties: any, duration?: any, complete?: Function): JQuery;</div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;animate(properties: any, duration?: any, easing?: string, complete?: Function): JQuery;</div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;animate(properties: any, options: { duration?: any; easing?: string; complete?: Function; step?: Function; queue?: boolean; specialEasing?: any; });</div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;delay(duration: number, queueName?: string): JQuery;</div><div class='line' id='LC478'><br/></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;fadeIn(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;fadeIn(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;fadeOut(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;fadeOut(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;fadeTo(duration: any, opacity: number, callback?: any): JQuery;</div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;fadeTo(duration: any, opacity: number, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC487'><br/></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;fadeToggle(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;fadeToggle(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC490'><br/></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;finish(): JQuery;</div><div class='line' id='LC492'><br/></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;hide(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;hide(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;show(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;show(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC498'><br/></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;slideDown(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;slideDown(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC501'><br/></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;slideToggle(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;slideToggle(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC504'><br/></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;slideUp(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;slideUp(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery;</div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;stop(queue?:any, clearQueue?: boolean, jumpToEnd?: boolean): JQuery;</div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;toggle(duration?: any, callback?: any): JQuery;</div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;toggle(duration?: any, easing?: string, callback?: any): JQuery;</div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;toggle(showOrHide: boolean): JQuery;</div><div class='line' id='LC514'><br/></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;/******</div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENTS</div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;*******/</div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;bind(eventType: string, eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;bind(eventType: string, eventData: any, preventBubble:boolean): JQuery;</div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;bind(eventType: string, preventBubble:boolean): JQuery;</div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;bind(...events: any[]);</div><div class='line' id='LC522'><br/></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;blur(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;blur(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC525'><br/></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;change(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;change(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;click(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;click(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC531'><br/></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;dblclick(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;dblclick(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC534'><br/></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;delegate(selector: any, eventType: string, handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC536'><br/></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;focus(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;focus(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;focusin(eventData: any, handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;focusin(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC542'><br/></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;focusout(eventData: any, handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;focusout(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC545'><br/></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;hover(handlerIn: (eventObject: JQueryEventObject) =&gt; any, handlerOut: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;hover(handlerInOut: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;keydown(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) =&gt; any): JQuery;</div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;keydown(handler: (eventObject: JQueryKeyEventObject) =&gt; any): JQuery;</div><div class='line' id='LC551'><br/></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;keypress(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) =&gt; any): JQuery;</div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;keypress(handler: (eventObject: JQueryKeyEventObject) =&gt; any): JQuery;</div><div class='line' id='LC554'><br/></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;keyup(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) =&gt; any): JQuery;</div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;keyup(handler: (eventObject: JQueryKeyEventObject) =&gt; any): JQuery;</div><div class='line' id='LC557'><br/></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;load(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;load(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC560'><br/></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;mousedown(): JQuery;</div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;mousedown(eventData: any, handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;mousedown(handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC564'><br/></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;mouseevent(eventData: any, handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;mouseevent(handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC567'><br/></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;mouseenter(): JQuery;</div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;mouseenter(eventData: any, handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;mouseenter(handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC571'><br/></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;mouseleave(): JQuery;</div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;mouseleave(eventData: any, handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;mouseleave(handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC575'><br/></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;mousemove(): JQuery;</div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;mousemove(eventData: any, handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;mousemove(handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC579'><br/></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;mouseout(): JQuery;</div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;mouseout(eventData: any, handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC582'>&nbsp;&nbsp;&nbsp;&nbsp;mouseout(handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC583'><br/></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;mouseover(): JQuery;</div><div class='line' id='LC585'>&nbsp;&nbsp;&nbsp;&nbsp;mouseover(eventData: any, handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;mouseover(handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC587'><br/></div><div class='line' id='LC588'>&nbsp;&nbsp;&nbsp;&nbsp;mouseup(): JQuery;</div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;mouseup(eventData: any, handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;mouseup(handler: (eventObject: JQueryMouseEventObject) =&gt; any): JQuery;</div><div class='line' id='LC591'><br/></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;off(events?: string, selector?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;off(eventsMap: { [key: string]: any; }, selector?: any): JQuery;</div><div class='line' id='LC594'><br/></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;on(events: string, selector?: any, data?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;on(events: string, selector?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;on(eventsMap: { [key: string]: any; }, selector?: any, data?: any): JQuery;</div><div class='line' id='LC598'><br/></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;one(events: string, selector?: any, data?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC600'>&nbsp;&nbsp;&nbsp;&nbsp;one(eventsMap: { [key: string]: any; }, selector?: any, data?: any): JQuery;</div><div class='line' id='LC601'><br/></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;ready(handler: any): JQuery;</div><div class='line' id='LC603'><br/></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;resize(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;resize(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC606'><br/></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;scroll(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;scroll(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC609'><br/></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;select(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;select(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC612'><br/></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;submit(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;submit(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC615'><br/></div><div class='line' id='LC616'>&nbsp;&nbsp;&nbsp;&nbsp;trigger(eventType: string, ...extraParameters: any[]): JQuery;</div><div class='line' id='LC617'>&nbsp;&nbsp;&nbsp;&nbsp;trigger(event: JQueryEventObject): JQuery;</div><div class='line' id='LC618'><br/></div><div class='line' id='LC619'>&nbsp;&nbsp;&nbsp;&nbsp;triggerHandler(eventType: string, ...extraParameters: any[]): Object;</div><div class='line' id='LC620'><br/></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;unbind(eventType: string, fls: boolean): JQuery;</div><div class='line' id='LC623'>&nbsp;&nbsp;&nbsp;&nbsp;unbind(evt: any): JQuery;</div><div class='line' id='LC624'><br/></div><div class='line' id='LC625'>&nbsp;&nbsp;&nbsp;&nbsp;undelegate(): JQuery;</div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;undelegate(selector: any, eventType: string, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC627'>&nbsp;&nbsp;&nbsp;&nbsp;undelegate(selector: any, events: any): JQuery;</div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;undelegate(namespace: string): JQuery;</div><div class='line' id='LC629'><br/></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;unload(eventData?: any, handler?: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;unload(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC632'><br/></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;/*********</div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INTERNALS</div><div class='line' id='LC635'>&nbsp;&nbsp;&nbsp;&nbsp;**********/</div><div class='line' id='LC636'><br/></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;context: Element;</div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;jquery: string;</div><div class='line' id='LC639'><br/></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;error(handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;error(eventData: any, handler: (eventObject: JQueryEventObject) =&gt; any): JQuery;</div><div class='line' id='LC642'><br/></div><div class='line' id='LC643'>&nbsp;&nbsp;&nbsp;&nbsp;pushStack(elements: any[]): JQuery;</div><div class='line' id='LC644'>&nbsp;&nbsp;&nbsp;&nbsp;pushStack(elements: any[], name: any, arguments: any): JQuery;</div><div class='line' id='LC645'><br/></div><div class='line' id='LC646'>&nbsp;&nbsp;&nbsp;&nbsp;/************</div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MANIPULATION</div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;*************/</div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;after(...content: any[]): JQuery;</div><div class='line' id='LC650'>&nbsp;&nbsp;&nbsp;&nbsp;after(func: (index: any) =&gt; any);</div><div class='line' id='LC651'><br/></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;append(...content: any[]): JQuery;</div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;append(func: (index: any, html: any) =&gt; any);</div><div class='line' id='LC654'><br/></div><div class='line' id='LC655'>&nbsp;&nbsp;&nbsp;&nbsp;appendTo(target: any): JQuery;</div><div class='line' id='LC656'><br/></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;before(...content: any[]): JQuery;</div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;before(func: (index: any) =&gt; any);</div><div class='line' id='LC659'><br/></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): JQuery;</div><div class='line' id='LC661'><br/></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;detach(selector?: any): JQuery;</div><div class='line' id='LC663'><br/></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;empty(): JQuery;</div><div class='line' id='LC665'><br/></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;insertAfter(target: any): JQuery;</div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;insertBefore(target: any): JQuery;</div><div class='line' id='LC668'><br/></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;prepend(...content: any[]): JQuery;</div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;prepend(func: (index: any, html: any) =&gt;any): JQuery;</div><div class='line' id='LC671'><br/></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;prependTo(target: any): JQuery;</div><div class='line' id='LC673'><br/></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;remove(selector?: any): JQuery;</div><div class='line' id='LC675'><br/></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;replaceAll(target: any): JQuery;</div><div class='line' id='LC677'><br/></div><div class='line' id='LC678'>&nbsp;&nbsp;&nbsp;&nbsp;replaceWith(func: any): JQuery;</div><div class='line' id='LC679'><br/></div><div class='line' id='LC680'>&nbsp;&nbsp;&nbsp;&nbsp;text(): string;</div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;text(textString: any): JQuery;</div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;text(textString: (index: number, text: string) =&gt; string): JQuery;</div><div class='line' id='LC683'><br/></div><div class='line' id='LC684'>&nbsp;&nbsp;&nbsp;&nbsp;toArray(): any[];</div><div class='line' id='LC685'><br/></div><div class='line' id='LC686'>&nbsp;&nbsp;&nbsp;&nbsp;unwrap(): JQuery;</div><div class='line' id='LC687'><br/></div><div class='line' id='LC688'>&nbsp;&nbsp;&nbsp;&nbsp;wrap(wrappingElement: any): JQuery;</div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;wrap(func: (index: any) =&gt;any): JQuery;</div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;wrapAll(wrappingElement: any): JQuery;</div><div class='line' id='LC692'><br/></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;wrapInner(wrappingElement: any): JQuery;</div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;wrapInner(func: (index: any) =&gt;any): JQuery;</div><div class='line' id='LC695'><br/></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;/*************</div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MISCELLANEOUS</div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;**************/</div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;each(func: (index: any, elem: Element) =&gt; any): JQuery;</div><div class='line' id='LC700'><br/></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;get(index?: number): any;</div><div class='line' id='LC702'><br/></div><div class='line' id='LC703'>&nbsp;&nbsp;&nbsp;&nbsp;index(): number;</div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;index(selector: string): number;</div><div class='line' id='LC705'>&nbsp;&nbsp;&nbsp;&nbsp;index(element: any): number;</div><div class='line' id='LC706'><br/></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;/**********</div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROPERTIES</div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;***********/</div><div class='line' id='LC710'>&nbsp;&nbsp;&nbsp;&nbsp;length: number;</div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;selector: string;</div><div class='line' id='LC712'>&nbsp;&nbsp;&nbsp;&nbsp;[x: string]: HTMLElement;</div><div class='line' id='LC713'>&nbsp;&nbsp;&nbsp;&nbsp;[x: number]: HTMLElement;</div><div class='line' id='LC714'><br/></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;/**********</div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRAVERSING</div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;***********/</div><div class='line' id='LC718'>&nbsp;&nbsp;&nbsp;&nbsp;add(selector: string, context?: any): JQuery;</div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;add(...elements: any[]): JQuery;</div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;add(html: string): JQuery;</div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;add(obj: JQuery): JQuery;</div><div class='line' id='LC722'><br/></div><div class='line' id='LC723'>&nbsp;&nbsp;&nbsp;&nbsp;children(selector?: any): JQuery;</div><div class='line' id='LC724'><br/></div><div class='line' id='LC725'>&nbsp;&nbsp;&nbsp;&nbsp;closest(selector: string): JQuery;</div><div class='line' id='LC726'>&nbsp;&nbsp;&nbsp;&nbsp;closest(selector: string, context?: Element): JQuery;</div><div class='line' id='LC727'>&nbsp;&nbsp;&nbsp;&nbsp;closest(obj: JQuery): JQuery;</div><div class='line' id='LC728'>&nbsp;&nbsp;&nbsp;&nbsp;closest(element: any): JQuery;</div><div class='line' id='LC729'>&nbsp;&nbsp;&nbsp;&nbsp;closest(selectors: any, context?: Element): any[];</div><div class='line' id='LC730'><br/></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;contents(): JQuery;</div><div class='line' id='LC732'><br/></div><div class='line' id='LC733'>&nbsp;&nbsp;&nbsp;&nbsp;end(): JQuery;</div><div class='line' id='LC734'><br/></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;eq(index: number): JQuery;</div><div class='line' id='LC736'><br/></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;filter(selector: string): JQuery;</div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;filter(func: (index: any) =&gt;any): JQuery;</div><div class='line' id='LC739'>&nbsp;&nbsp;&nbsp;&nbsp;filter(element: any): JQuery;</div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;filter(obj: JQuery): JQuery;</div><div class='line' id='LC741'><br/></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;find(selector: string): JQuery;</div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;find(element: any): JQuery;</div><div class='line' id='LC744'>&nbsp;&nbsp;&nbsp;&nbsp;find(obj: JQuery): JQuery;</div><div class='line' id='LC745'><br/></div><div class='line' id='LC746'>&nbsp;&nbsp;&nbsp;&nbsp;first(): JQuery;</div><div class='line' id='LC747'><br/></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;has(selector: string): JQuery;</div><div class='line' id='LC749'>&nbsp;&nbsp;&nbsp;&nbsp;has(contained: Element): JQuery;</div><div class='line' id='LC750'><br/></div><div class='line' id='LC751'>&nbsp;&nbsp;&nbsp;&nbsp;is(selector: string): boolean;</div><div class='line' id='LC752'>&nbsp;&nbsp;&nbsp;&nbsp;is(func: (index: any) =&gt;any): boolean;</div><div class='line' id='LC753'>&nbsp;&nbsp;&nbsp;&nbsp;is(element: any): boolean;</div><div class='line' id='LC754'>&nbsp;&nbsp;&nbsp;&nbsp;is(obj: JQuery): boolean;</div><div class='line' id='LC755'><br/></div><div class='line' id='LC756'>&nbsp;&nbsp;&nbsp;&nbsp;last(): JQuery;</div><div class='line' id='LC757'><br/></div><div class='line' id='LC758'>&nbsp;&nbsp;&nbsp;&nbsp;map(callback: (index: any, domElement: Element) =&gt;any): JQuery;</div><div class='line' id='LC759'><br/></div><div class='line' id='LC760'>&nbsp;&nbsp;&nbsp;&nbsp;next(selector?: string): JQuery;</div><div class='line' id='LC761'><br/></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;nextAll(selector?: string): JQuery;</div><div class='line' id='LC763'><br/></div><div class='line' id='LC764'>&nbsp;&nbsp;&nbsp;&nbsp;nextUntil(selector?: string, filter?: string): JQuery;</div><div class='line' id='LC765'>&nbsp;&nbsp;&nbsp;&nbsp;nextUntil(element?: Element, filter?: string): JQuery;</div><div class='line' id='LC766'><br/></div><div class='line' id='LC767'>&nbsp;&nbsp;&nbsp;&nbsp;not(selector: string): JQuery;</div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;not(func: (index: any) =&gt;any): JQuery;</div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;not(element: any): JQuery;</div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;not(obj: JQuery): JQuery;</div><div class='line' id='LC771'><br/></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;offsetParent(): JQuery;</div><div class='line' id='LC773'><br/></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;parent(selector?: string): JQuery;</div><div class='line' id='LC775'><br/></div><div class='line' id='LC776'>&nbsp;&nbsp;&nbsp;&nbsp;parents(selector?: string): JQuery;</div><div class='line' id='LC777'><br/></div><div class='line' id='LC778'>&nbsp;&nbsp;&nbsp;&nbsp;parentsUntil(selector?: string, filter?: string): JQuery;</div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;parentsUntil(element?: Element, filter?: string): JQuery;</div><div class='line' id='LC780'><br/></div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;prev(selector?: string): JQuery;</div><div class='line' id='LC782'><br/></div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;prevAll(selector?: string): JQuery;</div><div class='line' id='LC784'><br/></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;prevUntil(selector?: string, filter?:string): JQuery;</div><div class='line' id='LC786'>&nbsp;&nbsp;&nbsp;&nbsp;prevUntil(element?: Element, filter?:string): JQuery;</div><div class='line' id='LC787'><br/></div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;siblings(selector?: string): JQuery;</div><div class='line' id='LC789'><br/></div><div class='line' id='LC790'>&nbsp;&nbsp;&nbsp;&nbsp;slice(start: number, end?: number): JQuery;</div><div class='line' id='LC791'><br/></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;/*********</div><div class='line' id='LC793'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UTILITIES</div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;**********/</div><div class='line' id='LC795'><br/></div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;queue(queueName?: string): any[];</div><div class='line' id='LC797'>&nbsp;&nbsp;&nbsp;&nbsp;queue(queueName: string, newQueueOrCallback: any): JQuery;</div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;queue(newQueueOrCallback: any): JQuery;</div><div class='line' id='LC799'>}</div><div class='line' id='LC800'><br/></div><div class='line' id='LC801'>interface EventTarget {</div><div class='line' id='LC802'>	//nodeName: string;  //bugfix, duplicate identifier.  see: http://stackoverflow.com/questions/14824143/duplicate-identifier-nodename-in-jquery-d-ts</div><div class='line' id='LC803'>}</div><div class='line' id='LC804'><br/></div><div class='line' id='LC805'>declare var jQuery: JQueryStatic;</div><div class='line' id='LC806'>declare var $: JQueryStatic;</div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.03275s from github-fe117-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/soywiz/typescript-node-definitions/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

