//take in a DNA sequence  'ATCG', 'TTT',  'CCAA', and return the pair version  'TAGC', 'AAA', 'GGTT'

  function DNAStrand(dna){
    var result = ""
        for( var i = 0; i < dna.length; i++){
            if(dna[i] === 'A'){
                result +='T'
            } else if (dna[i] === 'T'){
                result += 'A'
            } else if (dna[i] === 'G'){
                result += 'C'
            } else if (dna[i] === 'C'){
                result += 'G'
            }
        }
        return result
  }

  dnaStrand('AAAA')
  dnaStrand('TTTT')
  dnaStrand('CCCCC')
  dnaStrand('GGGG')
  dnaStrand('ATGC')

