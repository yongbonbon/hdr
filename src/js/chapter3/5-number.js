const students = ['马云', '唐山', '十大', 'dad', 'dassx'];
const index = Math.floor(Math.random() * students.length);
//0~
console.log(students[index]);

//2~5
const index2 = 2 + Math.floor(Math.random() * (students.length - 2));
console.log(students[index2]);

const students = ['马云', '唐山', '十大', 'dad', 'dassx'];
const arrayRandomValue = (array, start = 1, end) => {
    end = end ? end : array.length;
    start--;
    const index = start + Math.floor(Math.random() * (end - start));
    return array[index];
}
console.log(arrayRandomValue(students, 2, 4));