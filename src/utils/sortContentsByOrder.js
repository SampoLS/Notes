/**
 *
 * @param {Array<object>} contents The contents gonna be sorted by ascending.
 * @returns {Array<object>}
 */

export const sortContentsByOrder = (contents) => {

    const sortedContents = contents.sort((a, b) => {

        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;

        return 0;

    });

    // Get the index of the content of the large title .
    const largeTitleIndex = sortedContents.findIndex( (item) => item.isLargerTitle === true );

    // If the largeTitle exists.
    if (largeTitleIndex !== -1) {

        // Delete the content of large(h1) title.
        const [largeTitle] = sortedContents.splice(largeTitleIndex, 1);

        // Add the content of large(h1) title to the first position.
        sortedContents.unshift(largeTitle);

    }

    // Get the index of the content of the Summary title.
    const summaryTitleIndex = sortedContents.findIndex( (item) => item.title === "Summary" );

    // If the summaryTitle exsits.
    if (summaryTitleIndex !== -1) {

        // Delete the content of Summary title.
        const [summaryTitle] = sortedContents.splice(summaryTitleIndex, 1);

        // Add the content of Summary title to the last position.
        sortedContents.push(summaryTitle);

    }

    // Return the sorted contents.
    return sortedContents;

};
