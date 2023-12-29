
  ## React <img width = 20 height = 20 src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemo0eGo0NGg0cWhoZm11ZnUyOG02cjl1eHNiYjR4YTdmOTNuZzRjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/eNAsjO55tPbgaor7ma/giphy.gif">
  ### 📌Meu primeiro aprendizado no React aprendendo componentização,markup with JSX,sintaxe, entre outros:

  ![image](https://github.com/MatRogax/Calculadora_react/assets/105300337/8f0bd672-e198-4b19-823c-e835dcec9e61)


 ## ⚙️aprendendo também sobre o hook `{useState}`, JavaScript e a utilização de uma biblioteca antiga chamada styled-components 

 <div align = "center" >
  
![image](https://github.com/MatRogax/Calculadora_react/assets/105300337/527af81b-b542-474a-b04a-843e1ce02750)

</div>
<br>


     import { useState } from 'react';

      export default function MyApp() {
        const [count, setCount] = useState(0);
    
        function handleClick() {
          setCount(count + 1);
        }
      
        return (
          <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
          </div>
        );
      }
    
      function MyButton({ count, onClick }) {
        return (
          <button onClick={onClick}>
            Clicked {count} times
          </button>
        );
      }...
    

  

<br>
<br>






