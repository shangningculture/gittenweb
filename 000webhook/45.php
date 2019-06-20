<?php
// php执行exec("/usr/bin/sudo /bin/sh /xxx/xxx.sh")
$gitrun = shell_exec('sh /data/wwwroot/aeball/xiong.kupinblog.cn/public/000webhook/git45.sh');
var_dump($gitrun);
echo 'end run;';