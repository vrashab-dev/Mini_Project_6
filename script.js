let Table=document.querySelector('#Table');
let body = document.querySelector('#body');
body.addEventListener('keydown',(e)=>{
     Table.innerHTML =`
     <div id="color">
     <table>
<tr>
  <th>  KEY  </th>
  <th>  KEY CODE  </th>
  <th>  CODE  </th>
</tr>
<tr>
  <td> ${e.key===" "?"Space":e.key} </td>
  <td> ${e.keyCode} </td>
  <td> ${e.code} </td>
</tr>

</table>
</div>`

})