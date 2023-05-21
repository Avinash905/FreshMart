import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="max-w-6xl mx-auto py-10 px-4 flex flex-col gap-8 md:flex-row ">
        <div className="flex flex-col gap-4 basis-1/3 text-center md:text-left">
          <h3 className="text-yellow-400 font-bold text-xl">FreshMart</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            incidunt commodi soluta reiciendis nisi vel dolore voluptas
            perferendis eveniet iste?
          </p>
          <div className="flex justify-between items-center">
            <AiFillFacebook className="text-3xl" />
            <AiFillInstagram className="text-3xl" />
            <AiFillTwitterCircle className="text-3xl" />
            <AiFillYoutube className="text-3xl" />
            <AiFillLinkedin className="text-3xl" />
          </div>
        </div>
        <div className="flex basis-2/3 justify-center text-center">
          <div className="flex flex-col gap-3 basis-1/4">
            <h4>Products</h4>
            <p className="text-gray-300 text-sm">Product 1</p>
            <p className="text-gray-300 text-sm">Product 2</p>
            <p className="text-gray-300 text-sm">Product 3</p>
            <p className="text-gray-300 text-sm">Product 4</p>
          </div>
          <div className="flex flex-col gap-3 basis-1/4">
            <h4>Products</h4>
            <p className="text-gray-300 text-sm">Product 1</p>
            <p className="text-gray-300 text-sm">Product 2</p>
            <p className="text-gray-300 text-sm">Product 3</p>
            <p className="text-gray-300 text-sm">Product 4</p>
          </div>
          <div className="flex flex-col gap-3 basis-1/4">
            <h4>Products</h4>
            <p className="text-gray-300 text-sm">Product 1</p>
            <p className="text-gray-300 text-sm">Product 2</p>
            <p className="text-gray-300 text-sm">Product 3</p>
            <p className="text-gray-300 text-sm">Product 4</p>
          </div>
          <div className="flex flex-col gap-3 basis-1/4">
            <h4>Products</h4>
            <p className="text-gray-300 text-sm">Product 1</p>
            <p className="text-gray-300 text-sm">Product 2</p>
            <p className="text-gray-300 text-sm">Product 3</p>
            <p className="text-gray-300 text-sm">Product 4</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
