<?php
$gitrun = shell_exec('sh /data/wwwroot/tenweb/000webhook/hk.sh');
echo '执行结果:';
echo $gitrun;
echo '\n执行说明 NULL 表示失败';