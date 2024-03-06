document.getElementById('openModal').addEventListener('click', function() {
   document.getElementById('myModal').style.display = "block";
    //document.getElementById('audioPlayer').play();;
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = 0.15; // Set the volume to 50%
    audioPlayer.play();
    
   });
   
   document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
   });
   
   // Close the modal when the user clicks anywhere outside of it
   window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
       document.getElementById('myModal').style.display = "none";
    }
   }
   