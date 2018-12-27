const isPrime = number => {
    if(number <= 1) { return false; }
    const limit = Math.floor( Math.sqrt(number) );
    for( var i = 2; i<=limit; i++) {
        if( number%i === 0) { return false; }
    }
    return true;
};

// Routate the number once replace the fisrt digit to the end || for EX : 123 => 231 , 995474 => 954749
const rotateNumber = number => {
  var strNumber = number.toString();  // convert the number to string
  strNumber += strNumber[0]; // add the first degit to the end
  strNumber = strNumber.slice(1); // remove the first digit
  return parseInt(strNumber); // return the number
};

const  isCircularPrimeNumber = (number) => {
  // make sure that the number has not any zero digit and the main number is a prime
  if(number.toString().indexOf(0) !== -1 || !isPrime(number)){
    return false;
  }

  // Mack Infenitey loop
  while(true){
    // get rotateNumber;
    var rotateNumberOnce = rotateNumber( rotateNumberOnce || number );
    // if we finish the loop
    if(rotateNumberOnce !== number){
      // check if the routateNumber is prime , If it's not return false
      if(!isPrime(rotateNumberOnce)){
        return false;
      }
    } else{
      // if all  rotateNumbers are prime this number is Circl Prime Number so retrun true
      return(true);
      break;
    }
  }
}

const CountCircularPrimeNumbersBelow = (num) => {
  var circularPrimeNumbers = [];
  for(var i = 0; i < num; i++){
    if( isCircularPrimeNumber(i)) {
      circularPrimeNumbers.push(i);
    }
  }
  return circularPrimeNumbers.length;
}

if(process.env.NODE_ENV == "DEV"){
  // Devlopment Envirment
  console.time('test');
  console.log(CountCircularPrimeNumbersBelow(1000000));
  console.timeEnd('test');

} else if(process.env.NODE_ENV === 'TESTING'){

// UnitTests

  // Testing Functions
  var totalTests = 0, successTests =0, faildTests =0;

  const canCheckPrimeNumber = (number, reteredValue) => {
    totalTests++;
    console.log(`${number} is Primary Number ? ${reteredValue}`);
    if(isPrime(number) === reteredValue){
      console.log('Success!');
      successTests++;
    } else{
      console.error('Faild!');
      faildTests++;
    }
  }


  const canRotateNumber = (number, reteredValue) => {
    totalTests++;
    console.log(`${number} rotated equall to ${reteredValue}`);
    if(rotateNumber(number) === reteredValue){
      console.log('Success!');
      successTests++;
    } else{
      console.error('Faild!');
      faildTests++;
    }
  }


  const CeckCircularPrimeNumber = (number, reteredValue) => {
    totalTests++;
    console.log(`${number} circular Prime Number Number ? ${reteredValue}`);
    if(isCircularPrimeNumber(number) === reteredValue){
      console.log('Success!');
      successTests++;
    } else{
      console.error('Faild!');
      faildTests++;
    }
  }


  const CheckCountCircularePrimeNumbersBelow = (number, reteredValue) => {
    totalTests++;
    console.log(`count circular prime numbers below ${number} equalls ${reteredValue}`);
    if(CountCircularPrimeNumbersBelow(number) === reteredValue){
      console.log('Success!');
      successTests++;
    } else{
      console.error('Faild!');
      faildTests++;
    }
  }

  console.log();
  console.log(' Testing Mode');
  console.log();

  // Test isPrime function
  console.log('...................');
  console.group();
  console.log('test isPrime Function');
  console.group();
    canCheckPrimeNumber(1, false);
    canCheckPrimeNumber(101, true);
    canCheckPrimeNumber(971, true);
  console.groupEnd();
  console.groupEnd();
  console.log();

  // Test rotateNumber function
  console.log('.......................');
  console.group();
  console.log(' test rotateNumber Function');
  console.group();
    canRotateNumber(1, 1);
    canRotateNumber(150, 501);
    canRotateNumber(791, 917);
  console.groupEnd();
  console.groupEnd();
  console.log();

  // Test isCircularPrimeNumber function
  console.log('...................');
  console.group();
  console.log('test isCircularPrimeNumber Function');
  console.group();
    CeckCircularPrimeNumber(1, false);
    CeckCircularPrimeNumber(14, false);
    CeckCircularPrimeNumber(101, false);
  console.groupEnd();
  console.groupEnd();
  console.log();

  // Test CountCircularPrimeNumbersBelow function
  console.log('...................');
  console.group();
  console.log('test CountCircularPrimeNumbersBelow Function');
  console.group();
    CheckCountCircularePrimeNumbersBelow(100, 13);
    CheckCountCircularePrimeNumbersBelow(1000000, 55);
  console.groupEnd();
  console.groupEnd();
  console.log();

  // The Resualt of the test
  console.log('...................');
  console.group();
  console.log('totalTest', totalTests);
  console.log('successTest', successTests);
  console.log('faildTest', faildTests);
  console.groupEnd();

}
