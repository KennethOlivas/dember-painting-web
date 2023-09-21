import { Button, Card, Input, Textarea } from "@nextui-org/react";
import { useFormik } from "formik";
import React from "react";
import toast, { Toaster } from 'react-hot-toast'
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";


const ContactSchema = z.object({
  fullName: z.string({
    required_error: 'Full name is required'
  }).nonempty({ message: 'Full name is required' }),
  email: z.string({
    required_error: 'Email address is required'
  }).email({ message: 'Invalid email address' }),
  phone: z.string({
    required_error: 'Phone number is required'
  }).nonempty({ message: 'Phone number is required' }),
  message: z.string().optional(),
})

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      message: ''
    },
    validateOnChange: false,
    validate: toFormikValidate(ContactSchema),
    onSubmit: async (values, helper) => {
      helper.setSubmitting(true);
      await toast.promise(fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(values),
      }), {
        loading: 'Sending...',
        success: 'Message sent successfully',
        error: 'An error occurred, please try again'
      })
      helper.setSubmitting(false);
    },
  });

  return (
    <Card className="w-full px-4 lg:w-5/12 xl:w-4/12">
      <Toaster />
      <div
        className="shadow-testimonial wow fadeInUp rounded-lg bg-white px-8 py-10 sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
        data-wow-delay=".2s">
        <h3 className="mb-8 text-2xl font-semibold md:text-[26px]">
          Send us a Message
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6">
            <Input
              onChange={formik.handleChange}
              value={formik.values.fullName}
              errorMessage={formik.errors.fullName}
              isInvalid={!!formik.errors.fullName}
              id="fullName"
              label="Full name"
              variant="underlined"
              color="primary"
            />
          </div>
          <div className="mb-6">
            <Input
              onChange={formik.handleChange}
              value={formik.values.email}
              errorMessage={formik.errors.email}
              id="email"
              label="Email"
              variant="underlined"
              color="primary"
            />
          </div>
          <div className="mb-6">
            <Input
              onChange={formik.handleChange}
              value={formik.values.phone}
              errorMessage={formik.errors.phone}
              id="phone"
              label="Phone number"
              variant="underlined"
              color="primary"
            />
          </div>
          <div className="mb-6">
            <Textarea
              onChange={formik.handleChange}
              value={formik.values.message}
              errorMessage={formik.errors.message}
              color="primary"
              id="message"
              variant="underlined"
              labelPlacement="outside"
              placeholder="Enter your message here"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
          </div>
          <div className="mb-0">
            <Button
              isLoading={formik.isSubmitting}
              type="submit" variant="shadow" color="primary" size="lg">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
