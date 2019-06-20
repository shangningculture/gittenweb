<?php

// 随机跳转到一个url

$urls = [
    'http://b304.photo.store.qq.com/psb?/V12fKdwH0th4eL/Q8eVHHIQtIn53Y8AxnmrcAOBkgm95iImLzKNT9.i.d8!/b/dDABAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b308.photo.store.qq.com/psb?/V12fKdwH0th4eL/FZ.N12ejor6NsOB48diAFiUyjydGKtUYuYW*89nEP4g!/b/dDQBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b327.photo.store.qq.com/psb?/V12fKdwH0th4eL/nh7Rdnee7IdrruyPmckPJ1TiIlOTZwgF6as1GQeMN4M!/b/dEcBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b340.photo.store.qq.com/psb?/V12fKdwH0th4eL/xDfs03nK19.9BeBUghQRVuP53UN3VdMS1iG7.wmLRuw!/b/dFQBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b308.photo.store.qq.com/psb?/V12fKdwH0th4eL/BOxNQJuIpGHqJgkud5WjxnrpJ*dZyrkIa*cjpMwDtfQ!/b/dDQBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b310.photo.store.qq.com/psb?/V12fKdwH0th4eL/gZ21f1rPwwVJaMOdwKpLvMj1nQAFKEYKmG2qBgJtJv8!/b/dDYBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b309.photo.store.qq.com/psb?/V12fKdwH0th4eL/0Kc5QQWc*xhaVlYELSTDxR7YHeFRjmOXv783ZnALYZQ!/b/dDUBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b307.photo.store.qq.com/psb?/V12fKdwH0th4eL/YIUSqW4Prsb0bYIWFddccTl5GGe65XGCOnrPDm4.NA8!/b/dDMBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b85.photo.store.qq.com/psb?/V12fKdwH0th4eL/JnUDwGJOHMo2TBvuC1.AXlIvf9CQkDoUcULvlnFBNJI!/b/dFUAAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b307.photo.store.qq.com/psb?/V12fKdwH0th4eL/F5UK3jWBR2ZMg8jVZzU5x*nhozylksuO0Dz1ScK7JZI!/b/dDMBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b311.photo.store.qq.com/psb?/V12fKdwH0th4eL/kO4vfUegwl2fsWDcsuh.WPwHDhcCcir1e*IsZCD3ffU!/b/dDcBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b339.photo.store.qq.com/psb?/V12fKdwH0th4eL/XwqvqPaPG1eB5im09VrFRo6Tkd3TreEitakAK5DTbpg!/b/dFMBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b309.photo.store.qq.com/psb?/V12fKdwH0th4eL/IbUICYMYawVxiq9RAi8wx5z9mwbhWaj6piF1eKPWSQQ!/b/dDUBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b310.photo.store.qq.com/psb?/V12fKdwH0th4eL/FJV.hWw*xBR3v32ExZ1kG*HkVOtl1FwEhB59wC8k4QY!/b/dDYBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b307.photo.store.qq.com/psb?/V12fKdwH0th4eL/*GmgetpOE6LYk2MjF7sF6Kv3qsDMh0O2cUjeKTGSe1o!/b/dDMBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b310.photo.store.qq.com/psb?/V12fKdwH0th4eL/iMOgGOi.roIoNZb*oxXLupSd.BnbSngipel2FJOo5ec!/b/dDYBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
];

// array_rand(array,number) 
$oneurl = array_rand($urls,1);
 Header("HTTP/1.1 303 See Other");
 Header("Location: " . $urls[$oneurl]);
 exit; //from www.qq.com

 
