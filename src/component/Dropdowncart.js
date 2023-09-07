import React from 'react'
import cactus from '../asserts/images/cactus.png';
import del from '../asserts/images/delete.png'
import shoes from '../asserts/images/shoes.png'
import watch from '../asserts/images/watch.png'
import goodluck from '../asserts/images/goodluck.png'
import transplant from '../asserts/images/transplant.jpeg'
function Dropdowncart() {
  return (
    <>
    <div className="checkout bg-slate-300 w-80 h-1/2  border-gray-200 border-2">
    <div className='cart w-80 h-96   overflow-auto' >
        <div className="flex justify-between"> 
        <span className=' text-2xl font-bold'>Cart Items </span>
        <span className=' font-bold text-green-500'>5 items</span>
        </div>
        <hr className="m-2 border-black" />
    <div className="cactus mt-5 flex justify-evenly">
        <img src={cactus} alt="" className=' w-24 h-20 ' />
        <div className="content">
            <p className=' font-bold'>Cactus mini plant</p>
            <p>Quantity : 02</p>
            <p className="rate text-2xl font-bold">$1229</p>
        </div>
        <img src={del} alt="" className='  ml-6 w-6 h-6' />
    </div>
    <hr className="mt-8 " />


    <div className="Shoes mt-5 flex justify-evenly">
        <img src={shoes} alt="" className=' w-24 h-20 ' />
        <div className="content">
            <p className=' font-bold'>Mens Sport Shoes</p>
            <p>Quantity : 01</p>
            <p className="rate text-2xl font-bold">$119</p>
        </div>
        <img src={del} alt="" className='  ml-6. w-6 h-6' />
    </div>
    <hr className="m-8 " />


    <div className="watch mt-5 flex justify-evenly">
        <img src={watch} alt="" className=' w-24 h-20 ' />
        <div className="content">
            <p className=' font-bold'>Watch for Men</p>
            <p>Quantity : 03</p>
            <p className="rate text-2xl font-bold">$2119</p>
        </div>
        <img src={del} alt="" className='  ml-6 w-6 h-6' />
    </div>
    <hr className="m-8 " />
    <div className="goodluck mt-5 flex justify-evenly">
        <img src={goodluck} alt="" className=' w-24 h-24 ' />
        <div className="content">
            <p className=' font-bold'>GoodLuck  Plant</p>
            <p>Quantity : 03</p>
            <p className="rate text-2xl font-bold">$1019</p>
        </div>
        <img src={del} alt="" className='  ml-6 w-6 h-6' />
    </div>
    <hr className="m-8 " />


    <div className="plant mt-5 flex justify-evenly">
        <img src={transplant} alt="" className=' w-24 h-20 ' />
        <div className="content">
            <p className=' font-bold'>Transparent  Plant</p>
            <p>Quantity : 03</p>
            <p className="rate text-2xl font-bold">$1019</p>
        </div>
        <img src={del} alt="" className='  ml-6 w-6 h-6' />
    </div>
    <hr className="m-8 " />

    </div>
    
    <div className=" check flex justify-center mt-5 mb-3 bg-purple-600 text-white h-10 items-center rounded text-2xl"> CheckOut</div>

    </div>
    </>
  )
}

export default Dropdowncart