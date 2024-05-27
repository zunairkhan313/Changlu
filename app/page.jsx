import Image from "next/image";
import CarouselPage from "./Components/Banner";
import image1 from '../public/Images/company.JPG'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import map from "../public/Images/map-01.png"
import CateSliders from "./Components/CategorySlider";
import SpecialOffers from "./Components/SpecialOffers";
import "./Components/hr.css"

export default function Home() {
  return (
    <>
   
      <style>{`
                body {
                    background-color: white;
                }
            `}</style>
      <div className="bg-white">

        <div>
          <CarouselPage />
        </div>
        <br />
        {/* <div className="container mt-5">

          <div className="flex flex-wrap justify-around">
            <div className="flex gap-3">
              <div className="font-bold text-6xl">1.</div>
              <div>
                <p className="font-bold mt-2">SHOP WITH CONFIDENCE</p>
                <p className="text-sm mt-1">Shipping all over Pakistan</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div id="sec" className="font-bold text-6xl">2.</div>
              <div>
                <p className="font-bold mt-2">
                  NATIONWIDE DELIVERY</p>
                <p className="text-sm mt-1">Email:Info@changlutools.pk
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div id="third" className="font-bold text-6xl">3.</div>
              <div>
                <p className="font-bold mt-2">FRIENDLY ONLINE SUPPORT</p>
                <p className="text-sm mt-1">100% original products</p>
              </div>
            </div>
          </div>
        </div> */}
        <br />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <Image
                style={{ "height": "600px", "width": "100%" }}
                className="img-fluid object-cover"
                objectFit="cover"
                src={image1}
                alt='logo'
              />
            </div>
            <div className="col-lg-6">
              <h1 style={{ "color": "#006429" }} className="text-lg font-bold tracking-wider">COMPANY PROFILE</h1><br />
              <h3 style={{ "color": "#006429" }} className="text-2xl font-bold"><span className="text-black">ABOUT</span> CHANGLU</h3><br />
              <p className="text-lg text-justify">
              Explore Excellence with Changlu Tools UAE a distinguished industrial enterprise specializing in developing, producing, and selling top-quality tools. With extensive facilities covering 30,000 square meters and a range of 16 categories and over 5,000 specifications, our versatile tools are trusted across machinery, petroleum, chemical, electric power, and automobile manufacturing industries. Recognized for quality and innovation, Changlu
              </p><br />

              <h3 style={{ "color": "#006429" }} className="text-2xl font-bold">CHANGLU <span className="text-black">Offers:</span></h3> <br />
              <div className="flex">
                <CheckCircleIcon style={{ "color": "#006429" }} />
                <p className="text-lg font-bold ml-4">Affordable Price</p>
              </div>
              <div className="flex">
                <CheckCircleIcon style={{ "color": "#006429" }} />
                <p className="text-lg font-bold ml-4">Promotion Support</p>
              </div>
              <div className="flex">
                <CheckCircleIcon style={{ "color": "#006429" }} />
                <p className="text-lg font-bold ml-4">Ready stock</p>
              </div>
              <div className="flex">
                <CheckCircleIcon style={{ "color": "#006429" }} />
                <p className="text-lg font-bold ml-4">Long-Testing Quality</p>
              </div>
              <br />
              <button style={{ "backgroundColor": "#006429" }} className="text-white text-sm p-3 rounded-[5px] hover:rounded-[10px]">More Details</button>
              <br /><br /><br />
            </div>
          </div>
        </div>
          <h1 className="text-2xl text-center font-bold text-black mt-5 italic font-sans">TOP CATEGORIES</h1>
        <div style={{ borderBottom: "3px solid #006429", width: "160px" }} className="container">
        </div>
        {/* <div style={{borderTop:"4px solid black",marginTop:"-2px"}} className="container">
        
      </div> */}

        <div className="container mt-3">
          <CateSliders />
        </div><br />
        <br /><br />
          <h1 className="text-2xl text-center font-bold text-black mt-5 italic font-sans">CHANGLU GLOBAL NETWORK</h1>
        <div style={{ borderBottom: "3px solid #006429", width: "300px" }} className="container">
        </div>
        <br />
        <div className="mt-5">
          <Image
            src={map}
            width={"100%"}
            height={"100%"}
            alt="map"
          />
        </div><br /><br />



          <h1 className="text-2xl text-center font-bold text-black mt-5 italic font-sans">HOT OFFERS</h1>
        <div style={{ borderBottom: "3px solid #006429", width: "120px" }} className="container">
        </div>
        <div className="container mt-3">
          <SpecialOffers />
        </div>

      </div>
    </>
  );
}
