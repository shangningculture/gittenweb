<?php
// php执行exec("/usr/bin/sudo /bin/sh /xxx/xxx.sh")
$gitrun = shell_exec('sh /data/wwwroot/wx/tenweb/git.sh');
var_dump($gitrun);
echo 'end run;';