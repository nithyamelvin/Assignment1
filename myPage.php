<?php
$myfile = fopen("C:\Users\pauli\OneDrive\Desktop\pics\login.png", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);
?>