import { Layout } from "./components/Layout";
import logo from "./assets/logo.png";
import laptop from "./assets/right-laptop.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

function App() {
  return (
    <Layout>
      <div className="flex flex-col">
        <img src={logo} alt="logo" className="object-cover h-auto w-24 pb-10" />
        <div className="uppercase text-7xl font-bold text-center text-gray-100">
          landing page
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="pt-8">
          <img src={laptop} alt="laptop" className="w-[220vh] h-auto" />
        </div>
        <div className="w-[250vh] py-10">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id rem
            illo libero consequuntur voluptatibus molestias corporis velit
            blanditiis, quod esse architecto quas! Minus, facilis.
          </p>
          <form action="" className="text-center">
            <input
              type="text"
              class=" block w-full my-7 p-2 bg-transparent text-gray-900	text-center border border-gray-200 focus:border-purple-800"
              placeholder="Escribe tu email"
              required
            />
            <button className="bg-gray-200 text-gray-900 py-2 px-5 ">
              Suscribirte
            </button>
          </form>

          <div className="flex flex-row gap-8  pt-10 justify-center text-blue-500">
            <a href="#" className="">
              <FaFacebook className="size-8 " />
            </a>
            <a href="#" className="">
              <FaInstagram className="size-8" />
            </a>
            <a href="#" className="">
              <FaTwitter className="size-8" />
            </a>
            <a href="#" className="">
              <FaYoutube className="size-8" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
