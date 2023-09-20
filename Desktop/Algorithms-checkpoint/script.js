// algorithm pseudocodes
// initialize sentence_length = 0
// initialize word_count = 0
// initialize vowel_count = 0

// read sentence character by character

// for each character in the sentence
//     increment sentence_length

//     if character is a space
//         increment word_count

//     if character is a vowel
//         increment vowel_count

//     if character is a point
//         break

// print sentence_length, word_count, and vowel_count


function sentenceAnalysis(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let isWord = false;

    for (let i = 0; i < sentence.length; i++) {
        sentenceLength++;

        if (sentence[i] === ' ') {
            wordCount++;
            isWord = false;
        } else if (!isWord) {
            isWord = true;
        }

        if (sentence[i].toLowerCase() === 'a' ||
            sentence[i].toLowerCase() === 'e' ||
            sentence[i].toLowerCase() === 'i' ||
            sentence[i].toLowerCase() === 'o' ||
            sentence[i].toLowerCase() === 'u') {
            vowelCount++;
        }
    }

    return {
        sentenceLength: sentenceLength,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

let sentence = "This is a sample sentence. ";
let result = sentenceAnalysis(sentence);

console.log("Sentence Length:", result.sentenceLength);
console.log("Number of Words:", result.wordCount);
console.log("Number of Vowels:", result.vowelCount);

// when you run it:
// sentence length: 27
// number of words: 5
// number of vowels: 8



// This code defines a function called `sentenceAnalysis` that takes a sentence as input and returns an object containing the length of the sentence, the number of words in the sentence, and the number of vowels in the sentence. The function uses three variables as counters to keep track of these values. The function iterates over each character in the sentence, incrementing the sentence length counter for each character, and incrementing the word count and vowel count counters if the character is a space or a vowel, respectively. Finally, the function prints the values of the three counters.