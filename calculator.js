
  let calculation = '';

  document.addEventListener('keydown', (event)=>{

      if(event.key==='1'||event.key==='2'||event.key==='3'||event.key==='4'||event.key==='5'||event.key==='6'||event.key==='7'||event.key==='8'||event.key==='9'){
         updatedCalculation(event.key);
      }else if(event.key==='0'){
         updatedCalculationZero();
      }else if(event.key==='Enter'){
         updatedCalculationEqual();
      }else if(event.key==='+'||event.key==='-'||event.key==='*'||event.key==='/'){
         updatedCalculationForSymbols(event.key)
      }else if(event.key==='Backspace'){
         removeLastMove();
      }else if(event.key==='.'){
        updatedCalculationDecimal(event.key);
      }
      
  })

  function updatedCalculation(unit){
    if(calculation==='0'){
      calculation = unit
    }else{
      calculation = calculation + unit;
    }

    document.querySelector('.js-calculation').value= calculation;
  };

  function updatedCalculationZero(){
    if(calculation==='0+0'){
      calculation = '0+0'
    }else if(calculation==='0'){
      calculation = '0'
    }else{
      calculation = calculation + '0';
    }
    document.querySelector('.js-calculation').value= calculation;
  };

  function updatedCalculationForSymbols(unit){

      calculationArray = calculation.split('');
      for(let i=0;i<calculationArray.length; i++){
          if(calculationArray[calculationArray.length-1]==='+'||calculationArray[calculationArray.length-1]==='-'||calculationArray[calculationArray.length-1]==='*'||calculationArray[calculationArray.length-1]==='/'){
            calculationArray.splice(calculationArray.length-1,1)
          }
        }
        let newCalculation = ''
        calculationArray.forEach((value)=>{
              newCalculation+=value;
          })
        calculation=newCalculation

        if(calculation!==''){
          calculation = `${eval(calculation)}`;
          document.querySelector('.js-sum').value = calculation;
        }

        if(calculation!==''){
          calculation = calculation + unit;
        }else if(calculation===''){
          calculation= '0'+ unit
        }
        document.querySelector('.js-calculation').value= calculation;

  };

  function removeLastMove(){
       
       let calculationArray = calculation.split('');
       const calculationArrayLength = calculationArray.length
       calculationArray.map(()=>{
           calculationArray.splice(calculationArrayLength-1 , 1);
       })

       let newCalculation='';
       calculationArray.forEach((value)=>{
       newCalculation+=value;
      })
       calculation=newCalculation;

       document.querySelector('.js-calculation').value= calculation;
   }

  function removeMovesAfterSymbol(){
        let calculationArray = calculation.split('');
        let newCalculationArray = [];
        for(let i=0;i<calculationArray.length;i++){
        if(calculationArray[i]==='+' || calculationArray[i]==='-' || calculationArray[i]==='/' || calculationArray[i]==='*'){
            break
        }else{
            newCalculationArray.push(calculationArray[i])
        }
      }
        let newCalculation = '';
        newCalculationArray.forEach((value)=>{
            newCalculation+=value
        })
        calculation=newCalculation

        document.querySelector('.js-calculation').value= calculation;
        
    }

  function updatedCalculationEqual(){
    if(calculation!==''){
      calculation = `${eval(calculation)}`;
      document.querySelector('.js-sum').value = calculation;
    }

  }

  function updatedCalculationDecimal(unit){
    let calculationArray =[];
    let newCalculationArray=[];
    let totalDecimal = 0;
    if(calculation==='' || calculation ==='0'){
      calculation = '0'+ unit;
      document.querySelector('.js-calculation').value= calculation;
    }else{

       calculationArray = calculation.split('');
       for(let i=0; i<calculationArray.length; i++){
          if(calculationArray[i]!==unit){
            newCalculationArray.push(calculationArray[i]);         
          }else if(calculationArray[i]===unit){
            newCalculationArray.push(calculationArray[i])
            totalDecimal++
          }
       }
     for(let j=0;j<newCalculationArray.length;j++){
      console.log(newCalculationArray[j])
      if((newCalculationArray[j]==='+' ||newCalculationArray[j]==='-'||newCalculationArray[j]==='*'||newCalculationArray[j]==='/') && totalDecimal<=1){
            newCalculationArray.push(unit);
            totalDecimal++
            console.log(totalDecimal)
        }
         if(newCalculationArray[newCalculationArray.length-1]===unit && totalDecimal<=1){
          newCalculationArray.splice(newCalculationArray.length-1,1)
          totalDecimal--
        }
      }
     
      if(totalDecimal<1){
        newCalculationArray.push(unit);
      }  
      let newCalculation = '';
      newCalculationArray.forEach((value)=>{
            newCalculation+=value
      })
      calculation=newCalculation;
      document.querySelector('.js-calculation').value= calculation;

    }
  }
