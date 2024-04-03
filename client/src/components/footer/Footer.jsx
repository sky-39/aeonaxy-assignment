import {
  FaBasketballBall,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between pt-6 px-16 font-light bg-gray-100 mt-auto">
      <div className="w-3/12">
        <p
          style={{
            fontFamily: "Dancing Script",
            fontWeight: "400",
          }}
          className="text-pink-500 text-3xl font-bold cursor-pointer my-2"
        >
          dribble
        </p>
        <p className="text-sm my-2">
          Dribble is the world{"'"}s leading community for creatives to share,
          grow and get hired.
        </p>
        <div className="flex flex-row my-3">
          <div className="mr-1 cursor-pointer hover:shadow-sm">
            <FaBasketballBall size={20} />
          </div>
          <div className="mx-1 cursor-pointer hover:shadow-sm">
            <FaTwitter size={20} />
          </div>
          <div className="mx-1 cursor-pointer hover:shadow-sm">
            <FaFacebook size={20} />
          </div>
          <div className="mx-1 cursor-pointer hover:shadow-sm">
            <FaInstagram size={20} />
          </div>
          <div className="mx-1 cursor-pointer hover:shadow-sm">
            <FaPinterest size={20} />
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-sm my-4 cursor-pointer hover:underline">
          For Designers
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">Go Pro!</p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Explore Design Work
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Design Blog
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Overtime Podcast
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">Playoffs</p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Weekly Warm-up
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Refer a Friend
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Code of Conduct
        </p>
      </div>
      <div>
        <p className="font-bold text-sm my-4 cursor-pointer hover:underline">
          Hire Designers
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Post a Job Opening
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Post a Freelance Project
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Search for Designers
        </p>
        <p className="font-bold text-sm my-4 cursor-pointer hover:underline">
          Brands
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Advertise with Us
        </p>
      </div>
      <div>
        <p className="font-bold text-sm my-4 cursor-pointer hover:underline">
          Company
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">About</p>
        <p className="text-sm my-4 cursor-pointer hover:underline">Carriers</p>
        <p className="text-sm my-4 cursor-pointer hover:underline">Support</p>
        <p className="text-sm my-4 cursor-pointer hover:underline">Media Kit</p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Testimonials
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">API</p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Terms of Service
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Privacy Policy
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Cookie Policy
        </p>
      </div>
      <div>
        <p className="font-bold text-sm my-4 cursor-pointer hover:underline">
          Directories
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Design Jobs
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Designers for Hire
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Freelance Designers for Hire
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">Tags</p>
        <p className="text-sm my-4 cursor-pointer hover:underline">Places</p>
        <p className="font-bold text-sm my-4 cursor-pointer hover:underline">
          Design Assets
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Dribble Marketplace
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Creative Market
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Fontspring
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Font Squirrel
        </p>
      </div>
      <div>
        <p className="font-bold text-sm my-4 cursor-pointer hover:underline">
          Design Resources
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Freelancing
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Design Hiring
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Design Portfolio
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Design Education
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Creative Process
        </p>
        <p className="text-sm my-4 cursor-pointer hover:underline">
          Design Industry Trends
        </p>
      </div>
    </div>
  );
};

export default Footer;
