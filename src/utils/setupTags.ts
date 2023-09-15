const setupTags = (recipes: any) => {
  const allTags: any = {};

  recipes.forEach((recipe: any) => {
    recipe.content.tags.forEach((tag: any) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag);
  });

  return newTags;
};

export default setupTags;
