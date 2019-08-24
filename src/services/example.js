
export function deleteBtn(params) {
  const { index, btnList} = params;
  btnList.splice(index, 1);
  return btnList;
}
