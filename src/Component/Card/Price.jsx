import Features from "./Features";


const Price = ({priceob}) => {
    const {price,name,features} = priceob;
    return (
        <div className="p-4 bg-green-500 rounded-md  flex flex-col gap-3">
            <p >
                 <span className="text-7xl"> {price}</span> 
                 <span>/month</span>
            </p>
            <p className="text-xl  font-bold">{name}</p>
            <div className="flex-grow ">
                {
                    features.map((item,idx)=><Features
                    featureOption={item}
                     key={idx}>

                     </Features>)
                }
            </div>
            <button className="btn btn-info mt-4 w-full">Purchase</button>
            
        </div>
    );
};

export default Price;