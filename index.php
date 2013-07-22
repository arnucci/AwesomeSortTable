<?php require_once 'data.php'; ?>
<!DOCTYPE html>
<html lang="en">
 
    <head>
    <meta charset="utf-8">
    <title>Demos</title>
    <link href="style.css" type="text/css" rel="stylesheet" />
      <link href="jquery.awesomeSortTable.css" type="text/css" rel="stylesheet" />
    </head>
 
    <body>
        <h1>Demos</h1>

        <h2>Simple usage</h2>

        <table id="simple">
            <thead>
                <tr>
                    <td>Logiciel</td>
                    <td>Version</td>
                    <td>Demandeur</td>
                    <td>Ufr</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Acrobat Reader</td>
                    <td>9</td>
                    <td>John Doe</td>
                    <td>Esil</td>
                </tr>
                <tr>
                    <td>DVDRip</td>
                    <td>0.98.6</td>
                    <td>Janne Doe</td>
                    <td>Sciences</td>
                </tr>
                <tr>
                    <td>Yellow shark</td>
                    <td>1993</td>
                    <td>Boby Brown</td>
                    <td>IUT</td>
                </tr>
                <tr>
                    <td>Soft from hell</td>
                    <td>666</td>
                    <td>Luc Ifer</td>
                    <td>Staps</td>
                </tr>
                <tr>
                    <td>Oceania</td>
                    <td>42</td>
                    <td>Titi</td>
                    <td>COM</td>
                </tr>
                <tr>
                    <td>Final Cut</td>
                    <td>42</td>
                    <td>Toto</td>
                    <td>COM</td>
                </tr>
            </tbody>
        </table>
            
        <h2>With date</h2>

        <table>
            <thead>
                <tr>
                    <td>Logiciel</td>
                    <td>Version</td>
                    <td>Demandeur</td>
                    <td>Ufr</td>
                    <td class="date">Date</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Acrobat Reader</td>
                    <td>9</td>
                    <td>John Doe</td>
                    <td>Esil</td>
                    <td>01/01/2011</td>
                </tr>
                <tr>
                    <td>DVDRip</td>
                    <td>0.98.6</td>
                    <td>Janne Doe</td>
                    <td>Sciences</td>
                    <td>10/02/2011</td>
                </tr>
                <tr>
                    <td>Yellow shark</td>
                    <td>1993</td>
                    <td>Boby Brown</td>
                    <td>IUT</td>
                    <td>03/03/2011</td>
                </tr>
                <tr>
                    <td>Soft from hell</td>
                    <td>666</td>
                    <td>Luc Ifer</td>
                    <td>Staps</td>
                    <td>12/12/2012</td>
               </tr>
               <tr>
                    <td>Oceania</td>
                    <td>42</td>
                    <td>Titi</td>
                    <td>COM</td>
                    <td>10/03/2011</td>
               </tr>
               <tr>
                    <td>Final Cut</td>
                    <td>42</td>
                    <td>Toto</td>
                    <td>COM</td>
                    <td>16/03/2011</td>
               </tr>
            </tbody>
        </table>

        <h2>With specific column</h2>

        <form method="post" action="index.php">

        <table>
            <thead>
                <tr>
                    <td><input type="checkbox" name="demandes[]" value="all" /></td>
                    <td>Logiciel</td>
                    <td>Version</td>
                    <td>Demandeur</td>
                    <td>Ufr</td>
                    <td class="date">Date</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" name="demandes[]" value="1" /></td>
                    <td>Acrobat Reader</td>
                    <td>9</td>
                    <td>John Doe</td>
                    <td>Esil</td>
                    <td>01/01/2011</td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="demandes[]" value="2" /></td>
                    <td>DVDRip</td>
                    <td>0.98.6</td>
                    <td>Janne Doe</td>
                    <td>Sciences</td>
                    <td>10/02/2011</td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="demandes[]" value="3" /></td>
                    <td>Yellow shark</td>
                    <td>1993</td>
                    <td>Boby Brown</td>
                    <td>IUT</td>
                    <td>03/03/2011</td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="demandes[]" value="4" /></td>
                    <td>Soft from hell</td>
                    <td>666</td>
                    <td>Luc Ifer</td>
                    <td>Staps</td>
                    <td>12/12/2012</td>
               </tr>
               <tr>
                    <td><input type="checkbox" name="demandes[]" value="5" /></td>
                    <td>Oceania</td>
                    <td>42</td>
                    <td>Titi</td>
                    <td>COM</td>
                    <td>10/03/2011</td>
               </tr>
               <tr>
                    <td><input type="checkbox" name="demandes[]" value="6" /></td>
                    <td>Final Cut</td>
                    <td>42</td>
                    <td>Toto</td>
                    <td>COM</td>
                    <td>16/03/2011</td>
               </tr>
            </tbody>
        </table>

        <p><input type="button" name="submit" value="Submit" /></p>

        </form>

        <h2>With Ajax</h2>

        <form method="post" action="index.php">

        <table>
            <thead>
                <tr>
                    <td><input type="checkbox" name="demandes[]" value="all" /></td>
                    <td>Logiciel</td>
                    <td>Version</td>
                    <td>Demandeur</td>
                    <td>Ufr</td>
                    <td class="date">Date</td>
                </tr>
            </thead>
            <tbody>
      <?php 
          foreach ($dataArray as $key => $data) {
              echo '<tr>';
              echo '<td><input type="checkbox" name="demandes[]" value="'.$key.'" /></td>';
              echo '<td>'.$data[0].'</td>';
              echo '<td>'.$data[1].'</td>';
              echo '<td>'.$data[2].'</td>';
              echo '<td>'.$data[3].'</td>';
              echo '<td>'.$data[4].'</td>';
              echo '</tr>';
          }
      ?>

            </tbody>
        </table>

        <p><input type="button" name="submit" value="Submit" /></p>

        </form>
        
        <h2>With pagination</h2>

        <form method="post" action="index.php">

        <table>
            <thead>
                <tr>
                    <td><input type="checkbox" name="demandes[]" value="all" /></td>
                    <td>Logiciel</td>
                    <td>Version</td>
                    <td>Demandeur</td>
                    <td>Ufr</td>
                    <td class="date">Date</td>
                </tr>
            </thead>
            <tbody>
      <?php

          $offset    = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
          $limit     = 20;
          $slicedArray = array_slice($dataArray, $offset, $limit);

          foreach ($slicedArray as $key => $data) {

              echo '<tr>';
              echo '<td><input type="checkbox" name="demandes[]" value="'.$key.'" /></td>';
              echo '<td>'.$data[0].'</td>';
              echo '<td>'.$data[1].'</td>';
              echo '<td>'.$data[2].'</td>';
              echo '<td>'.$data[3].'</td>';
              echo '<td>'.$data[4].'</td>';
              echo '</tr>';
          }
      ?>

            </tbody>
        </table>

      <?php

          $nbDemande = count($dataArray);
          $nbLink    = ceil($nbDemande/$limit);

          for ($i = 0; $i <$nbLink; $i++) {

              $offset = $i*$limit;
              $link   = $i+1;
              echo '<a href="index.php?offset='.$offset.'">'.$link.'</a> ';
          }
      ?>

        <p><input type="button" name="submit" value="Submit" /></p>

        </form>
    
         <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
         <script src="../jquery.awesomeSortTable.js"></script>
         <script src="../init.js"></script>
    </body>

</html>
