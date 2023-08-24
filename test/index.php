<?php
// Server key from Firebase Console
define( 'API_ACCESS_KEY', 'AAAA-Ru9i1I:APA91bGit-4KN2rjpLxPzdXVlSLz0MKUQ4jIYuc-nDNPetr9J5oGY7dMXOX-GEThAq1By7MfbdsaZzLmtuIXWRkZJMP4L3OEGAzEQv6R3gYQEIuz1gZaIXwrkgOgJWRXenVzbxpEOrCc' );

$data = array("to" => "fZBkWVC-12M:APA91bHBPgTN-D3KXTqEgLDVGWJ4pG-75g1pVHyrTDKXtZGutaihsAEIq2oI5Z83iK_0sOfdVXnTWJK33u1M1pTqWKlA-ETTtxblSuTPBp5Y3c3yztfBZAxyqu7jp0ILJDJE204Zg1bk",
              "notification" => array( "title" => "Shareurcodes.com", "body" => "A Code Sharing Blog!","icon" => "icon.png", "click_action" => "http://shareurcodes.com"));                                                                    
$data_string = json_encode($data); 

echo "The Json Data : ".$data_string; 

$headers = array
(
     'Authorization: key=' . API_ACCESS_KEY, 
     'Content-Type: application/json'
);                                                                                 
                                                                                                                     
$ch = curl_init();  

curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );                                                                  
curl_setopt( $ch,CURLOPT_POST, true );  
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_POSTFIELDS, $data_string);                                                                  
                                                                                                                     
$result = curl_exec($ch);

curl_close ($ch);

echo "<p>&nbsp;</p>";
echo "The Result : ".$result;