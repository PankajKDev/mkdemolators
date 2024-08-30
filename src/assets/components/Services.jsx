import { cardData } from "../constants/data.js";
import Card from "./Card";
const Services = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 px-4">
      <h1 className="text-4xl font-serif font-semibold text-gray-900 mb-6">Our Services</h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-screen-lg">
  {
    cardData.map((item,index)=>{
        return (
            <div key={index}>
                <Card cardTitle={item.cardTitle} cardContent={item.cardContent}/>
                </div>
        )
    })
  }
      
      </div>
    </div>
  );
};

export default Services;
