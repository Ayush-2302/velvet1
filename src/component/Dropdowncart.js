import React from 'react'
import cactus from '../asserts/images/cactus.png';
import del from '../asserts/images/delete.png'
import shoes from '../asserts/images/shoes.png'
import watch from '../asserts/images/watch.png'
function Dropdowncart() {
  return (
    <>
    
    <div className='cart bg-slate-300  w-80  h-96' >
        <div className="flex justify-between"> 
        <span className=' text-2xl font-bold'>Cart Items </span>
        <span className=' font-bold text-green-500'>5 items</span>
        </div>
        <hr classname="m-2 border-black" />
    <div className="cactus mt-5 flex justify-evenly">
        <img src={cactus} alt="" className=' w-24 h-20 ' />
        <div className="content">
            <p className=' font-bold'>Cactus mini plant</p>
            <p>Quantity : 02</p>
            <p className="rate text-2xl font-bold">$1229</p>
        </div>
        <img src={del} alt="" className='  ml-5 w-8 h-8' />
    </div>
    <hr classname="mt-8 " />


    <div className="Shoes mt-5 flex justify-evenly">
        <img src={shoes} alt="" className=' w-24 h-20 ' />
        <div className="content">
            <p className=' font-bold'>Mens Sport Shoes</p>
            <p>Quantity : 01</p>
            <p className="rate text-2xl font-bold">$119</p>
        </div>
        <img src={del} alt="" className='  ml-5 w-8 h-8' />
    </div>
    <hr classname="m-8 " />


    <div className="watch mt-5 flex justify-evenly">
        <img src={watch} alt="" className=' w-24 h-20 ' />
        <div className="content">
            <p className=' font-bold'>Watch for Men</p>
            <p>Quantity : 03</p>
            <p className="rate text-2xl font-bold">$2119</p>
        </div>
        <img src={del} alt="" className='  ml-5 w-8 h-8' />
    </div>
    <hr classname="m-8 " />
    <div className="watch mt-5 flex justify-evenly">
        <img src={watch} alt="" className=' w-24 h-20 ' />
        <div className="content">
            <p className=' font-bold'>Watch for Men</p>
            <p>Quantity : 03</p>
            <p className="rate text-2xl font-bold">$2119</p>
        </div>
        <img src={del} alt="" className='  ml-5 w-8 h-8' />
    </div>
    <hr classname="m-8 " />

    </div>
    </>
  )
}

export default Dropdowncart