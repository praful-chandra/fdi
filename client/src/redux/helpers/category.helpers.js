export const addNewCategory = (oldCategoryList, newCategory) => [
  ...oldCategoryList,
  newCategory,
];

export const deleteCategory = (oldCategory, deleteCategory_id) =>
  oldCategory.filter((old) => old._id !== deleteCategory_id);
