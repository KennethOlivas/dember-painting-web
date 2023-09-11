import React, { FC } from 'react'

type EmailTemplateProps = {
  email: string;
  fullName: string;
  phone: string;
  message: string;
}

const EmailTemplate: FC<EmailTemplateProps> = ({ fullName, email, message, phone }) => {
  const date = new Date()
  return (
    <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
      <main className="mt-8">
        <h2 className="text-gray-700 dark:text-gray-200">Hello</h2>
        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
          You have received a new contact message from the <a href="http://www.demberpaintinginc.com" target='_blank' className="font-semibold ">http://www.demberpaintinginc.com</a>.
        </p>
        <ul>
          <li className="mt-4">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Name:</span> {fullName}
          </li>
          <li className="mt-2">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Email:</span> {email}
          </li>
          <li className="mt-2">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Phone:</span> {phone}
          </li>
        </ul>
        <p className="mt-8 text-gray-600 dark:text-gray-300">
          Message: <br />
          {message}
        </p>
      </main>
      <footer className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
          This email was sent from <a href="#" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank">demberpaintinginc@gmail.com</a>.
        </p>
        <p className="mt-3 text-gray-500 dark:text-gray-400">© {date.getFullYear()} D. All Rights Reserved.</p>
      </footer>
    </section>
  )
}

export default EmailTemplate
