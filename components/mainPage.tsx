import Image from 'next/image'

const MainPage = () => {

  const templates = [
    {
      id: 0,
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', 
      name: 'Basic Tee',
      color: 'Black',
      price: '$35'
    },
    {
      id: 1,
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg', 
      name: 'Basic Tee',
      color: 'White',
      price: '$35'
    },
    {
      id: 2,
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg', 
      name: 'Basic Tee',
      color: 'Charcoal',
      price: '$35'
    },
    {
      id: 3,
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg', 
      name: 'Basic Tee',
      color: 'Dots',
      price: '$35'
    },
    {
      id: 4,
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', 
      name: 'Basic Tee',
      color: 'Black',
      price: '$35'
    }
  ]
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Trending</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {templates?.map((template) => (
              <div className="group relative" key={template.id}>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <div className="w-full h-full object-center object-cover lg:w-full lg:h-full">
                    <Image src={template?.image} alt="template image" layout='fill'/>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {template?.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{template?.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{template?.price}</p>
                </div>
              </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
