import {setupBurgerBar} from './script.js';

setupBurgerBar();

// Scroll To Top
import { setupScrollToTop } from './script.js';

setupScrollToTop();

// JS FILTER
function filterFunction() {
  let filterValue, input, ul, li, i;
  input = document.getElementById('search');
  filterValue = input.value.toUpperCase();
  ul = document.getElementById('menu');
  li = ul.getElementsByTagName('li');

  for (let I = 0; I < li.length; I++) {
   let a  = li[I].getElementsByTagName('a')[0];
   if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
    li[I].style.display = ""; 
   } else {
    li[I].style.display = "none"; 
   }
    
  }

}
document.getElementById('search').addEventListener('input', filterFunction);
