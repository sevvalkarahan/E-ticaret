import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import Button from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { Products } from "../../data/products"
import { _selectedProduct } from '../../store/product';
import { useEffect, useState } from 'react';
import Profile from '../../layouts/main/sidebar/right';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { setCartProduct, setFavoriteProduct, setRemoveFromFavorite } from '../../store/cart';

export const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [favorite, setFavorite] = useState(false);
    const { selectedProduct } = useSelector((state) => state.products)


    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = () => {
        Products && Products.map(item => {
            if (item.id == id) {
                dispatch(_selectedProduct(item))
            }

        })
    }

    const addToFavorite = () => {
        dispatch(setFavoriteProduct(selectedProduct));
        setFavorite(true);
    }
    const removeFromFavorite = () => {
        dispatch(setRemoveFromFavorite(selectedProduct.id));
        setFavorite(false);
    }
    const addToCart = () => {
        dispatch(setCartProduct(selectedProduct));
    };


    return (
        <div key={selectedProduct.id} className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex justify-between'>
                <div className='w-4/5 flex justify-center items-center'>
                    <div className='w-3/5 shadow-lg'>
                        <div className='flex justify-center mt-10'>
                            <img src={selectedProduct.image} className="w-2xs h-[300px] object-contain" />
                        </div>
                        <div className='text-center mt-10'>
                            <h1 className='text-xl font-bold text-primary-500'>{selectedProduct.title}</h1>
                            <p className='text-gray-500 px-2 text-sm mt-5'>{selectedProduct.description}</p>
                            <div className='flex justify-center items-center gap-5 mt-5'>
                                <div className='flex items-center text-lg font-bold'>
                                    {selectedProduct.price} TL
                                </div>

                                <div className='flex items-center'>
                                    {
                                        !favorite ? <CiHeart onClick={addToFavorite} className="text-blue-violet text-xl cursor-pointer" />
                                            :
                                            <FaHeart onClick={removeFromFavorite} className="text-blue-violet text-xl cursor-pointer" />
                                    }
                                </div>

                            </div>
                            <span className='italic text-gray-400 '>stok durumu: {selectedProduct.stok}</span>
                            <div className='mb-5'>
                                {
                                    selectedProduct.stok < 1 ? (
                                        <div className='flex flex-col justify-center items-center'>
                                            <span className='text-red-600 font-bold'>Stokta ürün kalmamıştır.</span>
                                            <Button
                                                disabled
                                                variant="primary"
                                                size="lg"
                                                onClick={addToCart}
                                                className={'w-1/3'}
                                            >Sepete Ekle</Button>
                                        </div>

                                    ) :
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            onClick={addToCart}
                                            className={'w-1/3'}
                                        >Sepete Ekle</Button>
                                }

                            </div>

                        </div>
                    </div>

                </div>
                <div className='w-1/5 shadow-lg'>
                    <Profile />
                </div>

            </div>
        </div>
    )
}


