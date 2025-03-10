const countVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Приводим слово к нижнему регистру для удобства сравнения
    return word.toLowerCase()
        .split('') // Преобразуем слово в массив символов
        .filter(letter => vowels.includes(letter)) // Фильтруем гласные буквы
        .length; // Возвращаем количество гласных букв
};

const word = 'JavaScript';
const vowelCount = countVowels(word);
console.log(vowelCount); 