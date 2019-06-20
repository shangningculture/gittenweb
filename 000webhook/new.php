<?php
// cd /data/wwwroot/wx/tenweb && git pull
$gitrun = shell_exec('sh /data/wwwroot/wx/tenweb/git.sh');
var_dump($gitrun);
echo 'end run;';
