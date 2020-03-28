
export default (Component)=>{
   return class Common extends Component{
          toggleLeftSidebar = ()=>{
            document.getElementsByTagName('html')[0].classList.toggle('slideout-open');
            document.getElementsByTagName('body')[0].classList.toggle('slideout-open');
            document.getElementById('bg-cover').classList.toggle('d-none');
            document.getElementById('sections_left').classList.toggle('is-active');
            document.getElementById('sections_left_sidebar').classList.toggle('is-opened-mobile');
          }

          openModal = (e)=>{
               console.log(e.currentTarget);
               let {modal} = e.currentTarget.dataset;
               document.getElementById(modal).classList.toggle('is-active');
          }

          closeModal = (e)=>{
            const { modal } =  e.currentTarget.dataset;
            document.getElementById(modal).classList.remove('is-active');
          }
   }
}
