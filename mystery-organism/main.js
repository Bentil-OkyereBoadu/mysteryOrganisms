// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
    specimenNum : number,
    dna: array,
    mutate(){
      const originalBase = this.dna[0];
      const mutatedBase = returnRandBase();
      if (originalBase !== mutatedBase){ 
        let mutatedDna = mockUpStrand();
        return mutatedDna;
        }
    },
    compareDNA(dnaObject){
      let counter = 0;
      let percentage = 0;
      for(let index = 0; index <this.dna.length; index++){
        if(this.dna[index] === dnaObject[index]){
           counter += 1 ;
        }
      }
      percentage = ((counter/dnaObject.length) * 100).toFixed(2);
      const output = `Specimen A and Specimen B have ${percentage}% DNA in common.`;
      return output;
    },

    willLikelySurvive(){
      let counter = 0;
      for(let index = 0; index < this.dna.length; index++){
        if(this.dna[index] ==='C' || this.dna[index] === 'G'){
          counter += 1;
        }
      }
      const willSurvive = (counter/this.dna.length)*100 >= 60? true: false;
      return willSurvive;
    }   
  }
}
/**
 * survivors () {
      let survivorsArray = [];
      let mutant = [];
      let counter = 0;
      while(this.specimenNum > counter){
          mutant = this.mutate();

        if(this.willLikelySurvive() === true){
          survivorsArray.push(mutant);
        }
        counter ++;
      }
      return survivorsArray;
    }
 */

let specimen =  ['G', 'C', 'A', 'T','C', 'A', 'G', 'T','C', 'T', 'T', 'G','G', 'T', 'C'];
const specimen2 = ['C', 'G', 'C', 'T', 'G', 'A', 'C', 'C','A', 'C', 'T', 'A','A', 'C', 'T'];
const newSpecimen = pAequorFactory(30,specimen);
const newSpecimen2 = pAequorFactory(4, specimen2);
// console.log(newSpecimen.compareDNA(specimen2));
// console.log(newSpecimen.willLikelySurvive());
// console.log(newSpecimen.mutate());

const samples = (array) =>{
  let specimens = [];
  let newObject = [];
  for(let counter =0;counter < 3; counter++){
   newObject = pAequorFactory(1, array);
   specimens.push(newObject);
  }
  console.log(specimens);
}

samples(specimen);
/***
 * With the factory function set up, your team requests that you create 
 * 30 instances of pAequor that can survive in their natural environment. 
 * Store these instances in an array for your team to study later
 */




