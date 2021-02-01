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

function pAequorFactory(number, array) {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      let rand = Math.floor(Math.random()*15);
      this.dna[rand] = returnRandBase();
    },
    compareDNA(specToCompare){
      let errors = 0;
      let commonPCT = 0;
      for (var x = 0; x < this.dna.length; x++)
        if(this.dna[x] !== specToCompare.dna[x]){
          errors++;
        }
        commonPCT = (this.dna.length - errors) / this.dna.length * 100;
        console.log(`Specimen ${this.specimenNum} and Specimen ${specToCompare.specimenNum} have ${commonPCT}% in common.`)
    },
    willLikelySurvive(){
      let basesCorG = 0;
      for (var x = 0; x < this.dna.length; x++)
        if (this.dna[x] === 'C' || this.dna[x] === 'G'){
          basesCorG++;
        };
        return ((basesCorG/this.dna.length) > .60)
    }
  };
};

var specimenArray = [];
var specCount = 0;
var specIndex = 0;
do {
  const obj = pAequorFactory(specIndex, mockUpStrand());
  if (obj.willLikelySurvive()) {
    specimenArray.push(obj)
    specCount++;
  };
  specIndex++;
} while (specCount <= 30);

/*const ob1 = pAequorFactory(1, mockUpStrand());
const ob2 = pAequorFactory(2, mockUpStrand());
console.log(ob1);
console.log(ob2);
ob1.compareDNA(ob2);
console.log (ob1.willLikelySurvive());
*/
console.log(specimenArray);






