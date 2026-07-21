let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    enrolled: true,
    sections: [
        { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
    ]
};

function setCourseInformation(course) {
    const gourse = document.getElementById("#course");
    gourse.innerHTML = `${course.code}-${e.section}; ${e.instructor}, ${e.enrolled}`;
};

function renderSections(course) {
    const tbod = document.querySelector('#sections tbody')
    let row = '';
    for (const i of course.sections) {
        rows += `<tr>
        <td>${i.section}</td>
        <td>${i.enrolled}</td>
        <td>${i.instructor}</td
        </tr>`
    };
    tbod.innerHTML = row;
};