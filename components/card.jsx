"use client";

import { useState } from 'react';
import Button from './button';
import vector from '../public/vector.svg';
import star from '../public/Star.svg';
import starfill from '../public/Star_fill.svg';
import Image from 'next/image';
import { list } from '@/lib/data';
import { motion } from 'framer-motion';

const Card = () => {

    const [activeBtn, setActiveBtn] = useState(1); // Inicializa activeBtn con 1
    const [products, setProducts] = useState([...list]);
    

    const handleClick = (index) => {
        setActiveBtn(index);
    }

    const getFilterList = () => {
        if(activeBtn === 2){
            return products.filter((item) => item.available);
        }
        return products;
    }

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y:0,
            transition: {
                delay: 0.05 * index,
            }
        }),
    }    

    return (
        <section className="text-white py-4 relative overflow-hidden">
            <div className="w-[90%] mx-auto py-12 grid gap-4
            text-sm sm:text-base md:text-lg xl:text-xl">
                {/* Container info */}
                <motion.article className="text-center z-20 grid gap-3"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                    <h1 className="text-2xl sm:text-3xl font-semibold md:text-4xl">Our Collection</h1>
                    <p className="text-grayLigth lg:w-[550px] xl:w-[600px]
                    mx-auto">
                        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                    </p>
                </motion.article>

                <Image src={vector} alt="" className="absolute
                top-6 right-[-4rem]"/>

                {/* Products container */}

                {/* Filtros */}
                <motion.div className="flex flex-col sm:flex-row gap-2 justify-center items-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}>
                    <button
                    className={`${activeBtn === 1 ? 'btn__style  bg-grayLigth' : 'btn__style'}`}
                    onClick={() => handleClick(1)}
                    >
                        All Products
                    </button>
                    <button
                    className={`${activeBtn === 2 ? 'btn__style bg-grayLigth' : 'btn__style'}`}
                    onClick={() => handleClick(2)}
                    >
                        Available Now
                    </button>
                </motion.div>

                {/* Products */}

                <motion.section className="grid gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-10 mt-10"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.135 }}>
                    {getFilterList().map((item, index) => (
                        // Product
                        <motion.div className="relative"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        >
                            <article className="relative w-full grid gap-2
                            max-w-[450px] mx-auto" key={item.id}>
                                <div style={{ position: 'relative', width: '100%', paddingTop: '62%' }}>
                                    <Image
                                        src={item.image}
                                        alt=""
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg absolute top-0 left-0"
                                    />
                                </div>
                                <div className="flex items-center justify-between font-semibold">
                                    <h3 className="">{item.name}</h3>
                                    <p className="bg-greenLigth text-sm text-grayDark font-bold
                                    py-1 px-2 rounded-md">
                                        {item.price}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Image src={item.rating !== null ?
                                            starfill : star} alt="" />
                                        <p className="flex gap-1 font-semibold items-center">
                                            {item.rating}
                                            <span className="font-light text-sm text-grayLigth">
                                                ({item.votes} votos)
                                            </span>
                                        </p>
                                    </div>

                                    <p className="text-sm text-redDark">{item.available ? '' : 'sold out'}</p>
                                </div>
                            </article>

                            <p className="">
                                {
                                    item.popular
                                        ? <span className="absolute left-3 top-2 bg-yellowLigth text-blackDark font-bold text-sm py-1 px-3 rounded-full">
                                            Popular
                                        </span>
                                        : <span></span>
                                }
                            </p>
                        </motion.div>
                    ))}
                </motion.section>
            </div >
        </section >
    )
}

export default Card