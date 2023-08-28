import carIcon from '../assets/icons/car.svg';
import infoIcon from '../assets/icons/info.svg';
import buyIcon from '../assets/icons/dollar.svg';

export default function componentList(){
    const infoList = [
        {
          icon: carIcon,
        },
        {
          icon: infoIcon,
        },
        {
          icon: buyIcon,
        },
      ];
    return(
        <>
        <div className=' flex items-center '>
          <ul className=" relative z-50">
            {infoList.map((item, index) => (
              <a
                className='flex h-auto items-center mb-24'
                key={index}
                href=""
                onClick={(e) => handleLinkClick(e, item.heading)}
              >
                <li className="py-12 px-12 mr-6 rounded-full bg-slate-100 text-white flex justify-center items-center">
                  <img className='w-24' src={item.icon} alt="" />
                </li>
              </a>
            ))}
          </ul>
          {/* <div className=' h-96 w-auto flex  justify-between ml-40'>
              {vehicleSpecifications.map(category => (
                <div className=' px-42' key={category.category}>
                  <h2 className=' font-heading text-16 '>{category.category}</h2>
                  <ul>
                    {category.values.map(value => (
                      <li className=' font-body font-bold text-32 text-hover -mt-12' key={value.unit}>
                        {value.value}
                      </li>
                    ))}
                    {category.valuesInSI.map(value => (
                      <li className=' font-body font-bold text-16 -mt-10' key={value.unit}>
                        {value.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}

        </div>
        </>
    )
}