import './App.css'


function App (){
  return(
    <>
  <header class="border-b">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">WeddingStore</h1>
      <nav class="space-x-6 text-sm">
        <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Specials</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Delivery</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Contact</a>
      </nav>
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          class="border px-3 py-1 rounded-lg text-sm"
        />
        <button class="bg-gray-800 text-white px-4 py-1 rounded-lg text-sm">Search</button>
      </div>
    </div>
  </header>

  <section class="relative">
    <img src="https://burst.shopifycdn.com/photos/bride-models-wedding-fashion.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="Wedding Banner" class="w-full object-cover h-72 sm:h-96"/>
    <div class="absolute inset-0 flex justify-center items-center">
      <h2 class="text-white text-4xl font-bold">Welcome to Wedding Store</h2>
    </div>
  </section>

  <section class="container mx-auto px-4 py-10">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div class="text-center border p-4 rounded-lg">
        <img
          src="https://www.modernwedding.com.au/wp-content/uploads/2020/06/10/Wedding-Shoes-14.jpg"
          alt="Bridal Shoes"
          class="w-100 h-50 mx-auto"
        />
        <h3 class="text-lg font-semibold mt-4">Bridal Shoes</h3>
      </div>

      <div class="text-center border p-4 rounded-lg">
        <img
          src="https://www.arenaflowers.co.in/cdn/shop/products/city-107_1qwtqlfombhomu1d_dc982472-2423-4259-82b1-f2a6dfc92aa8.jpg?v=1617941188"
          alt="Wedding Bouquets"
          class="w-96 h-72 mx-auto"
        />
        <h3 class="text-lg font-semibold mt-4">Wedding Bouquets</h3>
      </div>

      <div class="text-center border p-4 rounded-lg">
        <img
          src="https://www.fashioncrab.com/wp-content/uploads/2023/11/Sea-Green-Wedding-Jewellery-Set-for-Bride.jpg.webp"
          alt="Bridal Jewelry"
          class="w-96 h-72 mx-auto"
        />
        <h3 class="text-lg font-semibold mt-4">Bridal Jewelry</h3>
      </div>
    </div>
  </section>


  <section class="container mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold text-center mb-8">Featured Products</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div class="border rounded-lg overflow-hidden text-center">
        <img src="https://www.devotiondresses.com/cdn/shop/products/thumb_58346_product_original.jpg?v=1680000183&width=1445" alt="Product 1" className='h-fit'/>
        <div class="p-4">
          <h3 class="text-lg font-semibold">NUYASA MIUAYSE</h3>
          <p class="text-sm text-gray-500">mays kultura sit ketyarsa</p>
          <div class="my-4 text-xl font-bold">$199.00</div>
          <button class="bg-gray-800 text-white px-6 py-1 rounded-lg text-sm hover:bg-gray-700">
            Details
          </button>
        </div>
      </div>

      <div class="border rounded-lg overflow-hidden text-center">
        <img src="https://www.galialahav.com/cdn/shop/files/ElyseeFT.jpg?v=1724152009&width=1050" alt="Product 2" className='h-fit' />
        <div class="p-4">
          <h3 class="text-lg font-semibold">MIUAYSE</h3>
          <p class="text-sm text-gray-500">mays kultura sit ketyarsa</p>
          <div class="my-4 text-xl font-bold">$199.00</div>
          <button class="bg-gray-800 text-white px-6 py-1 rounded-lg text-sm hover:bg-gray-700">
            Details
          </button>
        </div>
      </div>

      <div class="border rounded-lg overflow-hidden text-center">
        <img src="https://admin.morilee.com/wp-content/uploads/2023/04/floral-lace-wedding-dress-ideas.jpg" alt="Product 2"  className='h-fit'/>
        <div class="p-4">
          <h3 class="text-lg font-semibold">MIUAYSE</h3>
          <p class="text-sm text-gray-500">mays kultura sit ketyarsa</p>
          <div class="my-4 text-xl font-bold">$199.00</div>
          <button class="bg-gray-800 text-white px-6 py-1 rounded-lg text-sm hover:bg-gray-700">
            Details
          </button>
        </div>
      </div>

      <div class="border rounded-lg overflow-hidden text-center">
        <img src="https://www.devotiondresses.com/cdn/shop/products/thumb_58216_product_original.jpg?v=1680005678" alt="Product 2" className='h-fit'/>
        <div class="p-4">
          <h3 class="text-lg font-semibold">MIUAYSE</h3>
          <p class="text-sm text-gray-500">mays kultura sit ketyarsa</p>
          <div class="my-4 text-xl font-bold">$199.00</div>
          <button class="bg-gray-800 text-white px-6 py-1 rounded-lg text-sm hover:bg-gray-700">
            Details
          </button>
        </div>
      </div>

    </div>
  </section>

  <footer class="bg-gray-100 py-10">
    <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
      
      <div>
        <h3 class="font-bold text-gray-800 mb-4">Information</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:underline">Contact</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Delivery</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Legal Notice</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Terms and Conditions</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">About Us</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-gray-800 mb-4">Our Offers</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:underline">New Products</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Specials</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Manufacturers</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Suppliers</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-gray-800 mb-4">Your Account</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:underline">Your Account</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Personal Information</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Addresses</a></li>
          <li><a href="#" class="text-gray-600 hover:underline">Order History</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <section class="relative">
    <img src="https://whenfreddiemetlilly.com.au/cdn/shop/articles/1T8A0325-1024x683.jpg?v=1711676075" alt="Wedding Banner" class="w-full object-cover h-72 sm:h-96"/>
    <div class="absolute inset-0 flex justify-center items-center">
      <h2 class="text-white text-4xl font-bold">Accessories</h2>
    </div>
  </section>
    </>
  )
}

export default App