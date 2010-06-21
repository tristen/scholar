<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">

  <head>
    <title><?php print $head_title; ?></title>
    <?php print $head; ?>
    <?php print $styles; ?>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript">
      $(document.body).ready(function () {
          $("#twitter_div").fadeIn(1200);
      });
    </script>
  </head>
  <body class="<?php print $body_classes; ?>"> 

      <div id="maintenance">
      <div id="twitter_div" class="unformatLinks">
      			<ul id="twitter_update_list"></ul>
            <span class="arrow"/></span>
      </div>
      <script type="text/javascript" src="http://twitter.com/javascripts/blogger.js"></script>
        <script type="text/javascript" src="http://twitter.com/statuses/user_timeline/tristenweb.json?callback=twitterCallback2&amp;count=1"></script>  
      <img src ="<?php print base_path().path_to_theme(); ?>/images/maintenance.gif" />
      </div>
    

  </body>
</html>