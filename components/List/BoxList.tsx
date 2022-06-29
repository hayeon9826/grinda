import Image from "next/image";

const BoxList = ({ templates }) => {
  return (
    <>
      {templates &&
        templates?.map((template) => (
          <div className="group relative" key={template.id}>
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80 lg:aspect-none">
              <div className=" object-center object-cover relative">
                <Image
                  src={template?.image}
                  alt="template image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {template?.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{template?.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {template?.price}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default BoxList;
