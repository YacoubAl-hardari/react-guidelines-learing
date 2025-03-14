import { useState, useCallback } from "react";
import Button from "./MyButton";
import Input from "./MyInput";
import Textarea from "./MyTextarea";
import InputCheckbox from "./InputCheckbox";
import InputRadio from "./InputRadio";
import InputFile from "./InputFile";

const initialFormData = {
  name: "",
  email: "",
  textarea: "",
  checkbox: false,
  radio: "",
  image: null,
  selectImage: " ",
};

export default function FormInput() {
  const [formData, setFormData] = useState(initialFormData);
  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = useCallback((event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      if (file) {
        setPreviewImage(URL.createObjectURL(file));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  }, []);

  function handelSubmit(event) {
    event.preventDefault();
    console.log(
      formData.name,
      formData.email,
      formData.textarea,
      formData.checkbox,
      formData.radio
    );
    resetForm();
  }

  function resetForm() {
    setFormData(initialFormData);
    setPreviewImage(null);
  }

  return (
    <form
      onSubmit={handelSubmit}
      className="max-w-sm mx-auto p-6 mt-100 bg-white shadow-lg rounded-lg"
      dir="rtl"
    >
      <div className="mb-4">
        <p>name: {formData.name}</p>
        <p>email: {formData.email}</p>
        <p>textarea: {formData.textarea}</p>
        <p>checkbox: {formData.checkbox ? "Checked" : "Unchecked"}</p>
        <p>radio: {formData.radio}</p>
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="mt-2 w-24 h-24 object-cover rounded"
          />
        )}
        <p>اختر صورة : {formData.selectImage}</p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="selectImage"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          اختر صورة
        </label>
        <select
          name="selectImage"
          id="selectImage"
          value={formData.selectImage}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-700 bg-white"
        >
          <option value="">اختر صورة</option>
          <option value="image1">صورة 1</option>
          <option value="image2">صورة 2</option>
          <option value="image3">صورة 3</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          الاسم
        </label>
        <Input
          inputType="text"
          inputName="name"
          value={formData.name}
          isRequired={false}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          الايميل
        </label>
        <Input
          inputType="text"
          inputName="email"
          value={formData.email}
          isRequired={true}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          الاسم
        </label>
        <Textarea
          inputName="textarea"
          value={formData.textarea}
          isRequired={false}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          التحقق صح
        </label>
        <InputCheckbox
          inputName="checkbox"
          checked={formData.checkbox}
          isRequired={true}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          اختر جواب
        </label>
        <InputRadio
          inputName="radio"
          InputValue="option1"
          isRequired={true}
          onChange={handleInputChange}
        />{" "}
        خيار 1
        <InputRadio
          inputName="radio"
          InputValue="option2"
          isRequired={true}
          onChange={handleInputChange}
        />{" "}
        خيار 2
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          رفع صورة
        </label>
        <InputFile
          inputName="image"
          isRequired={true}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-6">
        <Button type="submit" color="green" />
      </div>
    </form>
  );
}
