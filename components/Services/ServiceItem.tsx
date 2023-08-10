import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const ServiceItem: FC<Props> = ({ description, title }) => {
  return (
    <div>
      <svg
        className="w-9 h-9 text-gray-800 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      </svg>
      <div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div className="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
