<?php $date=new DateTime('@'.strtotime('2022-04-03 00:00'),new DateTimeZone('Europe/Budapest'));$millis=strtotime($date->format('Y-m-d H:i:sP'))*1000;echo $millis  ?>
