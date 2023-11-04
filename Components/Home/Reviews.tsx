"use client";

import reviewsBackground from "@/public/assets/Images/reviews-back.jpg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
export default function Reviews({
	data,
}: {
	data: { id: number; composer: string; review: string }[];
}) {
	const FieldsClassName =
		"px-3 py-2 rounded-lg border-[1px] border-primary bg-white outline-none w-full md:w-[50%]";
	return (
		<section
			className={
				"relative w-full flex flex-col gap-7 mx-auto mt-10 justify-center items-center py-10 overflow-hidden md:bg-black md:text-white"
			}>
			<Image
				alt="container"
				src={reviewsBackground}
				objectFit="cover"
				fill
				className=" opacity-60 hidden md:block"
			/>
			<h2
				className={
					"text-2xl md:text-3xl lg:text-4xl  border-b-2 border-b-primary pb-5  z-[1]"
				}>
				انتقادات و پیشنهادات از آرتا
			</h2>
			<div className="w-full md:grid md:grid-cols-2 max-w-[1200px] mx-auto flex flex-col gap-6 justify-between px-5 mt-10  z-[1]">
				<Formik
					initialValues={{
						composer: "",
						review: "",
					}}
					onSubmit={async (values, actions) => {
						const { composer, review } = values;

						if (!composer || !review) {
							actions.setErrors({ composer: "لطفا همه فیلد ها را پر کنید" });
							actions.setSubmitting(false);
							return;
						}
						const response = await fetch(
							new URL("reviews", process.env.NEXT_PUBLIC_API_BASE_URL),
							{
								method: "Post",
								headers: {
									Accept: "application/json",
									"Content-Type": "application/json",
								},
								body: JSON.stringify({ composer: composer, review: review }),
							}
						);
						const responseData = await response.json();
						alert(
							responseData.status === "success"
								? "با موفقیت ثبت شد."
								: "نظر ارسال نشد."
						);
						actions.setSubmitting(false);
					}}>
					{(formik) => {
						return (
							<Form className="flex flex-col w-full gap-3 font-IranSans justify-center items-center">
								<label className={"text-lg text-center w-full mb-10"}>
									شما هم نظر خودتون رو ثبت کنید.
								</label>
								<label htmlFor="composer" className=" w-full md:w-[50%]">
									نام و نام خانوادگی
								</label>
								<Field
									id="composer"
									name="composer"
									placeholder="نام کامل"
									className={FieldsClassName}
								/>
								<label htmlFor="lastName" className=" w-full md:w-[50%]">
									نظر
								</label>
								<Field
									id="review"
									name="review"
									placeholder="نظر"
									className={FieldsClassName}
									as={"textarea"}
								/>
								<ErrorMessage
									name="composer"
									className="text-red-500"
									component={"div"}
								/>
								<button
									type="submit"
									className="px-5 py-3 bg-primary text-white font-semibold rounded-lg w-full md:w-[50%]">
									{formik.isSubmitting ? "درحال ارسال ..." : "ارسال"}
								</button>
							</Form>
						);
					}}
				</Formik>
				<div className="flex flex-col overflow-y-clip gap-3">
					{data.length > 0
						? data.map((review) => {
								return (
									<div
										key={"review" + review.id}
										className="text-secondary flex flex-col justify-start items-start bg-white rounded-xl shadow-xl p-3">
										<span className="font-semibold text-xl text-primary">
											{review.composer}:
										</span>
										<p className="font-light text-sm line-clamp-3">
											{review.review}
										</p>
									</div>
								);
						  })
						: "هنوز نظری وجود ندارد"}
				</div>
			</div>
		</section>
	);
}
