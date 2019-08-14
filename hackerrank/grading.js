function gradingStudents(grades) {
    let result = grades;

    result.forEach((e, i) => {
        grades[i] = calcGrade(e);
    })

    return result;
}

function calcGrade(val) {
    let result = val;
    let next = Math.ceil(val / 5) * 5;

    if (val >= 38 && next - result < 3) {
        result = next;
    }

    return result;
}
