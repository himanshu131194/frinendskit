import uuid from 'uuid/v4';
 
export default (Component)=>{
   return class Common extends Component{
           state = {
              key :''
           }
           setLocalStorage(data64){
              const key = uuid();
              const stored = localStorage.setItem(key, data64); 
              return key;
           }

           getocalStorage(key){
               return localStorage.getItem(key);
           }
   }
}
