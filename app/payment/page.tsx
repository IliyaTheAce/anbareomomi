"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { createRef, useState } from "react";
import { DatePicker } from "zaman";
const FieldsClassName =
  "px-3 py-2 rounded-lg border-[1px] border-primary bg-white outline-none";
export default function Payment() {
  const [startData, setStartData] = useState<Date>(new Date());
  const [endDate, setEndData] = useState<Date>(new Date());
  const fileRef = createRef<HTMLInputElement>();
  return (
    <section className="flex flex-col gap-10 px-10 pt-16">
      <h2 className="font-bold text-3xl ">بارگزاری فاکتور</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          containerNo: "",
          roofNo: "",
          storageNo: "",
          branch: "",
        }}
        onSubmit={async (values, actions) => {
          const {
            firstName,
            lastName,
            branch,
            containerNo,
            storageNo,
            roofNo,
          } = values;
          if (fileRef.current?.files && fileRef.current?.files.length <= 0) {
            actions.setErrors({
              firstName: "لطفا تصویر فاکتور را انتخاب کنید",
            });
            actions.setSubmitting(false);
            return;
          }

          if (
            !firstName ||
            !lastName ||
            !branch
            // !containerNo ||
            // !storageNo ||
            // !roofNo ||
          ) {
            actions.setErrors({ firstName: "لطفا همه فیلد ها را پر کنید" });
            actions.setSubmitting(false);
            return;
          }
          let data = new FormData();
          data.append("firstName", firstName);
          data.append("lastName", lastName);
          data.append("branch", branch);
          data.append("containerNo", containerNo || "0");
          data.append("storageNo", storageNo || "0");
          data.append("roofNo", roofNo || "0");
          if (fileRef.current?.files) {
            data.append("file", fileRef.current?.files[0]);
          }
          data.append("contractStartDate", startData.toString());
          data.append("contractEndDate", endDate.toString());
          const response = await fetch(
            new URL("payments", process.env.NEXT_PUBLIC_API_BASE_URL),
            {
              method: "Post",
              body: data,
            },
          );
          const responseData = await response.json();
          alert(
            responseData.status ? "با موفقیت ارسال شد." : "فاکتور ارسال نشد.",
          );
          actions.setSubmitting(false);
        }}
      >
        {(formik) => {
          return (
            <Form className="grid mx-auto grid-cols-2 gap-3 font-IranSans justify-center items-center">
              <label htmlFor="firstName">نام</label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="نام"
                className={FieldsClassName}
              />
              <label htmlFor="lastName">نام خانوادگی</label>
              <Field
                id="lastName"
                name="lastName"
                placeholder="نام خانوادگی"
                className={FieldsClassName}
              />
              <label htmlFor="containerNo">شماره کانتینر</label>
              <Field
                id="containerNo"
                name="containerNo"
                placeholder="شماره کانتینر"
                className={FieldsClassName}
              />
              <label htmlFor="roofNo">شماره مسقف</label>
              <Field
                id="roofNo"
                name="roofNo"
                placeholder="شماره مسقف"
                className={FieldsClassName}
              />
              <label htmlFor="storageNo">شماره انبار</label>
              <Field
                id="storageNo"
                name="storageNo"
                placeholder="شماره انبار"
                className={FieldsClassName}
              />
              <label htmlFor="storageNo">شعبه</label>
              <Field
                id="branch"
                name="branch"
                placeholder="شعبه"
                className={FieldsClassName}
              />
              <label>تاریخ شروع قرارداد</label>
              <DatePicker
                accentColor="f58222"
                defaultValue={new Date()}
                inputClass={FieldsClassName}
                onChange={(value) => {
                  if (!value.value) return;
                  setStartData(value.value);
                }}
              />
              <label>تاریخ پایان قرارداد</label>
              <DatePicker
                accentColor="f58222"
                defaultValue={new Date()}
                inputClass={FieldsClassName}
                onChange={(value) => {
                  if (!value.value) return;
                  setEndData(value.value);
                }}
              />
              <label htmlFor="file">رسید پرداخت</label>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="px-5 py-3 bg-primary text-white font-semibold rounded-lg"
              >
                انتخاب
              </button>
              <input
                id="file"
                name="file"
                type="file"
                ref={fileRef}
                className="hidden"
                onChange={(event) => {
                  const files = event.target.files;
                  if (files) {
                    formik.setFieldValue("file", files[0]);
                  }
                }}
                multiple={false}
                accept="image/*"
              />
              <ErrorMessage
                name="firstName"
                className="text-red-500"
                component={"div"}
              />
              <button
                type="submit"
                className="px-5 py-3 bg-primary text-white font-semibold rounded-lg"
              >
                {formik.isSubmitting ? "درحال ارسال ..." : "ارسال"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
