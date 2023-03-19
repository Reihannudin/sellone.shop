import React from "react";

const product = {
    name: "Dadar Coklat - Za Choco",
    price: 10000,
    store_name: "Zacky's Food",
    description:
        "Produk dibuat oleh tangan-tangan yang berkualitas. Dengan tingkat kepuasan 100%",
};


export const ProductComponent = () => {

    return(
        <div>
            <div>
                <h6 className="font-medium text-xl mt-2">{product.name}</h6>
                <h3 className="text-xl my-2">
                    <small className="">IDR.</small> <b>{product.price}</b>
                </h3>
                <div>

                    <button id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover"
                            className="text-black justify-between bg-gray-100 hover:bg-gray-200 text-black w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button">Varian<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none"
                                                              stroke="currentColor" viewBox="0 0 24 24"
                                                              xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg></button>

                    <div id="dropdownRadioBgHover"
                         className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownRadioBgHoverButton">
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="default-radio-4" type="radio" value="Isi Coklat" name="default-radio"
                                           checked=""
                                           onChange="Isi Coklat"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="default-radio-4"
                                           className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Isi Coklat</label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="default-radio-5" type="radio" value="Isi Strawberry" name="default-radio"
                                           checked=""
                                           onChange="Isi Strawberry"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="default-radio-5"
                                           className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Isi Strawberry</label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="default-radio-6" type="radio" value="Isi Keju" name="default-radio"
                                           checked=""
                                           onChange="Isi Keju"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="default-radio-6"
                                           className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Isi Keju</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 mb-4">
                    <h6 className="font-bold text-lg">Detail</h6>
                    <p className="mt-2 text-gray-400">{product.description}</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

/*
*
*
                <button id="dropdownHelperButton" data-dropdown-toggle="dropdownHelper"
                        className="bg-gray-100 hover:bg-gray-200 text-black w-full justify-between  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button">Tambahan Topping <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none"
                                                             stroke="currentColor" viewBox="0 0 24 24"
                                                             xmlns="http://www.w3.org/2000/svg">
                    <path  d="M19 9l-7 7-7-7"></path>
                </svg></button>

                <div id="dropdownHelper"
                     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="p-3 space-y-1  text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownHelperButton">
                        <li>
                            <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <div className="flex items-center h-5">
                                    <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1"
                                           checked=""
                                           onChange=""
                                           type="checkbox" value=""
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                </div>
                                <div className="ml-2 text-sm">
                                    <label htmlFor="helper-checkbox-1"
                                           className="font-medium text-gray-900 dark:text-gray-300">
                                        <div>Topping Tiramisu</div>
                                        <p id="helper-checkbox-text-1"
                                           className="text-xs font-normal text-gray-500 dark:text-gray-300">Tambahkan Topping Tiramisu ke menu anda</p>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <div className="flex items-center h-5">
                                    <input id="helper-checkbox-2" aria-describedby="helper-checkbox-text-2"
                                           type="checkbox" value=""
                                           checked=""
                                           onChange=""
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                </div>
                                <div className="ml-2 text-sm">
                                    <label htmlFor="helper-checkbox-2"
                                           className="font-medium text-gray-900 dark:text-gray-300">
                                        <div>Topping Extra Coklat</div>
                                        <p id="helper-checkbox-text-2"
                                           className="text-xs font-normal text-gray-500 dark:text-gray-300">Menu Dengan Extra Coklat Di atasanya</p>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <div className="flex items-center h-5">
                                    <input id="helper-checkbox-3" aria-describedby="helper-checkbox-text-3"
                                           type="checkbox" value=""
                                           checked=""
                                           onChange=""
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                </div>
                                <div className="ml-2 text-sm">
                                    <label htmlFor="helper-checkbox-3"
                                           className="font-medium text-gray-900 dark:text-gray-300">
                                        <div>Tiramisu + Coklat + Keju</div>
                                        <p id="helper-checkbox-text-3"
                                           className="text-xs font-normal text-gray-500 dark:text-gray-300">Menu paket lengkap dengan tambahan keju</p>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
* */