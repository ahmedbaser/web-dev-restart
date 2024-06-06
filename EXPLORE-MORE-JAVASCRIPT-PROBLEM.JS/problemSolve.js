function paperRequirment(bookQuantity1,bookQuantity2,bookQuantity3) {
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;

    const book1TotalPage = book1 * bookQuantity1;
    const book2TotalPage = book2 * bookQuantity2;
    const book3TotalPage = book3 * bookQuantity3;

    const totalBookPages1 = book1TotalPage + book2TotalPage + book3TotalPage;
    return totalBookPages1;


}

const totalBookPages = paperRequirment(3,4,5);
console.log(totalBookPages);