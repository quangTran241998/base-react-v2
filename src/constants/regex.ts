export const Number_Regex = /\d+/g;
export const Phone_Vietnam_Regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
export const Both_Letter_Number_Regex = /\w+/g;
export const Letter_Regex =
  /[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+/g;
export const Number_Dot_Regex = /\d+(\.\d+)?/g;
// export const Email_Regex = /[^\s@]+@[^\s@]+\.[^\s@]+$/g;
export const Number_Only_Regex = /[^0-9]/g;
export const Number_And_Dot_Regex = /[^0-9.]/g;
export const Number_And_Letter_Regex =
  /[^a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơưẠ-ỹ\s]/g;
export const Email_Regex = /[^a-zA-Z0-9@.]/g;
