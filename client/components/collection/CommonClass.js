
export default (Component)=>{
   return class Common extends Component{
          toggleLeftSidebar = ()=>{
            document.getElementsByTagName('html')[0].classList.toggle('slideout-open');
            document.getElementsByTagName('body')[0].classList.toggle('slideout-open');
            document.getElementById('bg-cover').classList.toggle('d-none');
            document.getElementById('sections_left').classList.toggle('is-active');
            document.getElementById('sections_left_sidebar').classList.toggle('is-opened-mobile');
          }
   }
}
